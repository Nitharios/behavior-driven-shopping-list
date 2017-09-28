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
    let checkboxValue = document.getElementById('').value;
    checkboxValue.addEventListener("onchange", changeCheckedStatus(idx, checkbox));

    return `<li class='completed_${this.is_done}'><span>${this.name}</span> <span>${this.description}</span></li>`;
  }
}