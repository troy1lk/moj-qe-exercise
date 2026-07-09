describe("Admin login [UI]", () => {
  beforeEach(() => cy.visit("/admin"));

  it("allows a user to log in successfully with valid credentials [admin]", () => {
    cy.get("#username").type("admin");
    cy.get("#password").type("password");
    cy.contains("button", "Login").click();
    cy.contains("Logout").should("be.visible");
  });

  it("verifies that a user cannot log in with invalid credentials", () => {
    cy.get("#username").type("invalidUsername");
    cy.get("#password").type("invalidPassword");
    cy.contains("button", "Login").click();
    cy.contains("Invalid credentials").should("be.visible");
  });
});
