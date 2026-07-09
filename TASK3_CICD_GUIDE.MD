## Task 3 - CI/CD Implementation Guide

The automated tests can be added to a CI/CD pipeline so they run automatically when code is pushed or when a pull request is raised.
This gives the team quick feedback if a change breaks the Availability Checker, room API, or Admin Login journey.

Example GitHub Actions Flow
- Developer pushes code or raises a pull request.
- The CI pipeline starts automatically.
- The pipeline checks out the repository.
- Node.js is installed.
- Dependencies are installed using npm install.
- Cypress tests are executed using npm test.
- If the tests pass, the pipeline is successful.
- If any test fails, the pipeline fails and the team investigates before merging.

Example Pipeline File: .github/workflows/cypress-tests.yml 

## Future Improvements
- Run the API tests before the UI tests to get faster feedback.
- Use environment variables for different environments, such as test and staging.
- Publish the Allure report so the test results are easier to review.
- Run the tests across multiple browsers.
- Add accessibility checks to the pipeline.