// jshint esversion:6
const sanity = "You're sane!";
console.log(sanity);

const content = document.getElementById("content");
const shoppingList = new ShoppingList();
shoppingList.render();

function add_to_shopping_list() {
  let nameInput = document.getElementById("name");
  let descriptionInput = document.getElementById("description");
  let name = nameInput.value;
  let description = descriptionInput.value;
  
  let new_shopping_list_item = new ShoppingListItem(name, description);
  
  shoppingList.addItem(new_shopping_list_item);
}