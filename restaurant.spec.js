const LoginPage = require( "../pageobjects/LoginPage");
const SelectRestaurant = require( "../pageobjects/SelectRestaurant");
describe('Clients Suit', ()=> {
    beforeEach( async() => {
        await LoginPage.open();
        await LoginPage.doLogin('Admin', 'Admin@Navi');
    })
    it('Reastaurant select', async ()=> {
        await SelectRestaurant.openfilter();
        await browser.pause(15000);
        await SelectRestaurant.selectOption();
        await browser.pause(5000);
        await SelectRestaurant.search();
        await browser.pause(5000);
    })
})

