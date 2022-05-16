# MISW-4103 Kraken and Cypress testing for Ghost 3.41.1

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
   right version (`14.19.2`) that this repository needs

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
   server in:`http://localhost:8080`
   <br />
   <br />
   **Please make sure that this port is
   available on your machine. If that's not the case, everything will fail.**
     ```shell
     npm run serve
     ```
   **Note:** in the case the above address is not available on your machine, you
   have to serve the root folder and configure the address of the server in
   the `config-report.json` file
   <br />
   <br />
11. Run tests and generate the report for Kraken. The first tab that is
    being opened in the browser corresponds to the initial Backstop report with
    the images that it will use for reference to do the comparison. The second
    opened tab is the actual report that you can inspect in detail to find
    differences.
    ```shell
    npm run start-kk
    ```
    **Note: after the generation of the final report, process will exit with
    code 1, this is expected because Backstop throws an error where findings
    exist `Error: Mismatch errors found`**
    <br />
    <br />
12. To run tests and generate the report for Cypress, please first clean the
    working directory, running:
    ```shell
    npm run clean
    ```

    **Note: above command will remove the previously generated Kraken report,
    so please make sure you have finished the review**

    ```shell
    npm run start-cy
    ```

13. Optional: by default, backstop report is generated with a `threshold` of
    2%, if you want to change the value, go to the `config-report.json` file,
    change the value and run `npm run clean` before you start the new test.
    <br />
    <br />
    **Note: modifications to package.json file can cause unexpected behavior,
    so please make sure you know what you're doing**
