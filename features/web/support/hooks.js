const { After, Before, AfterStep } = require("@cucumber/cucumber");
const { WebClient } = require("kraken-node");
const path = require("path");
const fs = require("fs");
const { sleep } = require("../../../genJSON");

let counter = 10;

AfterStep(async function (step) {
  await sleep(1000);
  const baseName = path.parse(step.pickle.uri).base;
  let ssName;

  if (baseName.match(/([abcde]\d[1-5]_[a-zA-Z-]*3)+/g)) {
    ssName = `screenshots/kraken/ghost-3.41.1/${baseName}-${counter}.png`;
    counter++;
    await this.driver.saveScreenshot(ssName);
  } else {
    ssName = `screenshots/kraken/ghost-4.44.0/${baseName}-${counter}.png`;
    counter++;
    await this.driver.saveScreenshot(ssName);
  }
});

Before(async function () {
  fs.mkdirSync("screenshots/kraken/ghost-3.41.1", { recursive: true });
  fs.mkdirSync("screenshots/kraken/ghost-4.44.0", { recursive: true });

  await sleep(3000);

  this.deviceClient = new WebClient("chrome", {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
  this.driver.setWindowSize(1920, 1080);
  this.driver.setWindowRect(0, 0, 1920, 1080);
});

After(async function () {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});
