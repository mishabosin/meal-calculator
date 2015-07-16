var CalcUtil = require('./calc-util');

var Calculator = function(taxPercent, tipPercent) {
  this.taxPercent = taxPercent;
  this.tipPercent = tipPercent;
  this.diners = [];
};

Calculator.prototype.addDiner = function(diner) {
  this.diners.push(diner);
};

Calculator.prototype.getSubtotal = function() {
  var subtotal = 0;
  this.diners.forEach(function renderDinerBill(diner) {
    subtotal += diner.subtotal;
  }, this);
  return subtotal;
};

Calculator.prototype.getTip = function(subtotal) {
  return subtotal * this.tipPercent / 100;
};

Calculator.prototype.renderBill = function() {
  var subtotal = this.getSubtotal();
  var totalTip = this.getTip(subtotal);
  var tipPerDiner = totalTip / this.diners.length;

  this.diners.forEach(function renderDinerBill(diner) {
    diner.renderTotal(this.taxPercent, tipPerDiner);
    console.log('');
  }, this);

  console.log('=== Total Bill ===');
  CalcUtil.renderTotal(subtotal, this.taxPercent, totalTip);
};

module.exports = Calculator;
