export class Actions {
  static counter = 1;

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

  static getAndClick(element) {
    cy.get(element).first().click();
    this.takeScreenshot();
  }

  static takeScreenshot() {
    cy.screenshot(`cypress-${this.counter.toString()}`, {
      capture: "viewport",
      overwrite: true,
    });
    this.counter++;
  }
}
