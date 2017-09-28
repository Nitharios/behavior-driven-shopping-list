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
describe('check()', function() {
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

  describe('uncheck()', function() {
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

  describe('render()', function() {
    before(function() {
      item = new ShoppingListItem('Avocado', 'Must be eaten immediately');
    });
    it('should have a method "render"', function() {
      expect(item.render).to.be.a('function');
    });
    it('should return a string', function() {
      expect(item.render()).to.be.a('string');
    });
    it('should use the correct tags', function() {
      expect(item.render()).to.include('<li');
      expect(item.render()).to.include('</li>');
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

    describe('addItem()', function() {
      before(function() {
        list = new ShoppingList();
        bacon = new ShoppingListItem('Bacon', 'Always delicious');
      });
      it('should have a method "addItem"', function() {
        expect(list.addItem).to.be.a('function');
      });
      it('should add valid items to your shopping cart', function() {
        list.addItem(bacon);
        expect(list.items).to.include(bacon);
        expect(list.addItem('Lettuce')).to.be.a('string');
        expect(list.addItem(null)).to.be.a('string');
      });
    });

    describe('removeItem()', function() {
      before(function() {
        list = new ShoppingList();
        bacon = new ShoppingListItem('Bacon', 'Always delicious');
        eggs = new ShoppingListItem('Eggs', 'Goes great with Bacon');
        list.addItem(bacon);
        list.addItem(eggs);
      });
      it('should have a method "removeItem"', function() {
        expect(list.removeItem).to.be.a('function');
      });
      it('should remove items that are in your shopping cart', function() {
        list.removeItem(bacon);
        expect(list.items).to.not.include(bacon);
        list.removeItem();
        expect(list.items).to.be.empty;
        expect(list.removeItem('Lettuce')).to.be.a('string');
        expect(list.removeItem(null)).to.be.a('string');
      });
    });

    describe('render()', function() {
      before (function() {
      list = new ShoppingList();
      bacon = new ShoppingListItem('Bacon', 'Always delicious');
      eggs = new ShoppingListItem('Eggs', 'Goes great with bacon');
      list.addItem(bacon);
      list.addItem(eggs);
    });
      it('should have a method "render"', function() {
        expect(list.render).to.be.a('function');
      });
      it('should return a string', function() {
        expect(list.render()).to.be.a('string');
      });
      it('should use the correct tags', function() {
        expect(list.render()).to.include('<ul>');
        expect(list.render()).to.include('</ul>');
      });
      it('should use the correct references,', function() {
        expect(list.render()).to.include(bacon.render());
        expect(list.render()).to.include(bacon.render());
      });
    });
});

