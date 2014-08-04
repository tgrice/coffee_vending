(function() {
  var MachineStock;

  MachineStock = (function() {
    function MachineStock() {}

    MachineStock.prototype.purchaseFrenchRoast = function() {
      return true;
    };

    return MachineStock;

  })();

  window.MachineStock = MachineStock;

}).call(this);
