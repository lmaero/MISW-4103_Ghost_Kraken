const props = require("../../properties.json");
import { Actions } from "../support/Actions";

describe("Feature: Page Ghost 3.41.1", () => {
  it("should create a page successfully", function () {
    // Given I navigate to page "<SETUP_PAGE_ONE_3>"
    Actions.navigateToPage(props.SETUP_PAGE_TWO_3);

    // Then I type "<BLOG_TITLE>" into "#blog-title"
    Actions.getAndType("#blog-title", props.BLOG_TITLE);

    // And I type "<BLOG_NAME>" into "#name"
    Actions.getAndType("#name", props.BLOG_NAME);

    // And I type "<BLOG_EMAIL>" into "#email"
    Actions.getAndType("#email", props.BLOG_EMAIL);

    // And I type "<BLOG_PASS>" into "#password"
    Actions.getAndType("#password", props.BLOG_PASS);

    // When I click in "[type='submit']"
    Actions.clickContains("Last step: Invite staff users ");

    // Then I click in "button.gh-flow-skip"
    Actions.clickContains("I'll do this later, take me to my site!");

    // And I click in "[href='#/pages/']"
    Actions.getAndClick('a[href="#/pages/"]');

    // And I click in "a[href='#/editor/page/']"
    Actions.clickContains("New page");

    // And I type "<PAGE_TITLE>" into "[placeholder='Page Title']"
    Actions.getAndType('[placeholder="Page Title"]', props.PAGE_TITLE);

    // And I type "<PAGE_CONTENT>" into "[data-placeholder='Begin writing your page...']"
    Actions.getAndType(
      'div[data-placeholder="Begin writing your page..."]',
      props.PAGE_CONTENT
    );

    // And I click in "div.gh-publishmenu-trigger"
    Actions.getAndClick("div.gh-publishmenu-trigger");

    // And I click in "button.gh-publishmenu-button"
    Actions.getAndClick("button.gh-publishmenu-button");

    // Then I navigate to page "<NEW_PAGE_3>"
    Actions.navigateToPage(props.NEW_PAGE_3);
  });

  describe("when a page exists", () => {
    beforeEach(() => {
      // Given I navigate to page "<SIGN_IN_PAGE_3>"
      Actions.navigateToPage(props.SIGN_IN_PAGE_3);

      // And I type "<BLOG_EMAIL>" into "[name='identification']"
      Actions.getAndType('input[name="identification"]', props.BLOG_EMAIL);

      // And I type "<BLOG_PASS>" into "[name='password']"
      Actions.getAndType('input[name="password"]', props.BLOG_PASS);

      // When I click in "[type='submit']"
      Actions.getAndClick('button[type="submit"]');

      // And I click in "[href='#/pages/']"
      Actions.getAndClick('a[href="#/pages/"]');

      // When I click in "[title='Edit this page']"
      Actions.getAndClick('[title="Edit this page"]');
    });

    it("should be possible to update a previously created page", function () {
      // And I type "<PAGE_NEW_TITLE>" into "[placeholder='Page Title']"
      Actions.getAndType('[placeholder="Page Title"]', props.PAGE_NEW_TITLE);

      // And I click in "div.gh-publishmenu-trigger"
      Actions.getAndClick("div.gh-publishmenu-trigger");

      // And I click in "button.gh-publishmenu-button"
      Actions.getAndClick("button.gh-publishmenu-button");

      // Then I navigate to page "<NEW_PAGE_3>"
      Actions.navigateToPage(props.NEW_PAGE_3);
    });

    it("should be possible to change the URL a previously created page", function () {
      // And I type "<NEW_URL_3>" into "[placeholder='Page Title']"
      Actions.getAndType('[placeholder="Page Title"]', props.NEW_URL_3);

      // And I click in "div.gh-publishmenu-trigger"
      Actions.getAndClick("div.gh-publishmenu-trigger");

      // And I click in "button.gh-publishmenu-button"
      Actions.getAndClick("button.gh-publishmenu-button");

      // And I click in "[title='Settings']"
      Actions.getAndClick('[title="Settings"]');

      // And I type "<NEW_ENDPOINT>" into "[name='post-setting-slug']"
      Actions.getAndType('[name="post-setting-slug"]', props.NEW_ENDPOINT);

      // And I click in "button.close"
      Actions.getAndClick("button.close");

      // Then I navigate to page "<NEW_URL_3>"
      Actions.navigateToPage(props.NEW_URL_3);
    });
  });

  describe("as a non-logged in user", () => {
    it("should be possible to go to the published page as non-registered user", function () {
      // Given I navigate to page "<NEW_URL_3>"
      Actions.navigateToPage(props.NEW_URL_3);
    });
  });

  describe("if I want to delete a page as an admin", () => {
    it("should be possible to delete a previously created page", function () {
      // Given I navigate to page "<SIGN_IN_PAGE_3>"
      Actions.navigateToPage(props.SIGN_IN_PAGE_3);

      // And I type "<BLOG_EMAIL>" into "[name='identification']"
      Actions.getAndType('input[name="identification"]', props.BLOG_EMAIL);

      // And I type "<BLOG_PASS>" into "[name='password']"
      Actions.getAndType('input[name="password"]', props.BLOG_PASS);

      // When I click in "[type='submit']"
      Actions.getAndClick('button[type="submit"]');

      // And I click in "[href='#/pages/']"
      Actions.getAndClick('a[href="#/pages/"]');

      // When I click in "[title='Edit this page']"
      Actions.getAndClick('[title="Edit this page"]');

      // And I click in "[title='Settings']"
      Actions.getAndClick('[title="Settings"]');

      // And I click in "button.settings-menu-delete-button"
      Actions.getAndClick("button.settings-menu-delete-button");

      // And I click in "button.gh-btn-red"
      Actions.getAndClick("button.gh-btn-red");

      // Then I navigate to page "<NEW_URL_3>"
      Actions.navigateToPage(props.NEW_URL_3);
    });
  });
});
