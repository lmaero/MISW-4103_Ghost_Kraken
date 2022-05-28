import { Actions } from "../../support/Actions";
import fillSignInForm from "../../support/utilities";

const props = require("../../../properties.json");

describe("Feature: Login Ghost 4.44.0", () => {
  Actions.version = "g4";
  Actions.week = 6;

  beforeEach(() => {
    Actions.navigateToPage(props.SETUP_PAGE_ONE_4);
  });

  describe("When the user introduces incorrect data", function () {
    it("should deny submission with a wrong e-mail", () => {
      fillSignInForm("email", 4);
    });

    it("should deny submission with a wrong password", () => {
      fillSignInForm("password", 4);
    });

    it("should deny submission with an empty blog title", () => {
      fillSignInForm("blogTitle", 4);
    });

    it("should deny submission with an empty name", () => {
      fillSignInForm("name", 4);
    });

    it("should deny submission without filling the form", () => {
      fillSignInForm("empty", 4);
    });
  });
});

describe("Feature: Page Ghost 4.44.0", () => {
  Actions.version = "g4";

  it("should create a page successfully", function () {
    // Given I navigate to page "<SETUP_PAGE_ONE_4>"
    Actions.navigateToPage(props.SETUP_PAGE_ONE_4);

    // Then I type "<BLOG_TITLE>" into "#blog-title"
    Actions.getAndType("#blog-title", props.BLOG_TITLE);

    // And I type "<BLOG_NAME>" into "#name"
    Actions.getAndType("#name", props.BLOG_NAME);

    // And I type "<BLOG_EMAIL>" into "#email"
    Actions.getAndType("#email", props.BLOG_EMAIL);

    // And I type "<BLOG_PASS>" into "#password"
    Actions.getAndType("#password", props.BLOG_PASS);

    // When I click in "[type='submit']"
    Actions.getAndClick('[type="submit"]');

    // When I click in "h6=Explore Ghost admin"
    Actions.clickContains("Explore Ghost admin");

    // And I click in "[href='#/pages/']"
    Actions.getAndClick('a[href="#/pages/"]');

    // And I click in "a[href='#/editor/page/']"
    Actions.clickContains("New page");

    // And I type "<PAGE_TITLE>" into "[placeholder='Page Title']"
    Actions.getAndType('[placeholder="Page title"]', props.PAGE_TITLE);

    // And I type "<PAGE_CONTENT>" into "[data-placeholder='Begin writing your page...']"
    Actions.getAndType(
      'div[data-placeholder="Begin writing your page..."]',
      props.PAGE_CONTENT
    );

    // And I click in "div.gh-publishmenu-trigger"
    Actions.getAndClick("div.gh-publishmenu-trigger");

    // And I click in "button.gh-publishmenu-button"
    Actions.getAndClick("button.gh-publishmenu-button");

    // Then I navigate to page "<NEW_PAGE_4>"
    Actions.navigateToPage(props.NEW_PAGE_4);
  });

  describe("when a page exists", () => {
    beforeEach(() => {
      // Given I navigate to page "<SIGN_IN_PAGE_4>"
      Actions.navigateToPage(props.SIGN_IN_PAGE_4);

      // And I type "<BLOG_EMAIL>" into "[name='identification']"
      Actions.getAndType('input[name="identification"]', props.BLOG_EMAIL);

      // And I type "<BLOG_PASS>" into "[name='password']"
      Actions.getAndType('input[name="password"]', props.BLOG_PASS);

      // When I click in "[type='submit']"
      Actions.getAndClick('button[type="submit"]');

      // And I click in "[href='#/pages/']"
      Actions.getAndClick('a[href="#/pages/"]');

      // When I click in "[title='Edit this page']"
      Actions.getAndClick(".gh-posts-list-item");
    });

    it("should be possible to update a previously created page", function () {
      // And I type "<PAGE_NEW_TITLE>" into "[placeholder='Page Title']"
      Actions.getAndType('[placeholder="Page title"]', props.PAGE_NEW_TITLE);

      // And I click in "div.gh-publishmenu-trigger"
      Actions.getAndClick("div.gh-publishmenu-trigger");

      // And I click in "button.gh-publishmenu-button"
      Actions.getAndClick("button.gh-publishmenu-button");

      // Then I navigate to page "<NEW_PAGE_4>"
      Actions.navigateToPage(props.NEW_PAGE_4);
    });

    it("should be possible to change the URL a previously created page", function () {
      // And I type "<NEW_URL_4>" into "[placeholder='Page Title']"
      Actions.getAndType('[placeholder="Page title"]', props.NEW_URL_4);

      // And I click in "div.gh-publishmenu-trigger"
      Actions.getAndClick("div.gh-publishmenu-trigger");

      // And I click in "button.gh-publishmenu-button"
      Actions.getAndClick("button.gh-publishmenu-button");

      // And I click in "[title='Settings']"
      Actions.getAndClick('[title="Settings"]');

      // And I type "<NEW_ENDPOINT>" into "[name='post-setting-slug']"
      Actions.getAndType('[name="post-setting-slug"]', props.NEW_ENDPOINT);

      // And I click in "button.close"
      Actions.getAndClick("span.settings-menu-open");

      // Then I navigate to page "<NEW_URL_4>"
      Actions.navigateToPage(props.NEW_URL_4);
    });
  });

  describe("as a non-logged in user", () => {
    it(
      "should be possible to go to the published page as non-registered" +
        " user",
      function () {
        // Given I navigate to page "<NEW_URL_4>"
        Actions.navigateToPage(props.NEW_URL_4);
      }
    );
  });

  describe("if I want to delete a page as an admin", () => {
    it("should be possible to delete a previously created page", function () {
      // Given I navigate to page "<SIGN_IN_PAGE_4>"
      Actions.navigateToPage(props.SIGN_IN_PAGE_4);

      // And I type "<BLOG_EMAIL>" into "[name='identification']"
      Actions.getAndType('input[name="identification"]', props.BLOG_EMAIL);

      // And I type "<BLOG_PASS>" into "[name='password']"
      Actions.getAndType('input[name="password"]', props.BLOG_PASS);

      // When I click in "[type='submit']"
      Actions.getAndClick('button[type="submit"]');

      // And I click in "[href='#/pages/']"
      Actions.getAndClick('a[href="#/pages/"]');

      // When I click in "[title='Edit this page']"
      Actions.getAndClick(".gh-posts-list-item");

      // And I click in "[title='Settings']"
      Actions.getAndClick('[title="Settings"]');

      // And I click in "button.settings-menu-delete-button"
      Actions.getAndClick("button.settings-menu-delete-button");

      // And I click in "button.gh-btn-red"
      Actions.getAndClick("button.gh-btn-red");

      // Then I navigate to page "<NEW_URL_4>"
      Actions.navigateToPage(props.NEW_URL_4);
    });
  });
});

