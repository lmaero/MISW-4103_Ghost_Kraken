const { Given, When, Then } = require("@cucumber/cucumber");

Given('I navigate to page "{kraken-string}"', function (page) {
  return this.driver.url(page);
});

Then("I wait for {kraken-string} seconds", function (string) {
  return this.driver.setTimeout(string);
});

When("I click in {kraken-string}", async function (string) {
  const element = await this.driver.$(`${string}`);
  return element.click();
});

When(
  "I type {kraken-string} into {kraken-string}",
  async function (stringToType, field) {
    const input = await this.driver.$(field);
    await input.setValue(stringToType);
  }
);
