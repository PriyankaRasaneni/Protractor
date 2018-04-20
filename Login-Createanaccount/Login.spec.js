describe('Login functionality for ILB',function(){
//var browser = require('D:/Priyanka/ILB/Browser/Browser.spec.js');
var until = protractor.ExpectedConditions;
var url = 'https://ilb-sqa-portal.ci.olivetech.com/home';  
var menuButton = element(by.buttonText('MENU')); 
var loginbutton = element(by.xpath('//*[@id="hamburger-menu"]/div/div/a[1]/p'));
var email = element(by.id('email'));
var password = element(by.id('password'));
var loginButton = element(by.xpath('/html/body/app-root/app-login/div[2]/div/div/form/button'));


beforeAll(function(){
    //browser.ignoreSynchronization = true;
    browser.get(url);
    browser.waitForAngular(true);
    browser.driver.manage().window().maximize();

})



it('login with ILB',function(){
    
    menuButton.click();
    browser.driver.sleep(5000);
    console.log('clicked menu');
    browser.wait(until.elementToBeClickable(loginbutton,5000,'no element to be clickable'));    
    loginbutton.click();
    email.click().clear().sendKeys("priyanka@olivetech.net");
    password.click().clear().sendKeys("123456");
    loginButton.click();

    browser.driver.sleep(3000);



})

































})