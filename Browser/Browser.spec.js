describe('Browsing ILB site',function(){
    var until = protractor.ExpectedConditions;
    var url = 'https://ilb-sqa-portal.ci.olivetech.com/home';  

    beforeAll(function(){
        browser.ignoreSynchronization = true;
        browser.get(url);
        browser.waitForAngular(true);
        browser.driver.manage().window().maximize();
    })

   



});