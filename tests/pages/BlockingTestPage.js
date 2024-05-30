const { expect } = require('@playwright/test');

class BlockingTestPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://abptestpages.org/en/filters/blocking';
    this.helpUrl = 'https://adblock.test.data/help';
    this.idsToCheck = [
      'full-path-fail-1',
      'partial-path-fail-1',
      'wildcard-fail-1',
      'dynamic-fail-1',
      'deep-subdomains-fail-1'
    ];
  }

  async visit() {
    await this.page.goto(this.url);
    console.log('Test page loaded:', await this.page.url());
  }

  async verifyRedImagesVisibility(shouldBeVisible) {
    for (const id of this.idsToCheck) {
      const element = this.page.locator(`#${id}`);
      if (shouldBeVisible) {
        await expect(element).toBeVisible();
        console.log(`Red image with ID ${id} is present`);
      } else {
        await expect(element).toBeHidden();
        console.log(`Red image with ID ${id} is blocked`);
      }
    }
  }

  async fetchSubscriptionList(url) {
    const response = await fetch(url);
    const data = await response.text();
    return data.split('\n').filter(line => line && !line.startsWith('!')).join('\n');
  }
  
  async subscribeToFilters(subscriptionUrl) {
    const filters = await this.fetchSubscriptionList(subscriptionUrl);
    const encodedFilters = encodeURIComponent(filters);
    const subscribeUrl = `https://adblock.test.data/filters/add/${encodedFilters}`;
    await this.page.goto(subscribeUrl);
    console.log('Subscribed to filters');
  }
}

module.exports = { BlockingTestPage };