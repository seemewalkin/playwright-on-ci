module.exports = {
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  reporter: [
    ['line'],
    ['junit', { outputFile: 'test-results/test_results.xml' }],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ]
};
