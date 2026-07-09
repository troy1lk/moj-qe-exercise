const BASE = "https://automationintesting.online";
const CHECKIN = "2026-08-10"; // Same dates as ui.cy.js
const CHECKOUT = "2026-08-15"; 

describe("API tests", () => {
  it("returns all rooms", () => {
    cy.request("GET", `${BASE}/api/room`).then((res) => {
      expect(res.body.rooms).to.have.length(3);
    });
  });

  it("returns available rooms for a date range", () => {
    cy.request(
      "GET",
      `${BASE}/api/room?checkin=${CHECKIN}&checkout=${CHECKOUT}`,
    ).then((res) => {
      expect(res.body.rooms).to.not.be.empty;
    });
  });

  it("allows a user to log in successfully with valid credentials [admin]", () => {
    cy.request("POST", `${BASE}/api/auth/login`, {
      username: "admin",
      password: "password",
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.token).to.exist;
      expect(res.duration).to.be.lessThan(5000);
    });
  });

  it("verifies that a user cannot log in with invalid credentials", () => {
    cy.request({
      method: "POST",
      url: `${BASE}/api/auth/login`,
      body: { username: "invalidUsername", password: "wrongPassword" },
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(401);
    });
  });
});
