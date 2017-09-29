// jshint esversion:6
const sanity = "You're not crazy!";
console.log(sanity);

const content = document.getElementById("content");
const shoppingList = new ShoppingList();
content.innerHTML = shoppingList.render();


function add_to_shopping_list() {
  let nameInput = document.getElementById("name");
  let descriptionInput = document.getElementById("description");
  let name = nameInput.value;
  let description = descriptionInput.value;
  
  let new_shopping_list_item = new ShoppingListItem(name, description);
  
  shoppingList.addItem(new_shopping_list_item);
  content.innerHTML = shoppingList.render();
}

function changeCheckedStatus(idx, checkbox) {
  if (checkbox.checked) shoppingList[idx].check();
  else shoppingList[idx].uncheck();

  content.innerHTML = shoppingList.render();
}

function removeItemButtonClicked(idx) {
  shoppingList.items[idx].removeItem();
  content.innerHTML = shoppingList.render();
}