const { browser } = require('protractor');
let homepage = require('../pages/homepage');
describe('Calculator page demo using POM', function () {
  browser.waitForAngularEnabled(false);
  it('Add two numbers', function () {
    homepage.get('http://juliemr.github.io/protractor-demo/');
    homepage.enterFirstNumber(10);
    homepage.enterSecondNumber(30);
    browser.sleep(2000);
    homepage.clickGoButton();
    browser.sleep(5000);
    homepage.verifyResult('40');
    browser.sleep(3000);
  });

  it('Addition test -02', function () {
    homepage.get('http://juliemr.github.io/protractor-demo/');
    homepage.enterFirstNumber(40);
    homepage.enterSecondNumber(50);
    browser.sleep(2000);
    homepage.clickGoButton();
    browser.sleep(5000);
    homepage.verifyResult('90');
    browser.sleep(3000);
  });
});
