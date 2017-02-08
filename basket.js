var basket = {
  items:[],
  loyaltyCard: true,

  addItem: function(item){
    this.items.push(item);
  },
  deleteItem: function(){
    this.items.pop();
  }

}

module.exports = basket;