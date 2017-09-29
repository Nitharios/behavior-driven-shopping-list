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
    // let item = document.createElement('input');
    // item.type = "checkbox";
    // item.value = `${this.name}` + ' ' + `${this.description}`;
    // item.addEventListener("onchange", changeCheckedStatus(idx, item));

    // let checkboxValue = document.getElementsByClassName("").value;
    // checkboxValue.addEventListener("onchange", changeCheckedStatus(idx, checkbox));
    // let button = document.createElement('button');
    // button.value = 'x';
    // button.addEventListener("click", removeItemButtonClicked(idx));

    return `<input type='checkbox' class='completed_${this.is_done}' value="${this.name}">${this.name} ${this.description}<br>`;
  }
}