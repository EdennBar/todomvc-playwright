#DEBUG=pw:browser* SELENIUM_REMOTE_URL=http://localhost:4444 npx playwright test --project=chromium

# Bring up the Selenium Grid and Allure services
docker-compose -f selenium-grid-compose.yml up -d --scale chrome=4
# Sleep to allow services to start up
sleep 15

# Run the tests

echo "Running tests..."
SELENIUM_REMOTE_URL=http://localhost:4444/ npx playwright test --project=chromium --headed

Execute npm script to generate Allure report
echo "Generating Allure report..."
allure generate --clean allure-results && allure open


#https://github.com/fescobar/allure-docker-service-examples/blob/master/allure-docker-nodejs-typescript-mocha-example/docker-compose.yml

# Allure API is working. Go to -> http://localhost:5050/allure-docker-service/latest-report

# Allure UI is working. Go to -> http://localhost:5252/allure-docker-service-ui/