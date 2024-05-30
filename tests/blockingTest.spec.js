const { test, chromium } = require('@playwright/test');
const { BlockingTestPage } = require('./pages/BlockingTestPage');
const path = require('path');

const extensionPath = path.resolve(__dirname, '../resources/Adblock-Plus');
const chromiumExecutablePath = path.resolve('/Applications/Chromium.app/Contents/MacOS/Chromium');
const subscriptionUrl = 'https://abptestpages.org/en/abp-testcase-subscription.txt';

test.describe('Ad Block Filter Tests', () => {
  let context;
  let blockingTestPage;

  test.beforeAll(async () => {
    console.log('Launching Chromium with Adblock Plus extension...');
    context = await chromium.launchPersistentContext('', {
      headless: false,
      executablePath: chromiumExecutablePath,
      args: [
        `--disable-extensions-except=${extensionPath}`,
        `--load-extension=${extensionPath}`
      ],
    });
    console.log('Chromium launched with Adblock Plus extension');
  });

  test.afterAll(async () => {
    console.log('Closing context...');
    if (context) {
      await context.close();
    }
  });

  test.beforeEach(async () => {
    const page = await context.newPage();
    blockingTestPage = new BlockingTestPage(page);
  });

  test('should land on the blocking test page, check for red images, apply filters, and validate blocking functionality', async () => {
    await blockingTestPage.visit();
    await blockingTestPage.verifyRedImagesVisibility(true);

    await blockingTestPage.subscribeToFilters(subscriptionUrl);

    await blockingTestPage.visit();
    await blockingTestPage.verifyRedImagesVisibility(false);
  });
});
