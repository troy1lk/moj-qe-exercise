## Task 2 – Automated Functional and Non-Functional Scenarios

```Functional Scenarios```
Scenario
- Availability checker is visible on the homepage - Test level - `UI`,   Automated - `Yes`, - Makes sure the feature is available to the user.
- User can search using valid check-in and check-out dates - Test level - `UI`,   Automated - `Yes`, - Covers the main booking journey.
- Available rooms are displayed for valid dates - Test level - `UI`, Automated - `Yes`, - Checks that the correct rooms are shown.
- Unavailable rooms are not displayed for the selected dates - Test level - `UI,`    Automated - `Yes`, - Makes sure users only see available rooms.
- Room `API` returns room information successfully - Test level - `API`,    Automated - `Yes`, - Checks the `API` is working correctly.
- Room `API` returns available rooms for the selected dates - Test level - `API`, Automated - `Yes`, - Confirms the availability search works correctly.
- Admin can log in with valid credentials - Test level - `UI` / `API`,    Automated - `Yes`, - Confirms valid users can log in.
- Invalid login attempts are rejected - Test level - `UI` / `API`,    Automated - `Yes`, - Confirms unauthorised users cannot log in.

```Non-Functional Scenarios```
Scenario
- Admin login completes within 5 seconds
Test level - `UI / API`    Automated - `Partially` -Matches the performance requirement in the acceptance criteria.
- Invalid login security check
Test level - `UI / API`    Automated - `Yes` -Checks that invalid users cannot access the system.
- Usability of the Availability Checker
Test level - `Exploratory`    Automated - `No` -Best checked by manually using the application.
- Accessibility of the date fields and buttons
Test level - `Exploratory`    Automated - `No` -Would be checked manually or added later using accessibility tools.
- Running tests in the CI pipeline
Test level - `CI`    Automated - `Yes` -Makes sure the tests run consistently on every code change.

## Testing approach
I focused on automating the main user journeys because they are the most important parts of the application. API tests provide quick feedback on the backend, while UI tests confirm the application works as expected from the user's point of view.
Before writing the automated tests, I spent some time exploring the application to understand how it worked and decide which scenarios were worth automating. I would continue to use exploratory testing for areas such as usability, accessibility and unexpected behaviour that are better assessed through manual testing.