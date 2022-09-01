class Cart {
  items = [];
  wholeCount = 0;
  wholeCost = 0;
  addItem(item, count) {
    this.items.push({item: item, count: count});
    this.wholeCount += count;
    this.wholeCost += item.price * count;
  }
  getItems() {
    return this.items;
  }
  getCost() {
    return this.wholeCost;
  }
  getCount() {
    return this.wholeCount;
  }
}

const cart = new Cart();
cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);
console.log(cart.getCount()); // 7
console.log(cart.getItems().length); // 2
console.log(cart.getCost()); // 35

console.log(cart.getItems());
