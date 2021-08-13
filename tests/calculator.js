var using = require('jasmine-data-provider');
const { browser } = require('protractor');
var d = require('../testdata/data.js');

describe('demo calculator tests', function () {
  using(d.Datadriven, function (data, description) {
    it('addition test ' + description, function () {
      browser.waitForAngularEnabled(false);
      browser.get('http://juliemr.github.io/protractor-demo/');
      browser.sleep(1000);
      element(by.model('first')).sendKeys(data.firstInput);
      element(by.model('second')).sendKeys(data.secondInput);
      element(by.css('[ng-click="doAddition()"]')).click();
      browser.sleep(5000);
      let result = element(by.cssContainingText('.ng-binding', data.result));
      expect(result.getText()).toEqual(data.result);
      browser.sleep(2000);
    });
  });
});
