const props = require("../../properties.json");
import { Actions } from "../support/Actions";

const WAIT_TIME = 2000;

describe("Feature: Page Ghost 4.44.0", () => {
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
    cy.wait(WAIT_TIME);

    // And I click in "[href='#/pages/']"
    Actions.getAndClick('a[href="#/pages/"]');
    cy.wait(WAIT_TIME);

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
      cy.wait(WAIT_TIME);

      // And I click in "[href='#/pages/']"
      Actions.getAndClick('a[href="#/pages/"]');
      cy.wait(WAIT_TIME);

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
      cy.wait(WAIT_TIME);

      // And I click in "[href='#/pages/']"
      Actions.getAndClick('a[href="#/pages/"]');
      cy.wait(WAIT_TIME);

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
