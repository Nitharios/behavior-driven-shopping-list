// jshint esversion:6
const expect = chai.expect;
const should = chai.should();
let shoppingList;

beforeEach(function() {
  shoppingList = new ShoppingListItem('Food', 'stuff');
});

describe('shoppingListItem', function() {
  it('should be a function', function() {
    expect(ShoppingListItem).to.be.a('function'); 
  });
  it('should have a property "name"', function() {
    expect(shoppingList).to.have.property('name'); 
  });
  it('should have a property "description"', function() {
    expect(shoppingList).to.have.property('description'); 
  });
  it('should have a property "is_done"', function() {
    expect(shoppingList).to.have.property('is_done'); 
  });
  it('should have a constructor method', function() {
    expect(shoppingList).to.be.an.instanceof(ShoppingListItem);
  });
});

describe('check', function() {
  it('should be a method', function() {
    expect(shoppingList.check).to.be.a('function');
  });
  it('should set is_done to true', function() {
    expect(shoppingList.check()).to.be.true;
  });
});