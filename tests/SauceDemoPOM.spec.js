const {test} = require('@playwright/test');
const {POManager} = require('../page-objects/POManager.js');
const credentials = JSON.parse(JSON.stringify(require('../utils/SauceDemoLoginData.json')));

const username = credentials.username;
const password = credentials.password;

test('E2E SauceDemo', async({page}) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.navigateTOSauceDemo();
    await loginPage.loginToSauceDemo(username, password);

    const products2Cart = poManager.getProducts2Cart();
    await products2Cart.productsPage();
    await products2Cart.selectProductAddToCart();

    const cartPage = poManager.getCartPage();
    await cartPage.cartItemAdded();
    await cartPage.cartPage();

    const checkoutPage = poManager.getCheckoutPage();
    await checkoutPage.checkoutPage('John', 'Doe', '12345');
    await checkoutPage.checkoutOverviewPage();

    const confirmationPage = poManager.getConfirmationPage();
    await confirmationPage.confirmationPage();
});