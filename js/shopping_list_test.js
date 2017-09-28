// jshint esversion:6
const expect = chai.expect;
const should = chai.should();
let item;

beforeEach(function() {
  item = new ShoppingListItem('Avocado', 'Must be eaten immediately');
});

describe('itemItem', function() {
  it('should be a function', function() {
    expect(ShoppingListItem).to.be.a('function'); 
  });
  it('should have a property "name"', function() {
    expect(item).to.have.property('name'); 
  });
  it('should have a property "description"', function() {
    expect(item).to.have.property('description'); 
  });
  it('should have a property "is_done"', function() {
    expect(item).to.have.property('is_done'); 
  });
  it('should have a constructor method', function() {
    expect(item).to.be.an.instanceof(ShoppingListItem);
  });
});

describe('check', function() {
  it('should be a method', function() {
    expect(item.check).to.be.a('function');
  });
  it('should set is_done to true', function() {
    expect(item.check()).to.be.true;
  });
});

describe('uncheck', function() {
  it('should be a method', function() {
    expect(item.uncheck).to.be.a('function');
  });
  it('should set is_done to false', function() {
    expect(item.uncheck()).to.be.false;
  });
});

describe('render', function() {
  it('should be a method', function() {
    expect(item.render).to.be.a('function');
  });
  it('should return a string', function() {
    expect(item.render()).to.be.a('string');
  });
  it('should use the correct references', function() {
    expect(item.render()).to.include('false');
    expect(item.render()).to.include('Avocado');
    expect(item.render()).to.include('Must be eaten immediately');
  });
});