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

// Camilo steps starts here
When("I click on nigth shift toggle button v{kraken-string}", async function (version) {
  let element = await this.driver.$(
    version === '4' ?
      "div.nightshift-toggle" :
      "span.input-toggle-component"
  );
  return await element.click();
});

When("I click on expand Title and Description section v{kraken-string}", async function (version) {
  let element = await this.driver.$(
    version === '4' ?
      "/html/body/div[2]/div/main/section/div[2]/section/div[1]/div[1]/button" :
      "/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[2]/button"
  );
  return await element.click();
});
When("I enter a new Blog Name {kraken-string} v{kraken-string}", async function (new_blog_name, version) {
  let element = await this.driver.$(
    version === '4' ? 
      "/html/body/div[2]/div/main/section/div[2]/section/div[1]/div[2]/div/div/div/div[1]/input":
      "/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[1]/div[3]/div/div/div[1]/input"
  );
  return await element.setValue(new_blog_name);
});
When("I enter a new Blog Description {kraken-string} v{kraken-string}", async function (new_blog_description, version) {
  let element = await this.driver.$(
    version === '4' ?
      "/html/body/div[2]/div/main/section/div[2]/section/div[1]/div[2]/div/div/div/div[2]/input":
      "/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[1]/div[3]/div/div/div[2]/input"
  );
  return await element.setValue(new_blog_description);
});
When("I click on Save General Settings v{kraken-string}", async function (version) {
  let element = await this.driver.$(
    version === '4' ?
      "/html/body/div[2]/div/main/section/div[1]/header/section/button" :
      "/html/body/div[2]/div/main/section/div/header/section/button"
  );
  return await element.click();
});
When("I enter a new submenu label {kraken-string} v{kraken-string}", async function (new_submenu_label, version) {
  let element = await this.driver.$(
    version === '4' ?
      "/html/body/div[2]/div/main/section/section/div[1]/div/form/div[2]/div/span[1]/input" :
      "/html/body/div[2]/div/main/section/section/div[2]/form/div[2]/div/span[1]/input"
  );
  return await element.setValue(new_submenu_label);
});
When("I enter a new submenu url {kraken-string} v{kraken-string}", async function (new_submenu_url, version) {
  let element = await this.driver.$(
    version === '4' ?
      "/html/body/div[2]/div/main/section/section/div[1]/div/form/div[2]/div/span[2]/input" :
      "/html/body/div[2]/div/main/section/section/div[2]/form/div[2]/div/span[2]/input"
  );
  return await element.setValue(new_submenu_url);
});
When("I click on Save Design Settings v{kraken-string}", async function (version) {
  let element = await this.driver.$(
    version === '4' ?
      "/html/body/div[2]/div/main/section/div/header/section/button" :
      "/html/body/div[2]/div/main/section/header/section/button"
  );
  return await element.click();
});
When("I click on expand Social Network section v{kraken-string}", async function (version) {
  let element = await this.driver.$(
    version === '4' ? 
      "/html/body/div[2]/div/main/section/div[3]/section/div[4]/div[1]/button" :
      "/html/body/div[2]/div/main/section/div/section/div[8]/div/div[2]/button"
  );
  return await element.click();
});
When("I enter a new Facebook page url {kraken-string} v{kraken-string}", async function (new_fb_url, version) {
  let element = await this.driver.$(
    version === '4' ? 
      "/html/body/div[2]/div/main/section/div[3]/section/div[4]/div[2]/div/div/div/div[1]/input" :
      "/html/body/div[2]/div/main/section/div/section/div[8]/div/div[1]/div[3]/div/div/div[1]/input"
  );
  return await element.setValue(new_fb_url);
});
When("I enter a new Twitter page url {kraken-string} v{kraken-string}", async function (new_tw_url, version) {
  let element = await this.driver.$(
    version === '4' ? 
      "/html/body/div[2]/div/main/section/div[3]/section/div[4]/div[2]/div/div/div/div[2]/input" :
      "/html/body/div[2]/div/main/section/div/section/div[8]/div/div[1]/div[3]/div/div/div[2]/input"
  );
  return await element.setValue(new_tw_url);
});
When("I click disable integration checkbox v{kraken-string}", async function (version) {
  let element = await this.driver.$(
    version === '4' ? 
      "/html/body/div[2]/div/main/section/section/div/section/div/div/div[1]/div[2]/div/label/span" :
      "/html/body/div[2]/div/main/section/section/div[2]/div[1]/div[2]/div/label/span"
      );
  return await element.click();
});
When("I save integration settings v{kraken-string}", async function (version) {
  let element = await this.driver.$(
    version === '4' ? 
      "/html/body/div[2]/div/main/section/div/header/section/button" :
      "/html/body/div[2]/div/main/section/header/section/button"
  );
  return await element.click();
});

