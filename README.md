# ABP-Chromium-Test-Automation

![GitHub Actions](https://github.com/seemewalkin/eyeo-case-study/actions/workflows/playwright.yml/badge.svg)

[Results of CI runs](https://github.com/seemewalkin/eyeo-case-study/actions)

This repository contains the test automation framework and an example of a test that runs against ABP Test Pages using [Playwright](https://playwright.dev/), JavaScript, and a custom Chromium browser with the Adblock Plus extension.

## Overview

### Why Playwright?
- Playwright allows testing across several browsers. I also wanted to evaluate how they currently work with extensions (previously, they didn't support headless mode for browsers with extensions).
- Playwright automatically waits for elements to be actionable, reducing the flakiness of tests.
- Playwright supports advanced features like network interception, screenshots, and video recording, which enhance the test automation capabilities.

I could've achieved similar results with Python (or any convenient language) + Selenium or Appium if would've developed the Android Browser test, but the setup would have been more tedious for Selenium and Android build didn't have URL-link block functionality enabled.

### Why Github Actions?
Initially, I planned to use GitLab to stay compliant with Eyeo practices, as you host your projects there. However, I ended up implementing my solution using GitHub Actions because I could only replicate the working setup of my solution on Chromium-126.0 for macOS. I encountered several blockers with the Debian x64 images of the browsers, which did not support blocking mechanisms via Link. Since I still needed to demonstrate a successful run, I quickly built a pipeline on GitHub Actions. Fortunately, GitHub Actions provides free macOS runners on its free tier, unlike GitLab CI, which only offers macOS-hosted runners on [Premium and Ultimate](https://docs.gitlab.com/ee/ci/runners/hosted_runners/macos.html) tier accounts. That was quite creative, I didn't expect my challenge to go in that direction :) 

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