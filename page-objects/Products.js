const {expect} = require('@playwright/test');

class Products{
    constructor(page){
        this.page = page;
        this.product = page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' });;

    }

    async productsPage(){
        await this.page.locator('.app_logo').isVisible();
        await expect(this.page.locator('.app_logo')).toHaveText('Swag Labs');
        await this.page.locator('.inventory_list').waitFor();
    }

    async selectProductAddToCart(){
        const productName = await this.product.textContent();
        console.log(`Selected product: ${productName}`);
        await this.product.locator('#add-to-cart-sauce-labs-backpack').click();
    }
}

module.exports = {Products};