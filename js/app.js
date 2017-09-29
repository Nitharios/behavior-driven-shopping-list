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
  console.log(new_shopping_list_item);
  shoppingList.addItem(new_shopping_list_item);
  content.innerHTML = "";
  content.appendChild(shoppingList.render());
}

function changeCheckedStatus(idx, checkbox) {
  console.log(idx);
  if (checkbox.checked) shoppingList.items[idx].check();
  else shoppingList.items[idx].uncheck();

  console.log(shoppingList.items[idx].is_done);
}

function removeItemButtonClicked(idx) {
  console.log(shoppingList.items[idx]);
  shoppingList.items[idx].removeItem(shoppingList.items[idx]);
  content.appendChild(shoppingList.render());
}