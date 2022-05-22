import { signIn } from "../../support/utilities";
import { Actions } from "../../support/Actions";
import { faker } from "@faker-js/faker";

const apriori = require("../../support/a-priori_datapool_2-page.json");

class Page {
  static pagesList = 'a[href="#/pages/"]';
  static pagesListElement = 'a[title="Edit this page"]';
  static pagesEditor = 'a[href="#/editor/page/"]';
  static pageTitle = 'textarea[placeholder="Page Title"]';
  static pageContent = 'div[data-placeholder="Begin writing your page..."]';
  static publishDropDown = "div.gh-publishmenu-trigger";
  static publishDropDownButton = "button.gh-publishmenu-button";
  static settingsMenuContainer = "div.settings-menu-pane";
  static settingsMenuButton = "button.post-settings";
  static notification = "div.gh-notification-content";
  static pageUrl = "input.post-setting-slug";
  static closeSettingsButton = "button.close";
  static settingsMenuDate = 'input[placeholder="YYYY-MM-DD"]';
  static settingsMenuTime = "div.gh-date-time-picker-time > input";
  static settingsMenuExcerpt = 'textarea[name="post-setting-custom-excerpt"]';
  static metaTitle = "input.post-setting-meta-title";
  static metaUrl = "input.post-setting-canonicalUrl";
  static metaBack = "button.back";

  static goToPagesList() {
    Actions.getAndClick(this.pagesList);
  }

  static goToEditor() {
    Actions.getAndClick(this.pagesList);
    Actions.getAndClick(this.pagesEditor);
  }

  static publishPage() {
    Actions.getAndClick(Page.pageContent);
    Actions.getAndClick(Page.publishDropDown);
    Actions.getAndClick(Page.publishDropDownButton);
  }

  static goToPublishedPageSettings() {
    Actions.getAndClick(this.pagesList);
    Actions.getAndClick(Page.pagesListElement);
    Actions.getAndClick(Page.settingsMenuButton);
  }
}

function generateFakeRandomDataPool() {
  const randomDataPool = [];

  for (let i = 0; i <= 5; i++) {
    randomDataPool.push({
      weird_string: faker.datatype.string(),
      long_string: faker.lorem.words(200),
      complete_url: faker.internet.url(),
      future_date: faker.date.future().toISOString().split("T")[0],
    });
  }

  return randomDataPool;
}

const getRandomNumber = (min, max) =>
  parseInt(Math.random() * (max - min) + min);

