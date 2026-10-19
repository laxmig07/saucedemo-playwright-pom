const {expect} = require('@playwright/test');

class Cart{
    constructor(page){
        this.page = page;
        this.cartItem = page.locator('.shopping_cart_badge');
        this.checkoutBtn = page.locator('#checkout');
    }

    async cartItemAdded(){
        await this.cartItem.isVisible();
        await this.cartItem.click();
        await expect(this.cartItem).toHaveText('1');
        //await this.page.locator('#login-button').click();
    }

    async cartPage(){
        await this.page.locator('.title').isVisible();
        await expect(this.page.locator('.title')).toHaveText('Your Cart');
        await expect(this.page.locator('#item_4_title_link')).toHaveText('Sauce Labs Backpack');
        await this.checkoutBtn.click();
    }
}

module.exports = {Cart};