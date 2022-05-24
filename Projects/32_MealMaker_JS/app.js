/*  
    Owner: Joaquín Paz
	Year: 2022
	Description: JS function to set a meal and price for a restaurant, updating each morning for Today’s Special
*/

const menu = {
    _meal: '',
    _price: 0,
    get todaysSpecial() {
        if (!this._meal || !this._price) return 'Meal or price was not set correctly!'
        return `${this._meal}: $${this._price}`
    },
    set meal(mealToCheck) {
        if (typeof mealToCheck !== 'string') return console.log(`The meal has to be a string`);
        return this._meal = mealToCheck;
    },
    set price(priceToCheck) {
        if (typeof priceToCheck !== 'number') return console.log('The price has to be a number');
        return this._price = priceToCheck;
    }
}

menu.meal = 'Burrito';
menu.price = 20;


console.log(menu.todaysSpecial)