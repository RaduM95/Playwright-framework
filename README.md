# 🎭 Playwright Automation Framework

This framework was designed as a stepping stone for me to delve into the world of automation.  
It uses the website [https://automationexercise.com/](https://automationexercise.com/) as a testing ground for both API and UI testing.

It is built with a modular structure for scalability, reusability, and easy maintenance — suitable for anyone exploring end-to-end automation with Playwright.

---

## 📂 Project Structure
```
PLAYWRIGHT/
│
├── data/ # Test data in CSV format
│ ├── cards.csv
│ ├── signupUsers.csv
│ └── users.csv
│
├── fixtures/ # Test fixtures and static data
│ ├── fixtures.js
│ └── login.json
│
├── pages/ # Page Object Models
│ ├── basePage.js
│ ├── contactPage.js
│ ├── homePage.js
│ ├── loginPage.js
│ ├── paymentPage.js
│ └── signupDetails.js
│
├── tests/
│ ├── API/ # API test cases
│ │ ├── API 1 Get All Products List.spec.js
│ │ ├── API 2 POST To All Products List.spec.js
│ │ ├── ...
│ │
│ ├── UI/ # UI test cases
│ │ ├── Test Case 1 Register user.spec.js
│ │ ├── Test Case 2 Login User.spec.js
│ │ ├── ...
│ │
│ ├── UI-Negative/ # Negative test cases (WIP)
│ └── Regression/ # Regression suite (WIP)
│
├── utils/ # Utility scripts
│ └── csvReader.js
│
├── playwright-report/ # Playwright HTML reports
├── test-results/ # Raw test output and traces
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js # Global Playwright configuration
└── README.md
```
---

## ⚙️ Setup & Installation

### 1. Clone the repository

git clone https://github.com/<your-repo-name>.git
cd playwright-framework

### 2. Install dependencies

npm install

### 3. Run Playwright setup (for browsers)

npx playwright install

---

## 🚀 Running Tests

### ✅ Run All Tests

npx playwright test

### 🧪 Run Specific Folder or File

npx playwright test tests/API
npx playwright test tests/UI/Test\ Case\ 1\ Register\ user.spec.js

### 📊 Run Tests with HTML Report

npx playwright test --reporter=html

After execution, open the report:

npx playwright show-report

---

### 🧰 Utilities

csvReader.js — Reads CSV data for data-driven tests.

fixtures.js — Contains reusable test fixtures and authentication setup.

login.json — Stores login-related test data.

---

### 🧩 Features

✅ API and UI test coverage
✅ Data-driven testing with CSV support
✅ Modular test organization (API / UI / Regression)
✅ Easy configuration via playwright.config.js
✅ Auto-generated Playwright HTML reports
✅ Scalable design for CI/CD integration

---

### 📦 Dependencies

Main dependencies used in this framework:

[Playwright](https://playwright.dev)
[Node.js](https://nodejs.org/)
[CSV Parser](https://www.npmjs.com/package/csv-parser)

---

### 📜 License

This project is licensed under the MIT License — you are free to modify and distribute it.
