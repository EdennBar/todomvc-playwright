# Installation

To install the necessary dependencies for running the tests, simply run:

1.  ```bash
    npm install
    ```
# Test Suite Execution Options

## Option 1: Run with Selenium Hub Grid, allure with compose

1. **Steps:**
   - Make the script executable:
     ```bash
     chmod +x run-selenium-grid.sh
     ```
   - Run the script:
     ```bash
     ./run-selenium-grid.sh
     ```

2. **Generated Folder:**
   - `allure-reports`

3. **Navigation:**
   - Allure API: [http://localhost:5050/allure-docker-service/latest-report](http://localhost:5050/allure-docker-service/latest-report)
   - Allure UI: [http://localhost:5252/allure-docker-service-ui/](http://localhost:5252/allure-docker-service-ui/)

4. **Watch Tests:**
   - [http://localhost:4444/ui](http://localhost:4444/ui)
     - LiveView VNC Password: `secret`

![Screenshot 2024-05-04 at 15 28 00](https://github.com/EdennBar/todomvc-playwright/assets/88652432/d4782daf-6449-484e-b636-65142815fa20)
![Screenshot 2024-05-04 at 15 47 34](https://github.com/EdennBar/todomvc-playwright/assets/88652432/1780b6f4-5b3f-47f6-bd4d-1deb0935495d)
![Screenshot 2024-05-04 at 16 16 41](https://github.com/EdennBar/todomvc-playwright/assets/88652432/27446e65-293c-479c-8c38-ae3b795ecb5e)
![Screenshot 2024-05-04 at 16 17 03](https://github.com/EdennBar/todomvc-playwright/assets/88652432/84d04f6a-55b1-492a-9280-ee0a6d0f6c8a)

## Option 2: 

1. **Steps:**
   - Run tests:
     ```bash
     npx playwright test --headed
     ```
   - Generate Allure Report:
     ```bash
     allure generate allure-results -o allure-report --clean
     ```
   - Open Allure Report:
     ```bash
     allure open allure-report/
     ```

2. **Generated Folders:**
   1. allure-report
   2. allure-results



