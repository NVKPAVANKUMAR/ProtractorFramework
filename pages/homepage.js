let homepage = function(){

    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'))
    let goButton_btn = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url){
        browser.get(url);
    };

    this.enterFirstNumber = function(firstNo){
        firstNumber_input.sendKeys(firstNo);
    };

    this.enterSecondNumber = function(secondNo){
        secondNumber_input.sendKeys(secondNo);
    };

    this.clickGoButton = function(){
        goButton_btn.click();
    };

    this.verifyResult = function(expectedResult){
        let result = element(by.cssContainingText('.ng-binding',expectedResult));
        expect(result.getText()).toEqual(expectedResult);
    };
};

module.exports = new homepage();