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
    let div = document.createElement('div');
    let item = `{${this.name}, ${this.description}}`;
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.value = `${this.name}`;
    // checkbox.addEventListener("onchange", function() {
    //   changeCheckedStatus(shoppingList.items.indexOf(item), checkbox);
    // });
    div.appendChild(checkbox);
    div.innerHTML += `${this.name}` + ' ' + `${this.description}`;
    return div;

    // let checkboxValue = document.getElementsByClassName("").value;
    // checkboxValue.addEventListener("onchange", changeCheckedStatus(idx, checkbox));
    // let button = document.createElement('button');
    // button.value = 'x';
    // button.addEventListener("click", removeItemButtonClicked(idx));

    // return `<input type='checkbox' class='completed_${this.is_done}' value="${this.name}">${this.name} ${this.description}<br>`;
  }
}