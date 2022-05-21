require("cypress-xpath");

export class Actions {
  static counter = 10;
  static version = "";

  static navigateToPage(page) {
    cy.visit(page, { failOnStatusCode: false });
  }

  static clickContains(text) {
    cy.contains(text).click();
  }

  static getAndType(element, text) {
    cy.get(element).clear().type(text);
  }

  static getAndClear(element) {
    cy.get(element).clear();
  }

  static getAndClick(element) {
    cy.get(element).first().click();
  }

  static getXPathAndClick(element) {
    cy.xpath(element).first().click();
  }

  static getXPathAndType(element, text) {
    cy.xpath(element).clear().type(text, { force: true });
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
