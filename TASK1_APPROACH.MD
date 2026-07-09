## Task 1 – Summary of Approach

I started by reading the user stories and acceptance criteria to understand what needed to be tested. 
I then identified the most important areas of the application, focusing on the Availability Checker and the Admin Login.

I chose to test the main user journeys:
- A user can check room availability from the homepage.
- A user only sees rooms that are available for the selected dates.
- A user is informed when no rooms are available.
- An admin can log in with valid credentials.
- Invalid login attempts are rejected.

I used a combination of API and UI tests. The API tests check that the backend is working correctly, while the UI tests make sure the main user journeys work as expected from the user's point of view.
Before writing the automated tests, I spent some time exploring the application to understand how it worked, identify the elements I needed, and confirm how the login and availability features behaved.
I focused on the most important scenarios. If I had more time, I would add more test cases, use dynamic dates instead of fixed dates, include accessibility checks, improve the test reporting, and expand the CI/CD pipeline.