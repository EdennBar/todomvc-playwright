There are 2 options to run the test suit:

first option: 
  chmod +x run-selenium-grid.sh
  ./run-selenium-grid.sh
  It will generte 1 folder:
    1)allure-report

  Navigate to:
  Allure API is working. Go to -> http://localhost:5050/allure-docker-service/latest-report
  Allure UI is working. Go to -> http://localhost:5252/allure-docker-service-ui/

  

![Screenshot 2024-05-04 at 15 28 00](https://github.com/EdennBar/todomvc-playwright/assets/88652432/5a3b7ffb-323a-4713-9beb-38ac8a789386)
![Screenshot 2024-05-04 at 15 47 34](https://github.com/EdennBar/todomvc-playwright/assets/88652432/73d1a8d4-3ce7-43be-83ef-619d6b9acaef)
![Screenshot 2024-05-04 at 15 29 50](https://github.com/EdennBar/todomvc-playwright/assets/88652432/42987c68-c7b5-4acc-ba34-2da62e8a9d59)

2) The second option run it locally with compose: DOCS: -> https://www.npmjs.com/package/allure-playwright
   npx playwright test --headed
   Generate Allure Report:
   allure generate allure-results -o allure-report --clean
   Open Allure Report:
   allure open allure-report/ or open it with Live Server..
It will generte 2 folders:
  1) allure-report
  2) allure-results
     
![Screenshot 2024-05-04 at 16 16 41](https://github.com/EdennBar/todomvc-playwright/assets/88652432/299d73a8-068d-440b-a254-d46038acb69c)
![Screenshot 2024-05-04 at 16 17 03](https://github.com/EdennBar/todomvc-playwright/assets/88652432/62451f32-7494-40ca-81dd-49129b0fde47)
