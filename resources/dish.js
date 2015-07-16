var Dish = function (name, price) {
  this.name = name;
  this.price = price;
};

Dish.prototype.name = function() {
  return this.name;
};

Dish.prototype.price = function() {
  return this.price;
};

module.exports = Dish;
