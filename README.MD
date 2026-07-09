# Quality Engineer – Technical Exercise
My submission for the MoJ QE exercise. 
I tested the target site (https://automationintesting.online/) using Cypress, leaning on a mix of API and UI checks to keep the overall suite both fast and reliable.

## What's in the repo
cypress/e2e/api/api.cy.js                  API tests (rooms + login)
cypress/e2e/ui/availability_checker.cy.js  Room search on the homepage
cypress/e2e/ui/login.cy.js                 Admin login page
cypress/support/                           Commands and setup

## Setup
You'll need Node.js.
```bash
npm install
```

## Running the tests
```bash
npm test              # run everything headless
npm run test:open     # open Cypress and pick a spec
```

To run a single file:
```bash
npx cypress run --spec cypress/e2e/api/api.cy.js
npx cypress run --spec cypress/e2e/ui/login.cy.js
```

## What the tests cover

**API** (`api.cy.js`)
- GET `/api/room` returns all rooms
- GET `/api/room` with check-in/out dates returns available rooms
- POST `/api/auth/login` — valid and invalid credentials

**UI - availability** (`availability_checker.cy.js`)
- Availability checker is visible on the homepage
- Searching with valid dates shows room cards
- Searching with dates that have no availability hides the room cards

**UI – login** (`login.cy.js`)
- Admin can log in with valid credentials
- Invalid credentials show an error message

## Assumptions
- Site under test: `https://automationintesting.online`
- Admin login: `admin` / `password` (In a real project I'd store these in secure storage as secrets and read them at run time.)
- When no rooms are available, the cards simply disappear - there isn't a dedicated "no rooms" message on the site

## Notes
- I used fixed dates for this exercise (In a real project I'd generate future dates at runtime so tests don't go stale).
- Allure is wired up in `cypress.config.js` if you want reports from `allure-results`.
