function getTotalSummary(subtotal, taxPercent, tip) {
  // TODO: format these to 2 decimal points
  var tax = subtotal * taxPercent / 100;

  return {
    subtotal: subtotal,
    tax: tax,
    tip: tip,
    total: subtotal + tax + tip
  };
}

function renderTotal(subtotal, taxPercent, tip) {
  var summary = getTotalSummary(subtotal, taxPercent, tip);
  renderTotalSummary(summary);
}

function renderTotalSummary(summary) {
  console.log('Subtotal ... $' + summary.subtotal.toFixed(2));
  console.log('Tax ........ $' + summary.tax.toFixed(2));
  console.log('Tip ........ $' + summary.tip.toFixed(2));
  console.log('Total ...... $' + summary.total.toFixed(2));
}

exports.renderTotal = renderTotal;