describe("Feature: Pages", () => {
  beforeEach(() => {
    signIn();
  });

  describe("When I use a previously generated pool of data", () => {
    it("1 - and use a short string as page title", function () {
      Page.goToEditor();

      Actions.getAndTypeNoWait(Page.pageTitle, "s");
      Page.publishPage();

      // Page should be published successfully with a short string
      cy.get(Page.notification).should("exist");
    });

    it("2 - and use a weird string as page title", function () {
      Page.goToEditor();

      Actions.getAndTypeNoWait(Page.pageTitle, apriori[7].weird_string);
      Page.publishPage();

      // Page should be published successfully with random characters
      cy.get(Page.notification).should("exist");
    });

    it("3 - and use a different language as page title", function () {
      Page.goToEditor();

      Actions.getAndTypeNoWait(Page.pageTitle, apriori[5].weird_string);
      Page.publishPage();

      // Page should be published successfully when using different languages
      cy.get(Page.notification).should("exist");
    });

    it("4 - and use a little script as page title", function () {
      Page.goToEditor();

      Actions.getAndTypeNoWait(Page.pageTitle, apriori[3].weird_string);
      Page.publishPage();

      // Page should be published successfully with a script as title
      cy.get(Page.notification).should("exist");
    });

    it("5 - and use a long string as page title", function () {
      Page.goToEditor();

      Actions.getAndTypeNoWait(Page.pageTitle, apriori[0].long_string);

      // Publish menu should not exist due to exceeded title length
      cy.get(Page.publishDropDown).should("not.exist");
      cy.get(Page.notification).should("not.exist");
    });

    it("6 - and use a long string as URL in settings menu", function () {
      Page.goToEditor();

      Actions.getAndType(Page.pageTitle, "A valid string");
      Actions.getAndClick(Page.settingsMenuButton);
      Actions.getAndTypeNoWait(Page.pageUrl, apriori[0].long_string);
      Actions.getAndClick(Page.closeSettingsButton);

      // Settings menu remains open due to malformed URL
      cy.get(Page.settingsMenuContainer).should("exist");
    });

    it("7 - and edit a page using a long string as title", function () {
      Page.goToPagesList();

      Actions.getAndClick(Page.pagesListElement);
      Actions.getAndTypeNoWait(Page.pageTitle, apriori[1].long_string);
      Page.publishPage();

      // It should not be possible to publish with a long string as title
      cy.contains(
        "Saving failed: Title cannot be longer than 255 characters."
      ).should("exist");
    });

    it("8 - and edit a page using a long string as URL", function () {
      Page.goToPublishedPageSettings();

      Actions.getAndTypeNoWait(Page.pageUrl, apriori[0].long_string);
      Actions.getAndClick(Page.closeSettingsButton);
      Page.publishPage();

      // It truncates the long string
      cy.get(Page.notification).should("exist");
    });

    it("9 - and edit a page using a weird string as URL", function () {
      Page.goToPublishedPageSettings();

      Actions.getAndTypeNoWait(Page.pageUrl, apriori[7].weird_string);
      Actions.getAndClick(Page.closeSettingsButton);
      Page.publishPage();

      // It allows weird strings as URL and parse it
      cy.get(Page.notification).should("exist");
    });

    it("10 - and edit a page using a complete URL as URL", function () {
      Page.goToPublishedPageSettings();

      Actions.getAndTypeNoWait(Page.pageUrl, apriori[1].complete_url);
      Actions.getAndClick(Page.closeSettingsButton);
      Page.publishPage();

      // It allows complete URLs and parse it
      cy.get(Page.notification).should("exist");
    });
  });

  describe("When I use a dynamic generated data pool", () => {
    const dynamicDataPool = generateFakeRandomDataPool();

    it("11 - and use a long string in the date field", function () {
      Page.goToPublishedPageSettings();

      Actions.getAndTypeNoWait(
        Page.settingsMenuDate,
        dynamicDataPool[getRandomNumber(0, dynamicDataPool.length - 1)]
          .long_string
      );

      Actions.getAndClick(Page.pageUrl);

      // It does not allow a malformed date
      cy.contains("Invalid date format, must be YYYY-MM-DD")
        .should("exist")
        .and("be.visible");
    });

    it("12 - and use a future date in the date field", function () {
      Page.goToPublishedPageSettings();

      Actions.getAndTypeNoWait(
        Page.settingsMenuDate,
        dynamicDataPool[getRandomNumber(0, dynamicDataPool.length - 1)]
          .future_date
      );

      Actions.getAndClick(Page.pageUrl);

      // It does not allow a future date
      cy.contains("Must be in the past").should("exist").and("be.visible");
    });

    it("13 - and use an URL in the date field", function () {
      Page.goToPublishedPageSettings();

      Actions.getAndTypeNoWait(
        Page.settingsMenuDate,
        dynamicDataPool[getRandomNumber(0, dynamicDataPool.length - 1)]
          .complete_url
      );

      Actions.getAndClick(Page.pageUrl);

      // It does not allow a malformed date
      cy.contains("Invalid date format, must be YYYY-MM-DD")
        .should("exist")
        .and("be.visible");
    });

    it("14 - and left empty the time field", function () {
      Page.goToPublishedPageSettings();

      cy.get(Page.settingsMenuTime)
        .type(
          dynamicDataPool[getRandomNumber(0, dynamicDataPool.length - 1)]
            .complete_url
        )
        .clear();

      Actions.getAndClick(Page.pageUrl);

      // The date should remain the same
      cy.contains('Must be in format: "15:00"')
        .should("exist")
        .and("be.visible");
    });

    it("15 - and type a weird string in the time field", function () {
      Page.goToPublishedPageSettings();

      cy.get(Page.settingsMenuTime).type(
        dynamicDataPool[getRandomNumber(0, dynamicDataPool.length - 1)]
          .weird_string
      );

      Actions.getAndClick(Page.pageUrl);

      // The date should remain the same
      cy.contains('Must be in format: "15:00"')
        .should("exist")
        .and("be.visible");
    });

    it("16 - and type a long string in the time field", function () {
      Page.goToPublishedPageSettings();

      cy.get(Page.settingsMenuTime).type(
        dynamicDataPool[getRandomNumber(0, dynamicDataPool.length - 1)]
          .long_string,
        { delay: 0 }
      );

      Actions.getAndClick(Page.pageUrl);

      // The date should remain the same
      cy.contains('Must be in format: "15:00"')
        .should("exist")
        .and("be.visible");
    });

    it("17 - and type a complete URL in the time field", function () {
      Page.goToPublishedPageSettings();

      Actions.getAndTypeNoWait(
        Page.settingsMenuTime,
        dynamicDataPool[getRandomNumber(0, dynamicDataPool.length - 1)]
          .complete_url
      );

      Actions.getAndClick(Page.pageUrl);

      // The date should remain the same
      cy.contains('Must be in format: "15:00"')
        .should("exist")
        .and("be.visible");
    });

    it("18 - and type a weird string in the excerpt field", function () {
      Page.goToPublishedPageSettings();

      Actions.getAndTypeNoWait(
        Page.settingsMenuExcerpt,
        dynamicDataPool[getRandomNumber(0, dynamicDataPool.length - 1)]
          .weird_string
      );

      Actions.getAndClick(Page.pageUrl);
      Actions.getAndClick(Page.closeSettingsButton);

      Page.publishPage();

      // It allows weird strings to be inserted into the excerpt field
      cy.get(Page.notification).should("exist");
    });

    it("19 - and type a long string in the excerpt field", function () {
      Page.goToPublishedPageSettings();

      Actions.getAndTypeNoWait(
        Page.settingsMenuExcerpt,
        dynamicDataPool[getRandomNumber(0, dynamicDataPool.length - 1)]
          .long_string
      );

      Actions.getAndClick(Page.pageUrl);
      Actions.getAndClick(Page.closeSettingsButton);

      Page.publishPage();

      // It does not allow long strings, 300 characters at the most
      cy.contains(
        "Update failed: Excerpt cannot be longer than 300" + " characters."
      )
        .should("exist")
        .and("be.visible");
      cy.get(Page.notification).should("not.exist");
    });

    it("20 - and type a complete URL in the excerpt field", function () {
      Page.goToPublishedPageSettings();

      Actions.getAndTypeNoWait(
        Page.settingsMenuExcerpt,
        dynamicDataPool[getRandomNumber(0, dynamicDataPool.length - 1)]
          .complete_url
      );

      Actions.getAndClick(Page.pageUrl);
      Actions.getAndClick(Page.closeSettingsButton);

      Page.publishPage();

      // It allows complete URLs to be inserted into the excerpt field
      cy.get(Page.notification).should("exist");
    });
  });

  describe("When I use random generated runtime values", function () {
    it("21 - and I type a short string as the meta title", function () {
      Page.goToPublishedPageSettings();

      Actions.containsAndClick("Meta data");
      Actions.getAndTypeNoWait(Page.metaTitle, faker.lorem.word(1));
      Actions.getAndClick(Page.metaBack);
      Actions.getAndClick(Page.closeSettingsButton);

      Page.publishPage();

      // It allows one character word to be inserted into the meta title
      cy.get(Page.notification).should("exist");
    });

    it("22 - and I type a long string as the meta title", function () {
      Page.goToPublishedPageSettings();

      Actions.containsAndClick("Meta data");
      Actions.getAndTypeNoWait(Page.metaTitle, faker.lorem.words(200));
      Actions.getAndClick(Page.metaBack);
      Actions.getAndClick(Page.closeSettingsButton);

      Page.publishPage();

      // It does not allow long strings, 300 characters at the most
      cy.contains(
        "Update failed: Meta Title cannot be longer than 300 characters."
      )
        .should("exist")
        .and("be.visible");
      cy.get(Page.notification).should("not.exist");
    });

    it("23 - and I type a complete URL string as the meta title", function () {
      Page.goToPublishedPageSettings();

      Actions.containsAndClick("Meta data");
      Actions.getAndTypeNoWait(Page.metaTitle, faker.internet.url());
      Actions.getAndClick(Page.metaBack);
      Actions.getAndClick(Page.closeSettingsButton);

      Page.publishPage();

      // It allows one character word to be inserted into the meta title
      cy.get(Page.notification).should("exist");
    });

    it("24 - and I type a exactly 70 characters as the meta title", function () {
      Page.goToPublishedPageSettings();

      Actions.containsAndClick("Meta data");
      Actions.getAndTypeNoWait(
        Page.metaTitle,
        faker.lorem.words(20).substring(0, 70)
      );
      Actions.getAndClick(Page.metaBack);
      Actions.getAndClick(Page.closeSettingsButton);

      Page.publishPage();

      // It allows one character word to be inserted into the meta title
      cy.get(Page.notification).should("exist");
    });

    it("25 - and I type 300 characters as the meta title", function () {
      Page.goToPublishedPageSettings();

      Actions.containsAndClick("Meta data");
      Actions.getAndTypeNoWait(
        Page.metaTitle,
        faker.lorem.words(50).substring(0, 300)
      );
      Actions.getAndClick(Page.metaBack);
      Actions.getAndClick(Page.closeSettingsButton);

      Page.publishPage();

      // It allows one character word to be inserted into the meta title
      cy.get(Page.notification).should("exist");
    });

    it("26 - and I type 301 characters as the meta title", function () {
      Page.goToPublishedPageSettings();

      Actions.containsAndClick("Meta data");
      Actions.getAndTypeNoWait(
        Page.metaTitle,
        faker.lorem.words(50).substring(0, 301)
      );
      Actions.getAndClick(Page.metaBack);
      Actions.getAndClick(Page.closeSettingsButton);

      Page.publishPage();

      // It does not allow long strings, 300 characters at the most
      cy.contains(
        "Update failed: Meta Title cannot be longer than 300 characters."
      )
        .should("exist")
        .and("be.visible");
      cy.get(Page.notification).should("not.exist");
    });

    it("27 - and I type 299 characters as the meta title", function () {
      Page.goToPublishedPageSettings();

      Actions.containsAndClick("Meta data");
      Actions.getAndTypeNoWait(
        Page.metaTitle,
        faker.lorem.words(50).substring(0, 299)
      );
      Actions.getAndClick(Page.metaBack);
      Actions.getAndClick(Page.closeSettingsButton);

      Page.publishPage();

      // It allows one character word to be inserted into the meta title
      cy.get(Page.notification).should("exist");
    });

    it("28 - and I type a single word as the meta URL", function () {
      Page.goToPublishedPageSettings();

      Actions.containsAndClick("Meta data");
      Actions.getAndTypeNoWait(Page.metaUrl, faker.lorem.word());
      Actions.getAndClick(Page.metaBack);
      Actions.getAndClick(Page.closeSettingsButton);

      Page.publishPage();

      // It does not allow non URL values
      cy.contains("Update failed: Please enter a valid URL")
        .should("exist")
        .and("be.visible");
      cy.get(Page.notification).should("not.exist");
    });

    it("29 - and I type a long string as the meta URL", function () {
      Page.goToPublishedPageSettings();

      Actions.containsAndClick("Meta data");
      Actions.getAndTypeNoWait(Page.metaUrl, faker.lorem.words(200));
      Actions.getAndClick(Page.metaBack);
      Actions.getAndClick(Page.closeSettingsButton);

      Page.publishPage();

      // It does not allow non URL values
      cy.contains("Update failed: Please enter a valid URL")
        .should("exist")
        .and("be.visible");
      cy.get(Page.notification).should("not.exist");
    });

    it("30 - and I type a valid URL as the meta URL", function () {
      Page.goToPublishedPageSettings();

      Actions.containsAndClick("Meta data");
      Actions.getAndTypeNoWait(Page.metaUrl, faker.internet.url());
      Actions.getAndClick(Page.metaBack);
      Actions.getAndClick(Page.closeSettingsButton);

      Page.publishPage();

      // It allows one character word to be inserted into the meta title
      cy.get(Page.notification).should("exist");
    });
  });

  afterEach(() => {
    // signOut();
  });
});
