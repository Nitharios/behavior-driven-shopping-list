// jshint esversion:6
const sanity = "You're not crazy!";
console.log(sanity);

let content = document.getElementById("content");
const shoppingList = new ShoppingList();
shoppingList.render();


function add_to_shopping_list() {
  let nameInput = document.getElementById("name");
  let descriptionInput = document.getElementById("description");
  let name = nameInput.value;
  let description = descriptionInput.value;
  
  let new_shopping_list_item = new ShoppingListItem(name, description);
  
  shoppingList.addItem(new_shopping_list_item);
  content.appendChild(shoppingList.render());
  // content.innerHTML = shoppingList.render();
}

function changeCheckedStatus(idx, checkbox) {
  if (checkbox.checked) shoppingList[idx].check();
  else shoppingList[idx].uncheck();
}

function removeItemButtonClicked(idx) {
  shoppingList.items[idx].removeItem();
  content.innerHTML = shoppingList.render();
}