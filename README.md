# MISW-4103 Kraken and Cypress testing for Ghost 3.41.1

---

## General Instructions - Week 8

1. Open a terminal window and clone this repository

    - HTTPS option
    ```shell
    git clone https://github.com/lmguzmanp/MISW-4103_Ghost_Kraken.git
    ```

    - SSH option (Please verify that your GitHub account is properly configured
      with an SSH)

    ```shell
    git clone git@github.com:lmguzmanp/MISW-4103_Ghost_Kraken.git
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
   nvm install 14.19.2
   ```

   ```shell
   nvm use 14.19.2
   ```

5. Install dependencies

   ```shell
   npm i
   ```

6. The following script will guide you through the process, please follow all
   the steps and verify all its pre-requisites.

   ```shell
   npm start
   ```