describe("Feature: Settings Ghost 4.44.0", () => {
  it("should be switch to night shift mode", () => {
    // Given I navigate to page "<SIGN_IN_PAGE_3>"
    Actions.navigateToPage(props.SIGN_IN_PAGE_4);

    // And I type "<BLOG_EMAIL>" into "[name='identification']"
    Actions.getAndType('input[name="identification"]', props.BLOG_EMAIL);

    // And I type "<BLOG_PASS>" into "[name='password']"
    Actions.getAndType('input[name="password"]', props.BLOG_PASS);

    // When I click in "[type='submit']"
    Actions.getAndClick('button[type="submit"]');

    // And I click in "div.nightshift-toggle"
    Actions.getAndClick("div.nightshift-toggle");

    // And I click in "div.nightshift-toggle"
    Actions.getAndClick("div.nightshift-toggle");
  });

  it("should be change the blog name and description", () => {
    // Given I navigate to page "<SIGN_IN_PAGE_3>"
    Actions.navigateToPage(props.SIGN_IN_PAGE_4);

    // And I type "<BLOG_EMAIL>" into "[name='identification']"
    Actions.getAndType('input[name="identification"]', props.BLOG_EMAIL);

    // And I type "<BLOG_PASS>" into "[name='password']"
    Actions.getAndType('input[name="password"]', props.BLOG_PASS);

    // When I click in "[type='submit']"
    Actions.getAndClick('button[type="submit"]');

    // And I navigate to page http://localhost:3002/ghost/#/settings/general
    Actions.navigateToPage("http://localhost:3002/ghost/#/settings/general");

    // And I click in "Expand"
    Actions.getXPathAndClick(
      "//html/body/div[2]/div/main/section/div[2]/section/div[1]/div[1]/button"
    );

    // And I type "<NEW_BLOG_NAME>" into "Blog name"
    Actions.getXPathAndType(
      "//html/body/div[2]/div/main/section/div[2]/section/div[1]/div[2]/div/div/div/div[1]/input",
      props.NEW_BLOG_NAME
    );

    // And I type "<NEW_BLOG_DESCRIPTION>" into "Blog description"
    Actions.getXPathAndType(
      "//html/body/div[2]/div/main/section/div[2]/section/div[1]/div[2]/div/div/div/div[2]/input",
      props.NEW_BLOG_DESCRIPTION
    );

    // And I click in "Save settings"
    Actions.getXPathAndClick(
      "//html/body/div[2]/div/main/section/div[1]/header/section/button"
    );
  });

  it("should be add new submenu item in navbar", () => {
    // Given I navigate to page "<SIGN_IN_PAGE_3>"
    Actions.navigateToPage(props.SIGN_IN_PAGE_4);

    // And I type "<BLOG_EMAIL>" into "[name='identification']"
    Actions.getAndType('input[name="identification"]', props.BLOG_EMAIL);

    // And I type "<BLOG_PASS>" into "[name='password']"
    Actions.getAndType('input[name="password"]', props.BLOG_PASS);

    // When I click in "[type='submit']"
    Actions.getAndClick('button[type="submit"]');

    // And I navigate to page http://localhost:3002/ghost/#/settings/navigation
    Actions.navigateToPage("http://localhost:3002/ghost/#/settings/navigation");

    // And I type "<SUBMENU_LABEL>" into "Submenu label"
    Actions.getXPathAndType(
      "//html/body/div[2]/div/main/section/section/div[1]/div/form/div[2]/div/span[1]/input",
      props.SUBMENU_LABEL
    );

    // And I type "<ADMIN_PAGE_3>" into "Submenu URL"
    Actions.getXPathAndType(
      "//html/body/div[2]/div/main/section/section/div[1]/div/form/div[2]/div/span[2]/input",
      props.ADMIN_PAGE_3
    );

    // And I click in "Add new navbar item"
    Actions.getAndClick("button.gh-blognav-add");

    // And I click in "Save design settings"
    Actions.getXPathAndClick(
      "//html/body/div[2]/div/main/section/div/header/section/button"
    );
  });

  it("should be change the social networks url's", () => {
    // Given I navigate to page "<SIGN_IN_PAGE_3>"
    Actions.navigateToPage(props.SIGN_IN_PAGE_4);

    // And I type "<BLOG_EMAIL>" into "[name='identification']"
    Actions.getAndType('input[name="identification"]', props.BLOG_EMAIL);

    // And I type "<BLOG_PASS>" into "[name='password']"
    Actions.getAndType('input[name="password"]', props.BLOG_PASS);

    // When I click in "[type='submit']"
    Actions.getAndClick('button[type="submit"]');

    // And I navigate to page http://localhost:3002/ghost/#/settings/general
    Actions.navigateToPage("http://localhost:3002/ghost/#/settings/general");

    // And I click in "Expand"
    Actions.getXPathAndClick(
      "//html/body/div[2]/div/main/section/div[3]/section/div[4]/div[1]/button"
    );

    // And I type "<FB_URL>" into "Facebook URL"
    Actions.getXPathAndType(
      "//html/body/div[2]/div/main/section/div[3]/section/div[4]/div[2]/div/div/div/div[1]/input",
      props.FB_URL
    );

    // And I type "<TW_URL>" into "Twitter URL"
    Actions.getXPathAndType(
      "//html/body/div[2]/div/main/section/div[3]/section/div[4]/div[2]/div/div/div/div[2]/input",
      props.TW_URL
    );

    // And I click in "Save settings"
    Actions.getXPathAndClick(
      "//html/body/div[2]/div/main/section/div[1]/header/section/button"
    );

    // Given I navigate to page "<DASHBOARD_URL_4>"
    Actions.navigateToPage(props.DASHBOARD_URL_4);

    // And I navigate to page http://localhost:3002/ghost/#/settings/general
    Actions.navigateToPage("http://localhost:3002/ghost/#/settings/general");

    // And I type "<FB_URL>" into "Facebook URL"
    Actions.getXPathAndType(
      "//html/body/div[2]/div/main/section/div[3]/section/div[4]/div[2]/div/div/div/div[1]/input",
      props.OLD_FB_URL
    );

    // And I type "<TW_URL>" into "Twitter URL"
    Actions.getXPathAndType(
      "//html/body/div[2]/div/main/section/div[3]/section/div[4]/div[2]/div/div/div/div[2]/input",
      props.OLD_TW_URL
    );

    // And I click in "Save settings"
    Actions.getXPathAndClick(
      "//html/body/div[2]/div/main/section/div[1]/header/section/button"
    );
  });

  it("should be disable AMP integration", () => {
    // Given I navigate to page "<SIGN_IN_PAGE_3>"
    Actions.navigateToPage(props.SIGN_IN_PAGE_4);

    // And I type "<BLOG_EMAIL>" into "[name='identification']"
    Actions.getAndType('input[name="identification"]', props.BLOG_EMAIL);

    // And I type "<BLOG_PASS>" into "[name='password']"
    Actions.getAndType('input[name="password"]', props.BLOG_PASS);

    // When I click in "[type='submit']"
    Actions.getAndClick('button[type="submit"]');

    // And I navigate to page
    // http://localhost:3002/ghost/#/settings/integrations
    Actions.navigateToPage(
      "http://localhost:3002/ghost/#/settings/integrations"
    );

    // And I click in "[href='#/settings/integrations/amp']"
    Actions.getAndClick('[href="#/settings/integrations/amp/"]');

    // And I click in "Disable" checkbox
    Actions.getXPathAndClick(
      "//html/body/div[2]/div/main/section/section/div/section/div/div/div[1]/div[2]/div/label/span"
    );

    // And I click in "Save settings"
    Actions.getXPathAndClick(
      "//html/body/div[2]/div/main/section/div/header/section/button"
    );
  });
});
