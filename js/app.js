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
  content.innerHTML = "";
  content.appendChild(shoppingList.render());

  console.log(shoppingList.items);
}

function changeCheckedStatus(idx, checkbox) {
  if (checkbox.checked) shoppingList.items[idx].check();
  else shoppingList.items[idx].uncheck();

  console.log(shoppingList.items[idx].is_done);
}

function removeItemButtonClicked(idx) {
  let item = shoppingList.items[idx];

  shoppingList.removeItem(item);
  content.innerHTML = "";
  content.appendChild(shoppingList.render());

  console.log(shoppingList.items);
}