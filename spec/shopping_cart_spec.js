var ShoppingList = require('../shopping_list')
var Item = require('../item')

describe('Shopping List', function(){
  var list = new ShoppingList()

  it('lists contents is instantiated as empty', function(){
    expect(list.contents).toEqual([]);
  })

  it('has a size', function(){
    expect(list.budget).toEqual(undefined);
  })
})

describe('#addItem', function(){
  var list;
  beforeEach(function(){
    list = new ShoppingList(20);
    bananas = new Item("bananas", 8)
    yogurt = new Item("yogurt", 7)
    bread = new Item("bread", 2)
    cheese = new Item("cheese", 15)
  });

  it('takes an argument for the item', function(){
    list.addItem(bananas);
    expect(list.contents).toEqual([bananas]);
  });

  it('correctly handles multiple items', function(){
    list.addItem(yogurt);
    list.addItem(bread);
    expect(list.contents).toEqual([yogurt, bread]);
  });

  it('does not allow shopper to add items beyond the budget', function(){
    list.addItem(yogurt);
    expect(list.addItem(cheese)).toEqual("sorry, you can't have that");
    expect(list.contents).toEqual([yogurt]);
  })
});

describe('#total', function(){
  var list;
  beforeEach(function(){
    list = new ShoppingList(20);
    bananas = new Item("bananas", 8)
    yogurt = new Item("yogurt", 7)
    bread = new Item("bread", 2)
    cheese = new Item("cheese", 15)
  });

  it('gives the total price of cart contents', function(){
    list.addItem(bananas);
    expect(list.total()).toEqual(8);
  });

  it('works for multiple items', function(){
    list.addItem(yogurt);
    list.addItem(bread);
    list.addItem(bananas);
    expect(list.total()).toEqual(17);
  })

})

describe('#swap', function(){
  var list;
  beforeEach(function(){
    list = new ShoppingList(20);
    bananas = new Item("bananas", 8)
    yogurt = new Item("yogurt", 7)
    bread = new Item("bread", 2)
    cheese = new Item("cheese", 15)
  });

  it('switches one item for another', function(){
    list.addItem(bananas)
    list.addItem(bread)
    expect(list.contents).toEqual([bananas, bread]);
    list.swap(bananas, cheese);
    expect(list.contents).toEqual([cheese, bread]);
  });
})
//
