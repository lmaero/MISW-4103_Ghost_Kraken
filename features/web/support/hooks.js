const { After, Before, AfterStep } = require("@cucumber/cucumber");
const { WebClient } = require("kraken-node");
const path = require("path");
const fs = require("fs");

let counter = 1;

AfterStep(async function (step) {
  const baseName = path.parse(step.pickle.uri).base;
  const ssName = `screenshots/kraken/${baseName}-${counter}-${step.testStepId}.png`;

  counter++;
  await this.driver.saveScreenshot(ssName);
});

Before(async function () {
  fs.mkdirSync("screenshots/kraken/", { recursive: true });

  this.deviceClient = new WebClient("chrome", {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
});

After(async function () {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});
