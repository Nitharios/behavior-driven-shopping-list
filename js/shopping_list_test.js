// jshint esversion:6
const expect = chai.expect;
const should = chai.should();
let item;

describe('ShoppingListItem', function() {
  before(function() {
    item = new ShoppingListItem('Avocado', 'Must be eaten immediately');
  });
  it('should be a function', function() {
    expect(ShoppingListItem).to.be.a('function'); 
  });
  it('should have property "name"', function() {
    expect(item).to.have.property('name'); 
  });
  it('should have property "description"', function() {
    expect(item).to.have.property('description'); 
  });
  it('should have property "is_done"', function() {
    expect(item).to.have.property('is_done'); 
  });
  it('should have a constructor method', function() {
    expect(item).to.be.an.instanceof(ShoppingListItem);
  });
describe('check method', function() {
  before(function() {
    item = new ShoppingListItem('Avocado', 'Must be eaten immediately');
  });
  it('should have a method "check"', function() {
    expect(item.check).to.be.a('function');
  });
  it('should set is_done to true', function() {
    expect(item.check()).to.be.true;
  });
});

  describe('uncheck method', function() {
    before(function() {
      item = new ShoppingListItem('Avocado', 'Must be eaten immediately');
    });
    it('should have a method "uncheck"', function() {
      expect(item.uncheck).to.be.a('function');
    });
    it('should set is_done to false', function() {
      expect(item.uncheck()).to.be.false;
    });
  });

  describe('render method', function() {
    before(function() {
      item = new ShoppingListItem('Avocado', 'Must be eaten immediately');
    });
    it('should be a method "render"', function() {
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
});

describe('ShoppingList', function() {
  before(function() {
    list = new ShoppingList();
  });
  it('should be a class', function() {
    expect(ShoppingList).to.be.a('function');
  });
  it('should have property "items"', function() {
    expect(list).to.have.property('items');
  });
  it('"items" should be an empty array', function() {
    expect(list.items).to.be.an('array').and.empty;
  });


});

