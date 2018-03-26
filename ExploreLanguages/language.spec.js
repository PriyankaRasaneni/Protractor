describe('Explore languages', function(){
    var until = protractor.ExpectedConditions; 
    var url='https://ilb-sqa-portal.ci.olivetech.com/home';
    var exploreLanguageLink = element(by.xpath('//*[@id="header"]/div/nav/ul/li[1]/button[2]/span'));
    var languageSearchButton = element(by.xpath('/html/body/app-root/app-language-listing/div/section/div/app-language-search/div/div[2]/form/div[2]/button'));
    var continentSearchField = element(by.xpath('/html/body/app-root/app-language-listing/div/section/div/app-language-search/div/div[2]/form/div[1]/mat-form-field[1]/div/div[1]/div'));
    var languageHeading =element(by.xpath('/html/body/app-root/app-language-listing/div/section/app-language-results/section/section[1]/table/h3'));
    


    beforeAll(function() {
        browser.ignoreSynchronization = true;
        browser.get(url);
        browser.waitForAngular(true);
        browser.driver.manage().window().maximize();
        //browser.driver.sleep(5000);
    });
    it('Language Search',function(){
        //browser.driver.sleep(3000);
        //console.log('hhhhh3');
        browser.wait(until.elementToBeClickable(exploreLanguageLink,7000, 'no element of explore lang'));
        //console.log('hhhhh33');
        exploreLanguageLink.click();
        browser.waitForAngular(true);
        browser.wait(until.elementToBeClickable(languageSearchButton,7000, 'no element of explore lang'));
        languageSearchButton.click();
        console.log('language search button is clicked');
    
    });
    it('Language Search results',function(){
    
        browser.wait(until.textToBePresentInElement(languageHeading, 'Languages'), 9000, 'Element taking too long to appear in the DOM');
        continentSearchField.click();
        //console.log('hhhhh3');
        
        browser.driver.actions().mouseDown(continentSearchField).click().sendKeys("Asia").perform();
        languageSearchButton.click();
        browser.driver.sleep(9000);
    });

  // browser.driver.sleep(1000);
    
});