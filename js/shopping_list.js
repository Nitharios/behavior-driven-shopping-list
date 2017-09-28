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
    let items = this.items;
    let finalItemsRender = "";
    
    for (let i = 0; i < items.length; i++) {
      finalItemsRender += items[i].render();
    }
    console.log(finalItemsRender);
    return `<ul>${finalItemsRender}</ul>`;
  }
}