/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    open () {
        browser.maximizeWindow();
        return browser.url(`https://aw1.automationintesting.online/`);
    }
}
