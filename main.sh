#!/bin/bash

function printBox() {
  local s=("$@") b w
  for l in "${s[@]}"; do
    ((w < ${#l})) && {
      b="$l"
      w="${#l}"
    }
  done
  tput setaf 3
  echo " -${b//?/-}-
| ${b//?/ } |"
  for l in "${s[@]}"; do
    printf '| %s%*s%s |\n' "$(tput setaf 4)" "-$w" "$l" "$(tput setaf 3)"
  done
  echo "| ${b//?/ } |
 -${b//?/-}-"
  tput sgr 0
  sleep 5
}

function ask() {
  read -p "$1 [Y/n]: " -n 1 answer
  if [ "$answer" == 'n' ]; then
    echo
    echo "Okay, please verify that."
    sleep 1
    exit 0
  fi
  echo
  sleep 1
}

function vrtCreateRef() {
  printBox "Creating reference images..." "We'll open a browser tab but this is not the final report," "please skip it and wait for the final report."
  npx backstop test || npx backstop approve
  sleep 3
}

function vrtKraken() {
  restartContainers &&
    echo &&
    echo "Running Kraken tests..." &&
    npx kraken-node run &&
    echo "Removing Kraken reports..." &&
    cleanReport &&
    printBox "Creating Backstop report for Kraken tests over Ghost 3.41.1 and 4.44.0" &&
    sleep 2 &&
    generateBackstopJSON "Kraken" "3" &&
    vrtCreateRef &&
    generateBackstopJSON "Kraken" "4" &&
    printBox "Let's produce the final report for Kraken!" &&
    npx backstop test ||
    printBox "Inspect the final report before continue..."
}

function vrtCypress() {
  restartContainers &&
    echo &&
    echo "Running Cypress tests..." &&
    npx cypress run --headless --spec "cypress/integration/semana6/*.spec.js" &&
    echo "Moving Cypress images..." &&
    mkdir --parents screenshots/cypress &&
    mv cypress/screenshots/semana6 screenshots/cypress &&
    cleanReport &&
    printBox "Creating Backstop report for Cypress tests over Ghost 3.41.1 and 4.44.0" &&
    sleep 2 &&
    generateBackstopJSON "Cypress" "3" &&
    vrtCreateRef &&
    generateBackstopJSON "Cypress" "4" &&
    printBox "Let's produce the final report for Cypress!" &&
    npx backstop test ||
    printBox "Inspect the final report before continue..."
}

function generateBackstopJSON() {
  if [ "$1" == "Kraken" ] && [ "$2" == "3" ]; then
    node genJSON.js Kraken screenshots/kraken/ghost-3.41.1 screenshots/kraken/ghost-3.41.1
  elif [ "$1" == "Kraken" ] && [ "$2" == "4" ]; then
    node genJSON.js Kraken screenshots/kraken/ghost-3.41.1 screenshots/kraken/ghost-4.44.0
  elif [ "$1" == "Cypress" ] && [ "$2" == "3" ]; then
    node genJSON.js Cypress screenshots/cypress/semana6/ghost-3.41.1.spec.js screenshots/cypress/semana6/ghost-3.41.1.spec.js
  elif [ "$1" == "Cypress" ] && [ "$2" == "4" ]; then
    node genJSON.js Cypress screenshots/cypress/semana6/ghost-3.41.1.spec.js screenshots/cypress/semana6/ghost-4.44.0.spec.js
  fi
}

function cleanReport() {
  echo "Removing backstop reference data..."
  sleep 2
  rm -rf backstop_data/bitmaps_reference backstop_data/bitmaps_test reports/ .kraken
  echo "Successfully removed"
  sleep 2
}

function createContainers() {
  GHOST3_CONTAINER="ghost_3.41.1"
  GHOST4_CONTAINER="ghost_4.44.0"

  echo
  echo "Attempting to create needed containers..."
  sleep 2

  for id in $(docker ps -q); do
    if [[ $(docker port "${id}") == *"${1}"* ]] || [[ $(docker port "${id}") == *"${2}"* ]]; then
      echo
      echo "Stopping container ${id}"
      docker stop "${id}"
      echo
    fi
  done

  echo
  echo "Creating ghost_3.41.1..."
  sleep 2
  if [ "$(docker container inspect -f '{{.Name}}' $GHOST3_CONTAINER)" == "/ghost_3.41.1" ]; then
    echo
    echo "You have an existing container with this name $GHOST3_CONTAINER, removing it..."
    docker container rm -f ghost_3.41.1
    sleep 2
    echo "Removed"
    sleep 2
    echo

    echo "Creating container ghost_3.41.1 exposing 2368 port over host 3001 port..."
    sleep 2
    docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.41.1 ghost:3.41.1
    echo
    echo "Created, you can use http://localhost:3001 for further inspection"
    sleep 2

  else
    echo "Creating container ghost_3.41.1 exposing 2368 port over host 3001 port..."
    sleep 2
    docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.41.1 ghost:3.41.1
    echo
    echo "Created, you can use http://localhost:3001 for further inspection"
    sleep 2
  fi

  echo
  echo "Creating ghost_4.44.0..."
  sleep 2
  if [ "$(docker container inspect -f '{{.Name}}' $GHOST4_CONTAINER)" == "/ghost_4.44.0" ]; then
    echo
    echo "You have an existing container with this name $GHOST4_CONTAINER, removing it..."
    docker container rm -f ghost_4.44.0
    sleep 2
    echo "Removed"
    sleep 2
    echo

    echo "Creating container ghost_4.44.0 exposing 2368 port over host 3002 port..."
    sleep 2
    docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.44.0 ghost:4.44.0
    echo
    echo "Created, you can use http://localhost:3002 for further inspection"
    sleep 2

  else
    echo "Creating container ghost_4.44.0 exposing 2368 port over host 3002 port..."
    sleep 2
    docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.44.0 ghost:4.44.0
    echo
    echo "Created, you can use http://localhost:3002 for further inspection"
    sleep 2
  fi
}

function restartContainers() {
  echo
  echo "Deleting database and restarting ghost_3.41.1..."
  docker exec ghost_3.41.1 rm /var/lib/ghost/content/data/ghost.db && docker restart ghost_3.41.1
  sleep 2
  echo "Successfully restarted"
  sleep 2

  echo
  echo "Deleting database and restarting ghost_4.44.0..."
  docker exec ghost_4.44.0 rm /var/lib/ghost/content/data/ghost.db && docker restart ghost_4.44.0
  sleep 2
  echo "Successfully restarted"
  sleep 2
}

function main() {
  printBox "Welcome to the last step of this journey" \
    "" \
    "Members: " \
    "Alonso Daniel Cantu Trejo: <a.cantu@uniandes.edu.co>" \
    "Diego Fernando Eslava Lozano: <d.eslava@uniandes.edu.co>" \
    "Camilo Andres Galvez Vidal: <c.galvezv@uniandes.edu.co>" \
    "Luis Miguel Guzman Perez: <lm.guzmanp1@uniandes.edu.co>" \
    "" \
    "This script will run the following tests: " \
    "" \
    "- Week 7 - Data Generation with Cypress over Ghost 3.41.1" \
    "- Week 6 - Visual Regression Testing using Backstop.js over Ghost 3.41.1 and Ghost 4.44.0 (Kraken version)" \
    "- Week 6 - Visual Regression Testing using Backstop.js over Ghost 3.41.1 and Ghost 4.44.0 (Cypress version)" \
    "- Week 5 - E2E testing over Ghost 3.41.1 and Ghost 4.44.0 (Kraken version)" \
    "- Week 5 - E2E testing over Ghost 3.41.1 and Ghost 4.44.0 (Cypress version)" \
    "" \
    "Please be patient, you'll need approximately 30 minutes." \
    "Take a beer while we execute everything." \
    "" \
    "We'll be asking for confirmation to continue, so please pay attention."

  ask "Are you ready to start?"
  printBox "WARNING!" "Let's make sure about some things" "" "If you're not sure about the following questions please double check before continue," "otherwise everything will fail"
  echo "Did you verify that..."
  ask "... your machine is properly connected to the internet?"
  ask "... you're using node v14.19.2?"
  ask "... Docker is installed and the service is running on your machine?"
  ask "... no containers are running over ports 3001 and 3002?"
  ask "... no http-server is running over port 8080?"

  # Create containers for Ghost 3.41.1 and Ghost 4.44.0
  createContainers 3001 3002

  # Run week 7 tests
  printBox "Running - Week 7 - Data Generation with Cypress over Ghost 3.41.1"
  sleep 2
  npx cypress run --headed --config video=false --spec "cypress/integration/semana7/*.spec.js"

  # Run week 5 & 6 tests
  ask "We're about to start E2E and VRT testing, are you ready to continue?"
  sleep 2

  # Start server for Backstop image comparison and make it run in background
  echo "Starting http-server to serve images for VRT..."
  sleep 2
  npx http-server -p 8080 . &
  echo "Server is running over http://localhost:8080"
  sleep 2

  printBox "Running - Week 6 - Visual Regression Testing using Backstop.js" "Running - Week 5 - E2E testing using Kraken" "" "Ghost 3.41.1 and Ghost 4.44.0 (Kraken version)"
  sleep 2

  vrtKraken

  printBox "WARNING" "" "Proceeding with Cypress testing will remove Backstop VRT & E2E Kraken report." "Please make sure you finished the revision of the generated report"
  ask "Are you ready to continue with Backstop VRT & E2E Cypress testing?"

  printBox "Running - Week 6 - Visual Regression Testing using Backstop.js" "Running - Week 5 - E2E testing using Cypress" "" "Ghost 3.41.1 and Ghost 4.44.0 (Cypress version)"
  sleep 2
  vrtCypress

  echo "Successfully finished!"
}

main
