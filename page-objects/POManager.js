const { LoginPage } = require('./LoginPage');
const { Products } = require('./Products');
const { Cart } = require('./Cart');
const { Checkout } = require('./Checkout');
const { Confirmation } = require('./Confirmation');

class POManager{
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.products2Cart = new Products(page);
        this.cartPage = new Cart(page);
        this.checkoutPage = new Checkout(page);
        this.confirmationPage = new Confirmation(page);
    }

    getLoginPage(){
        return this.loginPage;
    }

    getProducts2Cart(){
        return this.products2Cart;
    }

    getCartPage(){
        return this.cartPage;
    }

    getCheckoutPage(){
        return this.checkoutPage;
    }

    getConfirmationPage(){
        return this.confirmationPage;
    }
}

module.exports = {POManager};