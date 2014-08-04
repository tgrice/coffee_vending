(function() {
  var Machine;

  Machine = (function() {
    function Machine() {}

    Machine.prototype.takePayment = function(ttl, amt) {
      return ttl = amt + ttl;
    };

    Machine.prototype.makePurchase = function(cost, payment) {
      return payment - cost;
    };

    return Machine;

  })();

  window.Machine = Machine;

}).call(this);
