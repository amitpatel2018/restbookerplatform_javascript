const assert = require('assert');
const Page = require('./page');
class HomePage extends Page {

    get bookThisRoom() { return $('//button[contains(@class,"openBooking")]') }
    get source() { return $('.rbc-month-view > div:nth-child(5) .rbc-row-bg .rbc-day-bg:nth-child(1)') }
    get firstName() { return $('[name="firstname"]') }
    get lastName() { return $('[name="lastname"]') }
    get email() { return $('[name="email"]') }
    get phone() { return $('[name="phone"]') }
    get bookButton() { return $('//button[@class="btn btn-outline-primary float-right book-room"]') }
    get confirmMessage() { return $('.text-center > h3') }


    open() {
        return super.open();
    }
    clickOnBookThisRoom() {
        this.bookThisRoom.scrollIntoView();
        this.bookThisRoom.click();
    }
    selectDates() {
        browser.performActions([{
            type: 'pointer',
            id: 'pointer1',
            parameters: { pointerType: 'mouse' },
            actions: [
                { "type": 'pointerMove', origin: this.source, x: 0, y: 0 },
                {"type": "pause", "duration": 500},
                { "type": 'pointerDown', button: 0 },
                {"type": "pause", "duration": 500},
                { "type": 'pointerMove', origin: this.source, x: 20, y: 10 },
                {"type": "pause", "duration": 500},
                { "type": 'pointerMove', origin: this.source, x: 200, y: 0 },
                {"type": "pause", "duration": 500},
                { "type": 'pointerUp', button: 0 }
            ]
        }])
        browser.pause(2000);
    }
    submitFormWithUserDetails(fname, lname, emailAddress, contactNumber) {
        this.firstName.setValue(fname);
        this.lastName.setValue(lname);
        this.email.setValue(emailAddress);
        this.phone.setValue(contactNumber);
        this.bookButton.click();
    }
    verifyBookingConfirmation(expectedMessage) {
        const actualMessage = this.confirmMessage.getText();
        assert.strictEqual(actualMessage, expectedMessage);
    }
}

module.exports = new HomePage();