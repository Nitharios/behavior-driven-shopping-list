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
    let items = this.items;
    
    if (items.includes(item)) {
      let itemIndex = items.indexOf(item);
      items.splice(itemIndex, 1);
    } else if (!item) { items.splice(items.length-1, 1);
    } else return 'Invalid!';
  }
}