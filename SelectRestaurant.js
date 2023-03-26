class SelectRestaurant {
    get filterField () { return $('input[name="search"]') };
    get RestaurantField () {return $('[class="options-select orders"]')};
    get Restaurant1 () {return $('p=Уголек')};
    get Restaurant2 () {return $('p=Нико')};
    get Restaurant3 () {return $('p=Pamukkale')};


    get searchButton () {return $('[class="bold mat-button"]')};

    async openfilter(){
        await this.filterField.click();
    }

    async selectOption(){
        await this.RestaurantField.click();
        await this.Restaurant1.click();
        await this.Restaurant2.click();
        await this.Restaurant3.click();
        await this.RestaurantField.click();
    }
    async search(){
        await this.searchButton.click();
    }
}
module.exports = new SelectRestaurant();