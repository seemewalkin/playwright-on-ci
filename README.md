# ABP-Chromium-Test-Automation

![GitHub Actions](https://github.com/seemewalkin/eyeo-case-study/actions/workflows/playwright.yml/badge.svg)

[Results of CI runs](https://github.com/seemewalkin/eyeo-case-study/actions)

This repository contains the test automation framework and an example of a test that runs against ABP Test Pages using [Playwright](https://playwright.dev/), JavaScript, and a custom Chromium browser with the Adblock Plus extension. Runs on 

## Overview

### Why Playwright?
- Playwright allows testing across several browsers. I also wanted to evaluate how they currently work with extensions (previously, they didn't support headless mode for browsers with extensions).

## Pre-requisites

- **Node.js**: Ensure Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **Playwright**: Playwright will be installed via npm as part of the project dependencies.

## Installation

1. **Install the dependencies**:
   ```sh
   npm install
2. **Run the tests**:
    ```sh
    npm run test:local
