// jshint esversion:6
class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;

    this.is_done = false;
  }

  check() {
    this.is_done = true;
    return this.is_done;
  }

  uncheck() {
    this.is_done = false;
    return this.is_done;
  }

  render() {
    let index = shoppingList.items.findIndex(obj => obj.name === this.name);
    let div = document.createElement('div');
    let checkbox = document.createElement('input');
    let button = document.createElement('button');

    div.innerHTML += this.name + ' ' + this.description;
    checkbox.type = "checkbox";
    checkbox.value = this.name;
    button.innerHTML = 'x';

    checkbox.addEventListener("change", function() {
      changeCheckedStatus(index, checkbox);
    });
    button.addEventListener("click", function() {
      removeItemButtonClicked(index);
    });
    
    div.appendChild(checkbox);
    div.appendChild(button);

    return div;

    // let checkboxValue = document.getElementsByClassName("").value;
    // checkboxValue.addEventListener("onchange", changeCheckedStatus(idx, checkbox));
    // let button = document.createElement('button');
    // button.value = 'x';
    // button.addEventListener("click", removeItemButtonClicked(idx));

    // return `<input type='checkbox' class='completed_${this.is_done}' value="${this.name}">${this.name} ${this.description}<br>`;
  }
}