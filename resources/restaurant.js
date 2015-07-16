var Dish = require('./dish');

var menu = {
  coffee: new Dish('Coffee', 2.00),
  bagel: new Dish('Bagel', 5.00),
  eggs: new Dish('Eggs', 10.00)
};

function showMenu() {
  console.log('Menu');
  console.log('----');
  Object.keys(menu).forEach(function(item) {
    console.log(menu[item].name + ': ' + menu[item].price);
  });
}

exports.showMenu = showMenu;
exports.menu = menu;
