# End-to-End Testing with Playwright

This project contains End-to-End UI tests using Playwright test scripts.

## Getting Started

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js (v16 or higher)
- npm (Node Package Manager)

### Installation

1. Clone this repository:
   `git clone -b gitguardian_ui_test https://github.com/kofi-sammy/gitguardian-e2e-tests.git`

2. Navigate to the project directory:
    `cd gitguardian_ui_test`

3. Install dependencies:
    `npm install`

### Run test
`npx playwright test`

## Additional tests
- Create a new user account using GitHub Account.
- Test the "Forget Password" option during sign-in..
- Delete user account.
- Input an invalid username or password.