describe('Explore languages', function(){
var until = protractor.ExpectedConditions;
var url = 'https://ilb-sqa-portal.ci.olivetech.com/home';
var menuButton = element(by.buttonText('MENU'));
var createAccountlink = element(by.xpath('//*[@id="hamburger-menu"]/div/div/a[2]/p'));
var creatAccountHeading= element(by.xpath('//*[@id="create-with-social"]/h2'));
var emailId = element(by.id('mat-input-3'));
var createAccountNextButton = element(by.buttonText('NEXT'));
var firstName =element(by.id('first-name'));
var lastName = element(by.id('last-name'));
var password = element(by.id('password-input'));
var confirmPassword = element(by.id('confirm-password-input'));
var nextButton = element(by.xpath('/html/body/app-root/app-create-account/div[2]/form/app-create-email/div/div/button'));
var emailverificationmessage = element(by.xpath('/html/body/app-root/app-create-account/div[2]/app-create-confirmation/section/div/button'));

beforeAll(function(){
    browser.ignoreSynchronization = true;
    browser.get(url);
    browser.waitForAngular(true);
    browser.driver.manage().window().maximize();
    
    

})

it('Creating_an-account',function(){

//  displaying title of the page

    var title = browser.getTitle();
    title.then(function(text){
      console.log("Title for the page is :", text);
    })

var Url = browser.getCurrentUrl().then(function(url){
    console.log("Url for this page is :", Url);
})

    
    menuButton.click();
    browser.driver.sleep(5000);
    console.log('clicked menu');
    browser.wait(until.elementToBeClickable(createAccountlink,5000,'no element to be clickable'));
    createAccountlink.click();
    browser.driver.sleep(5000);
    browser.wait(until.textToBePresentInElement(creatAccountHeading,'Create an Account'),5000, 'Taking time to check');
    browser.getAllWindowHandles().then(function(handles){
        browser.switchTo().window(handles[0]).then(function(){
            emailId.click();
            emailId.sendKeys("priyanka@olivetech.net");
            console.log(emailId);
            browser.driver.sleep(5000);
        });
    });
    createAccountNextButton.click();
    browser.driver.sleep(3000);
    firstName.click();
    firstName.sendKeys("Priyanka");
    lastName.click();
    lastName.sendKeys("Rasaneni");
    password.click().sendKeys("123456");
    confirmPassword.click().sendKeys("123456");
    nextButton.click();
    browser.driver.sleep(3000);

})


// it('verify email',function(){
    
// })













})