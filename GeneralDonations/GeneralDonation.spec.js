describe('General Donations',function(){
   
    var until = protractor.ExpectedConditions;
    var url = 'https://ilb-sqa-portal.ci.olivetech.com/home';  
    var givebutton = element(by.xpath('//*[@id="header"]/div/nav/ul/li[1]/button[3]'));
  //  var amountInput = element(by.id('dollar-amount'));
  var amountInput = element(by.xpath('//*[@id="dollar-amount"]'));
    var giveButton = element(by.xpath('/html/body/app-root/app-giving/section/form/app-giving-amount/section/div[2]/div/div[1]/span[3]/button'));
var loginButton = element(by.buttonText('LOGIN'));
var monthlyGiftCheckBox = element(by.name('monthly'));
var emailId = element(by.id('email'));
var password = element(by.id('password'));
var loginButton1 = element(by.buttonText('LOGIN'));
var guestUserButton = element(by.buttonText('CONTINUE AS A GUEST'));
var firstName = element(by.xpath('//*[@id="mat-input-45"]'));








    
beforeAll(function(){
    browser.ignoreSynchronization = true;
    browser.get(url);
    browser.waitForAngular(true);
    browser.driver.manage().window().maximize();

})

// it('General donations for Authorized user in ILb',function(){

//     givebutton.click();
//     amountInput.click().clear().sendKeys("30");
//     monthlyGiftCheckBox.click();
//     giveButton.click();
//     loginButton.click();
//     emailId.click().clear().sendKeys(browser.params.login.loginemail);
//     password.click().clear().sendKeys(browser.params.login.loginpassword);
//     loginButton1.click();
//     browser.driver.sleep(3000);



// })
it('General donations for Guest user in ILb',function(){

    givebutton.click();
    amountInput.click().clear().sendKeys("30");
    monthlyGiftCheckBox.click();
    giveButton.click();
    // guestUserButton.click();
    // firstName.click().clear().sendKeys("priyanka");
    // browser.driver.sleep(5000);
    


})

// it('Forgot password for login', function(){






// })





});