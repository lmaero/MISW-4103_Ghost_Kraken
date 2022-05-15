# MISW-4103 Kraken and Cypress testing for Ghost 3.41.1

---

Author: Luis Miguel Guzman Perez

GitHub: [lmaero](https://github.com/lmaero)

Mail: <lm.guzmanp1@uniandes.edu.co>

AUT: Ghost 3.41.1

Used Technologies:

- [Ghost](https://github.com/TryGhost/Ghost)
- [Kraken](https://github.com/TheSoftwareDesignLab/Kraken)
- [Cypress](https://github.com/cypress-io/cypress)

---

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
      updated usage and installation instructions

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

6. This repository executes two different versions of Ghost: `3.41.1`
   and `4.44.0` using Docker containers. It is expected that you have docker-cli
   installed on your machine or that you're able to install it following the
   official [Docker installation instructions](https://docs.docker.com/get-docker/)

7. Please make sure that ports `3001` and `3002` of your machine are not
   being used, and no containers exist with those names. **If any of the
   mentioned ports are being used by any application, all tests will fail.**
   <br />
   <br />
   You can inspect all of your containers using:

   ```shell
   docker container ls -a
   ```

8. Once you have verified conditions of step 7. Please create and run the
   needed containers using:

   ```shell
   docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.41.1 ghost:3.41.1
   ```

   ```shell
   docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.44.0 ghost:4.44.0
   ```

9. Create http-server to serve the root folder. This script will start a
   server in `http://localhost:8080`, **please make sure that this port is
   available on your machine. If that's not the case, everything will fail.**
   ```shell
   npm run serve
   ```
10. Run tests and generate the report for Kraken. The first tab that is
    being opened in the browser corresponds to the initial Backstop report with
    the images that it will use for reference to do the comparison. The second
    opened tab is the actual report that you can inspect in detail to find
    differences.
   ```shell
   npm run start-kk
   ```

11. To run tests and generate the report for Cypress, please first clean the
    the working directory, running:
    ```shell
    npm run clean
    ```

    **Note: above command will remove the previously generated Kraken report,
    so please make sure you have finished the review**

    ```shell
    npm run start-cy
    ```
