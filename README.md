# ABP-Chromium-Test-Automation

![GitHub Actions](https://github.com/seemewalkin/eyeo-case-study/actions/workflows/playwright.yml/badge.svg)

This repository contains the test automation framework and an example of a test that runs against ABP Test Pages using [Playwright](https://playwright.dev/), JavaScript, and a custom Chromium browser with the Adblock Plus extension.

## Overview

### Why Playwright?
- Playwright allows testing across several browsers. I also wanted to evaluate how they currently work with extensions (previously, they didn't support headless mode for browsers with extensions).
- Playwright automatically waits for elements to be actionable, reducing the flakiness of tests.
- Playwright supports advanced features like network interception, screenshots, and video recording, which enhance the test automation capabilities.

I could've achieved similar results with Python + Selenium, but the setup would have been more tedious.


### Why Github Actions?
Initially, I attempted to use GitLab for compliance with Eyeo practices, as you host your projects on GitLab. However, I encountered blockers with the Debian x64 images of the browsers (the initially provided browser didn't have a URL filtering mechanic). Upon discovering that GitHub Actions offers free Mac OS runners, I switched to GitHub Actions to demonstrate a working solution effectively. Gitlab doesn't provide hosted Mac OS runners for [now](https://docs.gitlab.com/ee/ci/runners/hosted_runners/macos.html).


## Pre-requisites

- **Node.js**: Ensure Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **Playwright**: Playwright will be installed via npm as part of the project dependencies.

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/seemewalkin/eyeo-case-study
   cd eyeo-case-study
2. **Install the dependencies**:
   ```sh
   npm install
3. **Run the tests**:
    ```sh
    npm run test:local