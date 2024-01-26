# API Testing with Playwright

This project contains automated API tests using Playwright test scripts. The tests are designed to verify the functionality of https://api.gitguardian.com/.

## Getting Started

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js (v16 or higher)
- npm (Node Package Manager)

### Installation

1. Clone this repository:
   `git clone -b gitguardian_api_test https://github.com/kofi-sammy/gitguardian-e2e-tests.git`

2. Navigate to the project directory:
    `cd gitguardian-e2e-tests`

3. Install dependencies:
    `npm install`

### Configuration
Create a `.env` file in the root of the project with the following variables:
`URL=https://api.example.com`
`API_KEY=your_api_key`

### Run test
`npx playwright test`

## Additional tests
- Create a new user account and verify that it's successfully added.
- Test error scenarios, such as making requests to non-existent endpoints,.
- List all the memberships of a team.
- List prending request of a team.