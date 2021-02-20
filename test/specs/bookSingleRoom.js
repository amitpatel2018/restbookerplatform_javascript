const homePage = require('../pageobjects/home.page');

describe('It should book single room', () => {
    it('Should navigate to URL', () => {
        homePage.open();
    });
    it('Should click on Book This Room button', () => {
        homePage.clickOnBookThisRoom();
    });
    it('Should select booking dates', () => {
        homePage.selectDates();
    });
    it('Should submit form with user details', () => {
        homePage.submitFormWithUserDetails('AwesomeQA', 'Engineer', 'awesomeqaengineer@gmail.com', '07812121212');
    });
    it('Should confirm the booking success message', () => {
        homePage.verifyBookingConfirmation("Booking Successful!");
    })
});