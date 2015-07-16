var Calculator = require('./resources/calculator');
var Diner = require('./resources/diner');
var restaurant = require('./resources/restaurant');
var menu = restaurant.menu;
//restaurant.showMenu();

var TAX_PERCENT = '10';
var TIP_PERCENT = '20';

var people = [
  {
    name: 'Alice',
    meal: [menu.coffee, menu.bagel]
  }, {
    name: 'Bob',
    meal: [menu.coffee, menu.eggs]
  }, {
    name: 'Clare',
    meal: [menu.coffee]
  }
];

var mealCalc = new Calculator(TAX_PERCENT, TIP_PERCENT);

people.forEach(function makeDiners(person) {
  var diner = new Diner(person.name);
  person.meal.forEach(function feedDiner(dish) {
    diner.addDish(dish);
  });
  mealCalc.addDiner(diner);
});

mealCalc.renderBill();
