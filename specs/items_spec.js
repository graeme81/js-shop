var assert = require('assert');
var item = require('./items');

describe('Item', function(){

it('should have name', function(){
  var item1 = new item("orange",1);
  assert.equal("orange",item1.name);
})

it('should have price', function(){
  var item1 = new item("orange",1);
  assert.equal(1,item1.price);
})


})