let homepage = require('../pages/homepage');

describe('demo calculator tests', function () {
    it('addition test ', function () {
        // browser.get('http://localhost:3456/');
        // element(by.model('first')).sendKeys(2);
        // element(by.model('second')).sendKeys(3);
        // element(by.xpath('//button[@id=\'gobutton\']')).click();
        // // element(by.css('[ng-click="doAddition()"]')).click();
        // let result = element(by.cssContainingText('.ng-binding','5'));
        // expect(result.getText()).toEqual('5');
        // browser.sleep(2000);
        //
        homepage.get('http://localhost:3456/');
        homepage.enterFirstNumber(2);
        homepage.enterSecondNumber(3);
        homepage.clickGo();
        homepage.verifyResult("5");
        browser.sleep(2000);
    });
});
