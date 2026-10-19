const {expect} = require('@playwright/test');

class Confirmation{
    constructor(page){
        this.page = page;
        this.downloadBtn = page.locator('#generate-pdf-order');
    }

    async confirmationPage(){
        await this.page.locator('.title').isVisible();
        await expect(this.page.locator('.title')).toHaveText('Checkout: Complete!');
        await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!');
        await this.downloadBtn.click();
    }
}

module.exports = {Confirmation};