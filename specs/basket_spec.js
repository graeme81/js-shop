var assert = require('assert');
var item = require('./items');
var basket = require('./basket');

describe('Basket', function(){

  it('should start empty', function(){
    assert.equal(0,basket.items.length);
  })

  it('can have an item added',function(){
    var item1 = new item("socks",4);
    basket.addItem(item1);
    assert.equal(1,basket.items.length);
  })

  it('can delete item', function(){
    var item1 = new item("socks",4);
    basket.addItem(item1);
    basket.deleteItem();
    assert.equal(1,basket.items.length);
  })

})