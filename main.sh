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
  sleep 3
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
  sleep 5
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

function randomMonkey() {
  npx cypress run --headed --config-file "monkey-config.json" --spec "cypress/integration/semana4/monkey.js"
}

function smartMonkey() {
  npx cypress run --headed --config-file "smart-monkey-config.json" --spec "cypress/integration/semana4/smart-monkey.js"
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

function initRiPuppetCoursera() {
  echo
  echo "Clonning RIPuppetCoursera git repository..."
  rm -rf RIPuppetCoursera && git clone git@github.com:TheSoftwareDesignLab/RIPuppetCoursera.git
  sleep 2
  echo "Installing RiPuppet Coursera node dependencies..."
  cd RIPuppetCoursera && rm -rf node_modules && rm -rf package-lock.json && npm install
  sleep 2
  echo
  echo "Node dependencies installed successfully!!"
}

function generateConfigFile() {
echo
echo "Generate RiPuppet configuration file..."
sleep 2
json_data=$(cat <<EOF
{
    "url": "$1",
    "headless": true,
    "depthLevels": 1,
    "inputValues": false,
    "values": {},
    "browsers": ["chromium", "firefox", "webkit"]
}
EOF
)
echo "$json_data";
sleep 2
echo
echo "RiPuppet Config file JSON generated successfully!!!"
echo "$json_data" > config.json
}

function runRiPuppetCoursera() {
  echo
  echo "Running RiPuppet..."
  node index.js
  sleep 2
  echo "RiPuppet finished successfully!"
}

function showRiPuppetReport() {
  echo "Starting http-server to serve Ripper results..."
  sleep 2
  stopService 8081
  npx http-server -p 8081 results &
  sleep 2
  open "http://127.0.0.1:8081"
}

function stopService() {
  touch temp.text
  lsof -n -i4TCP:$1 | awk '{print $2}' > temp.text
  pidToStop=`(sed '2q;d' temp.text)`
  > temp.text
  if [[ -n $pidToStop ]]
  then
    kill -9 $pidToStop
    echo "Congrates!! $1 is stopped."
  else
    echo "Sorry nothing running on above port"
  fi
  rm temp.text
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
    "- Week 7 - Data Generation with Cypress over Ghost 3.41.1 (Time: ~13m)" \
    "- Week 6 - Visual Regression Testing using Backstop.js over Ghost 3.41.1 and Ghost 4.44.0 (Kraken version) (Time: ~5m)" \
    "- Week 6 - Visual Regression Testing using Backstop.js over Ghost 3.41.1 and Ghost 4.44.0 (Cypress version) (Time: ~3m)" \
    "- Week 5 - E2E testing over Ghost 3.41.1 and Ghost 4.44.0 (Kraken version) (Time: ~5m)" \
    "- Week 5 - E2E testing over Ghost 3.41.1 and Ghost 4.44.0 (Cypress version) (Time: ~3m)" \
    "- Week 4 - Random monkey (Exploratory tests) over Ghost 3.41.1 (Cypress version) (Time: ~1m)" \
    "- Week 4 - Smart monkey (Exploratory tests) over Ghost 4.44.0 (Cypress version) (Time: ~3m)" \
    "- Week 4 - Ripper RiPuppet (Exploratory tests) over Ghost 3.41.1 (Time: ~3m)" \
    "- Week 4 - Ripper RiPuppet (Exploratory tests) over Ghost 4.44.0 (Time: ~3m)" \
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
  printBox "Week 7 - Data Generation with Cypress over Ghost 3.41.1"
  sleep 2
  ask "We're about to start Data Generation testing, are you ready to continue?"
  sleep 2
  npx cypress run --headed --spec "cypress/integration/semana7/*.spec.js"

  # Run week 5 & 6 tests
  printBox "Week 6 - Visual Regression Testing using Backstop.js" "Week 5 - E2E testing using Kraken" "" "Ghost 3.41.1 and Ghost 4.44.0 (Kraken version)"
  sleep 2
  ask "We're about to start E2E and VRT testing, are you ready to continue?"
  sleep 2

  # Start server for Backstop image comparison and make it run in background
  echo "Starting http-server to serve images for VRT..."
  sleep 2
  npx http-server -p 8080 . &
  echo "Server is running over http://localhost:8080"
  sleep 2
  vrtKraken

  printBox "WARNING" "" "Proceeding with Cypress testing will remove Backstop VRT & E2E Kraken report." "Please make sure you finished the revision of the generated report"

  printBox "Week 6 - Visual Regression Testing using Backstop.js" "Week 5 - E2E testing using Cypress" "" "Ghost 3.41.1 and Ghost 4.44.0 (Cypress version)"
  sleep 2
  ask "Are you ready to continue with Backstop VRT & E2E Cypress testing?"
  sleep 2
  vrtCypress

  printBox "Week 4 - Monkey Testing" "" "Ghost 3.41.1 (Random monkey version)"
  sleep 2
  ask "Are you ready to continue with monkey testing?"
  sleep 2
  randomMonkey

  printBox "Week 4 - Smart Monkey Testing" "" "Ghost 4.44.0 (Smart monkey version)"
  sleep 2
  ask "Are you ready to continue with smart monkey testing?"
  sleep 2
  smartMonkey

  printBox "Week 4 - Ripper RiPuppet" "" "Ghost 3.41.1"
  sleep 2
  ask "Are you ready to continue with ripper testing?"
  sleep 2
  initRiPuppetCoursera
  sleep 2
  generateConfigFile "localhost:3001"
  sleep 2
  runRiPuppetCoursera

  printBox "Week 4 - Ripper RiPuppet" "" "Ghost 4.44.0"
  sleep 2
  ask "Are you ready to continue with ripper testing?"
  sleep 2
  generateConfigFile "localhost:3002"
  sleep 2
  runRiPuppetCoursera

  showRiPuppetReport
  cd ..

  echo "Successfully finished!"
}

main
