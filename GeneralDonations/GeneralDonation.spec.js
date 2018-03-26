describe('General Donations',function(){
   
    var until = protractor.ExpectedConditions;
    var url = 'https://ilb-sqa-portal.ci.olivetech.com/home';  
    var givebutton = element(by.xpath('//*[@id="header"]/div/nav/ul/li[1]/button[3]'));
    var amountInput = element(by.id('dollar-amount'));
    var giveButton = element(by.xpath('/html/body/app-root/app-giving/section/form/app-giving-amount/section/div[2]/div/div[1]/span[3]/button'));










    
beforeAll(function(){
    browser.ignoreSynchronization = true;
    browser.get(url);
    browser.waitForAngular(true);
    browser.driver.manage().window().maximize();

})

it('General donation in ILb',function(){

    givebutton.click();
    amountInput.click().clear().sendKeys("30");
    giveButton.click();
    browser.driver.sleep(3000);


})







});