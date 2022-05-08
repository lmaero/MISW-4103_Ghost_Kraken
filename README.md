# MISW-4103 Ghost and Kraken

----

Author: Luis Miguel Guzman Perez

Mail: <lm.guzmanp1@uniandes.edu.co>

AUT: Ghost 3.41.1

Used Technologies:

- [Ghost](https://github.com/TryGhost/Ghost)
- [Kraken](https://github.com/TheSoftwareDesignLab/Kraken)

----

## General Instructions

1. Open a terminal window and clone this repository

- SSH option
    ```shell
    git clone git@github.com:lmguzmanp/MISW-4103_Ghost_Kraken.git
    ```

- HTTPS option
    ```shell
    git clone https://github.com/lmguzmanp/MISW-4103_Ghost_Kraken.git
    ```

2. Navigate to the cloned directory
     ```shell
     cd MISW-4103_Ghost_Kraken/
     ```
3. Make sure you have the `node` and `npm` engine specified versions. Please
   review [package.json](https://github.com/lmguzmanp/MISW-4103_Ghost_Kraken/blob/bc09c72bae2083199ef5148fe9d9fe1d3e95048f/package.json#L18-L21)

    - You can use [nvm](https://github.com/nvm-sh/nvm), please follow their
      updated instructions


4. Once you have installed `nvm`, you can use the following command to use the
   right version that this repository needs
    ```shell
    nvm install 14
    ```
    ```shell
    nvm use 14
    ```

5. Install dependencies
    ```shell
    npm i
    ```

### Instructions for Kraken

1. Run automated Kraken tests. This command will generate five screenshots
   in the root folder, each corresponding to a successfully tested scenario.
    ```shell
    npm test
    ```

2. Known issues

- Make sure you're not running any Ghost instance inside this folder, there
  is a prepared script for this task
    ```shell
    npm run ghost-stop
    ```

### Instructions for Cypress

1. Run automated Cypress tests by any of the following options. This command
   will generate five screenshots in the `cypress/screenshots/`, each
   corresponding to a successfully tested scenario. Additionally, a video
   will be produced inside the `cypress/videos/` folder.

    - Headed mode (it will open a browser where you can interactively see
      the progress)
    ```shell
    npm run cypress-headed
    ```

    - Headless mode (it won't open a browser, all tests will be executed
      inside the terminal. Please allow 40-50 seconds to finish)
    ```shell
    npm run cypress-headless
    ```

4. Known issues

- Make sure you're not running any Ghost instance inside this folder, there
  is a prepared script for this task
    ```shell
    npm run ghost-stop
    ```
