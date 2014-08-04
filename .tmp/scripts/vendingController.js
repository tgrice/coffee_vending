(function() {
  var VendingController;

  VendingController = (function() {
    var colombian, expensive, frenchRoast, machine;

    function VendingController() {}

    frenchRoast = new Coffee('French Roast', 1.00);

    colombian = new Coffee('Colombian', 1.25);

    expensive = new Coffee('Expensive', 2.25);

    machine = new Machine();

    VendingController.prototype.buttons = function() {
      return $('.info-screen').click(this.insertQuarter());
    };

    VendingController.prototype.insertQuarter = function(total) {
      console.log(total);
      console.log(machine.takePayment(total, .25));
      return $('.info-screen').html(machine.takePayment(total, .25));
    };

    return VendingController;

  })();

  window.VendingController = VendingController;

}).call(this);
