var CalcUtil = require('./calc-util');

var Diner = function(name) {
  this.name = name;
  this.dishes = [];
  this.subtotal = 0;
};

Diner.prototype.addDish = function(dish) {
  this.dishes.push(dish);
  this.subtotal += dish.price;
};

Diner.prototype.getSubtotal = function() {
  return this.subtotal;
};

Diner.prototype.renderTotal = function(taxPercentage, tip) {
  console.log('- ' + this.name + '\'s Dishes -');
  this.dishes.forEach(function renderDish(dish) {
    console.log(dish.name + ': $' + dish.price.toFixed(2));
  });
  console.log('- ' + this.name + '\'s Total -');
  CalcUtil.renderTotal(this.subtotal, taxPercentage, tip);
};

module.exports = Diner;
