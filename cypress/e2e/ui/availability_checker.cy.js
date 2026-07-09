describe("Availability Checker [UI]", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("shows the availability checker on the landing page", () => {
    cy.contains("Welcome to Shady Meadows B&B").should("be.visible");
    cy.contains("button", "Check Availability").should("be.visible");
  });

  it("allows a user to search using valid dates", () => {
    cy.contains("label", "Check In")
      .parent()
      .find("input")
      .clear()
      .type("10/08/2026");
    cy.contains("label", "Check Out")
      .parent()
      .find("input")
      .clear()
      .type("15/08/2026");
    cy.contains("button", "Check Availability").click();
    cy.contains("h5", "Single").should("be.visible");
    cy.contains("h5", "Double").should("be.visible");
  });

  const checkInDate = "10/08/2024";
  const checkOutDate = "15/08/2026";
  it("shows a message when no rooms are available", () => {
    cy.contains("label", "Check In")
      .parent()
      .find("input")
      .clear()
      .type(checkInDate);
    cy.contains("label", "Check Out")
      .parent()
      .find("input")
      .clear()
      .type(checkOutDate);
    cy.contains("button", "Check Availability").click();
    cy.contains(".room-card", "Double").should("not.exist");
    cy.contains(".room-card", "Single").should("not.exist");
    cy.contains(".room-card", "Suite").should("not.exist");
  });
});
