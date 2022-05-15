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

// Alonso steps starts here
When('I first Navigate to page {kraken-string}', async function (page) {
  return await this.driver.url(page);
});

When('I enter the blog name {kraken-string}', async function (blogName) {
  let element = await this.driver.$('#blog-title')
  return await element.setValue(blogName);
});

When('I enter the full name {kraken-string}', async function (name) {
  let element = await this.driver.$('#name')
  return await element.setValue(name);
});

When('I enter the email {kraken-string}', async function (email) {
  let element = await this.driver.$('#email')
  return await element.setValue(email);
});

When('I enter the password created {kraken-string}', async function (password) {
  let element = await this.driver.$('#password')
  return await element.setValue(password);
});

When('I click staff invite users', async function () {
  let element = await this.driver.$('#ember19')
  return await element.click();
});

When('I click the textarea to invite a new user', async function () {
  let element = await this.driver.$('#ember33')
  return await element.click();
});

When('I click invite user', async function () {
  let element = await this.driver.$('#ember34')
  return await element.click();
});

When('I click the textarea to invite a new user', async function () {
  let element = await this.driver.$('#ember33')
  return await element.click();
});

When('I click invite user', async function () {
  let element = await this.driver.$('#ember34')
  return await element.click();
});

When('I enter the password to sign in {kraken-string}', async function (password) {
  let element = await this.driver.$('#ember10')
  return await element.setValue(password);
});

When('I click sign in button in login page', async function () {
  let element = await this.driver.$('#ember12')
  return await element.click();
});

When('I click in the post area', async function () {
  let element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/div[1]/article/div[1]/div')
  return await element.click();
});

When('I click publish', async function () {
  let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/div/div[1]')
  return await element.click();
});

When('I click create account', async function () {
  let element = await this.driver.$('#ember9')
  return await element.click();
});