//Diego steps start here
When("I Navigate to page {kraken-string}", async function (page) {
  return await this.driver.url(page);
});

When("I click create account button", async function () {
  let element = await this.driver.$(".gh-btn-signup");
  return await element.click();
});

When("I click Explore Ghost admin", async function () {
  let element = await this.driver.$('a[href="#/dashboard/"]');
  return await element.click();
});

When("I click on more", async function () {
  let element = await this.driver.$(".gh-mobile-nav-bar-more");
  return await element.click();
});

When("I click on Tags", async function () {
  let element = await this.driver.$('a[href="#/tags/"]');
  return await element.click();
});

When("I click New Tags", async function () {
  let element = await this.driver.$('a[href="#/tags/new/"]');
  return await element.click();
});

When("I click on the tag name area", async function () {
  let element = await this.driver.$("#tag-name");
  return await element.click();
});

When("I enter a tag name {kraken-string}", async function (tag_name) {
  let element = await this.driver.$("#tag-name");
  return await element.setValue(tag_name);
});

When("I click on save tag g4", async function () {
  let element = await this.driver.$(".gh-btn-primary");
  return await element.click();
});

When("I click on save tag g3", async function () {
  let element = await this.driver.$(".gh-btn-blue");
  return await element.click();
});

When("I click on the first tag", async function () {
  let element = await this.driver.$('a[href="#/tags/tag-prueba/"]');
  return await element.click();
});

When("I click on the tag description area", async function () {
  let element = await this.driver.$("#tag-description");
  return await element.click();
});

When(
  "I enter a tag description {kraken-string}",
  async function (tag_description) {
    let element = await this.driver.$("#tag-description");
    return await element.setValue(tag_description);
  }
);

When("I click on delete tag", async function () {
  let element = await this.driver.$(".gh-btn-red");
  return await element.click();
});

When("I click on delete tag definitively", async function () {
  let element = await this.driver.$(
    "button.gh-btn.gh-btn-red.gh-btn-icon.ember-view"
  );
  return await element.click();
});

When("I enter login email {kraken-string}", async function (email) {
  let element = await this.driver.$(".email");
  return await element.setValue(email);
});

When("I enter login password {kraken-string}", async function (password) {
  let element = await this.driver.$(".password");
  return await element.setValue(password);
});

When("I click sign in", async function () {
  let element = await this.driver.$(".login");
  return await element.click();
});

When("I click on settings", async function () {
  let element = await this.driver.$('a[href="#/settings/"]');
  return await element.click();
});

When("I click on Staff g3", async function () {
  let element = await this.driver.$('a[href="#/staff/"]');
  return await element.click();
});

When("I click on Staff g4", async function () {
  let element = await this.driver.$('a[href="#/settings/staff/"]');
  return await element.click();
});

When("I click on the Invite People button g3", async function () {
  let element = await this.driver.$(".gh-btn-green");
  return await element.click();
});

When("I click on the Invite People button g4", async function () {
  let element = await this.driver.$(".gh-btn-primary");
  return await element.click();
});

When("I enter staff email {kraken-string}", async function (staff_member) {
  let element = await this.driver.$("#new-user-email");
  return await element.setValue(staff_member);
});

When("I click on send invitation now g3", async function () {
  let element = await this.driver.$(
    "button.gh-btn.gh-btn-green.gh-btn-icon.ember-view"
  );
  return await element.click();
});

When("I click on send invitation now g4", async function () {
  let element = await this.driver.$(
    "button.gh-btn.gh-btn-black.gh-btn-icon.ember-view"
  );
  return await element.click();
});

When("I click on revoke button", async function () {
  let element = await this.driver.$('a[href="#revoke"]');
  return await element.click();
});