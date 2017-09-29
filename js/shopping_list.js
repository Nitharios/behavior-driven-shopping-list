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
    } else if (!item && items.length > 0) { items.splice(items.length-1, 1);
    } else return 'Invalid!';
  }

  render() {
    let list = document.createElement('ul');
    let items = this.items;

    for (let i = 0; i < items.length; i++) {
      console.log(items[i]);
      console.log(list);
      list.appendChild(items[i].render());
    }

    return list;
  }
}