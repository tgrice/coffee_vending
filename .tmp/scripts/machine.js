(function() {
  var Machine;

  Machine = (function() {
    function Machine() {}

    Machine.prototype.takePayment = function(total, amt) {
      return total = amt + total;
    };

    Machine.prototype.makePurchase = function(cost, payment) {
      return payment - cost;
    };

    return Machine;

  })();

  window.Machine = Machine;

}).call(this);
