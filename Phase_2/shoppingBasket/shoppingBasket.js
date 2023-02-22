const Candy = require('./Candy');

class ShoppingBasket {
  constructor() {
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
  }
  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getPrice(), 0);
  }
}


// const candy = new Candy('Mars', 4.99);
// console.log(candy.getName()); // Output: Mars
// console.log(candy.getPrice()); // Output: 4.99

// const basket = new ShoppingBasket();
// console.log(basket.getTotalPrice()); // Output: 0

// basket.addItem(candy);
// console.log(basket.getTotalPrice()); // Output: 4.99

// basket.addItem(new Candy('Skittle', 3.99));
// basket.addItem(new Candy('Skittle', 3.99));
// console.log(basket.getTotalPrice()); // Output: 12.97

module.exports = ShoppingBasket;