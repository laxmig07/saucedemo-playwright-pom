const {expect} = require('@playwright/test');

class Checkout{
    constructor(page){
        this.page = page;
        this.firstname = page.getByPlaceholder('First Name');
        this.lastname = page.getByPlaceholder('Last Name');
        this.postalCode = page.getByPlaceholder('Zip/Postal Code');
        this.continueBtn = page.locator('#continue');
    }

    async checkoutPage(firstname, lastname, postalcode){
        await this.page.locator('.title').isVisible();
        await expect(this.page.locator('.title')).toHaveText('Checkout: Your Information');
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.postalCode.fill(postalcode);
        await this.continueBtn.click();
    }

    async checkoutOverviewPage(){
        await this.page.locator('.title').isVisible();
        await expect(this.page.locator('.title')).toHaveText('Checkout: Overview');
        await this.page.locator('#finish').click();
    }
}

module.exports = {Checkout};