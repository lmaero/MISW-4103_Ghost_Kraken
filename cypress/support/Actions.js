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

  static takeScreenshot() {
    cy.screenshot(`cypress-${this.version}-${this.counter.toString()}`, {
      capture: "viewport",
      overwrite: true,
    });
    this.counter++;
  }
}
