require("cypress-xpath");

export class Actions {
  static counter = 10;
  static version = "";

  static navigateToPage(page) {
    cy.visit(page, { failOnStatusCode: false });
    this.takeScreenshot();
  }

  static clickContains(text) {
    cy.contains(text).click();
    this.takeScreenshot();
  }

  static getAndType(element, text) {
    cy.get(element).clear().type(text);
    this.takeScreenshot();
  }

  static getAndClear(element) {
    cy.get(element).clear();
    this.takeScreenshot();
  }

  static getAndClick(element) {
    cy.get(element).first().click();
    this.takeScreenshot();
  }

  static getXPathAndClick(element) {
    cy.xpath(element).first().click();
    this.takeScreenshot();
  }

  static getXPathAndType(element, text) {
    cy.xpath(element).clear().type(text, { force: true });
    this.takeScreenshot();
  }

  static takeScreenshot() {
    cy.wait(500);
    cy.screenshot(`cypress-${this.version}-${this.counter.toString()}`, {
      capture: "viewport",
      overwrite: true,
    });
    this.counter++;
  }
}
