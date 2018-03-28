# Protractor
-------------------------------
Protractor needs two files to run: the test or spec file and the configuration file.
********************************************************************

Global Variables:
################
Protractor exports these global variables to your spec (test) file:

browser - A wrapper around an instance of WebDriver, used for navigation and page-wide information. The browser.get method loads a page. Protractor expects Angular to be present on a page, so it will throw an error if the page it is attempting to load does not contain the Angular library. (If you need to interact with a non-Angular page, you may access the wrapped webdriver instance directly with browser.driver).

element - A helper function for finding and interacting with DOM elements on the page you are testing. The element function searches for
an element on the page. It requires one parameter, a locator strategy for locating the element. See Using Locators for more information. See Protractor's ElementFinder test suite (elements_spec.js) for more examples.

by - A collection of element locator strategies. For example, elements can be found by CSS selector, by ID, or by the attribute they are bound to with ng-model. See Using Locators.

protractor - The Protractor namespace which wraps the WebDriver namespace. Contains static variables and classes, such as protractor.Key which enumerates the codes for special keyboard signals.

Spec files :
###########
Protractor tests are written using the syntax of your test framework, for example Jasmine, and the Protractor API.

Config Files :
############
The configuration file tells Protractor how to set up the Selenium Server, which tests to run, how to set up the browsers, and which test framework to use. The configuration file can also include one or more global settings.


Notes: Clear Explanation about protractor is available in the below link
https://github.com/angular/protractor/blob/master/docs/api-overview.md




























