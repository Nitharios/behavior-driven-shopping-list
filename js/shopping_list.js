// jshint esversion:6

class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    if (item instanceof ShoppingListItem) this.items.push(item);
    else return 'Invalid!';
  }

  removeItem(item) {
    if (this.items.includes(item)) {
      let itemIndex = this.items.indexOf(item);
      this.items.splice(itemIndex, 1);
    } else return 'Invalid!';
  }
}