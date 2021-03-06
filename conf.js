var HtmlReporter = require('protractor-beautiful-reporter');
// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'firefox',
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['tests/calculator.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },
  onPrepare: function () {
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(
      new HtmlReporter({
        baseDirectory: 'reports/screenshots',
      }).getJasmine2Reporter()
    );
  },
};
