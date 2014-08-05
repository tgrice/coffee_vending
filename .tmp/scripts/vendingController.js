(function() {
  var VendingController,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  VendingController = (function() {
    var coffee, machine;

    function VendingController() {
      this.resetPayment = __bind(this.resetPayment, this);
      this.createChange = __bind(this.createChange, this);
      this.removeItemFromList = __bind(this.removeItemFromList, this);
      this.makePurchase = __bind(this.makePurchase, this);
      this.checkPayment = __bind(this.checkPayment, this);
      this.expensiveFunction = __bind(this.expensiveFunction, this);
      this.columbian = __bind(this.columbian, this);
      this.frenchRoast = __bind(this.frenchRoast, this);
      this.insertQuarter = __bind(this.insertQuarter, this);
    }

    machine = new Machine();

    coffee = [9, 9, 9];

    $('#coffee-0').prop('disabled', false);

    $('#coffee-1').prop('disabled', false);

    $('#coffee-2').prop('disabled', false);

    VendingController.prototype.isValid = function(cost) {
      var payment;
      payment = $('.info-screen').val();
      return cost <= +payment;
    };

    VendingController.prototype.buttons = function() {
      $('#centButton').click(this.insertQuarter);
      $('#resetButton').click(this.resetPayment);
      $('#coffee-0').click(this.frenchRoast);
      $('#coffee-1').click(this.columbian);
      return $('#coffee-2').click(this.expensiveFunction);
    };

    VendingController.prototype.insertQuarter = function() {
      var amount, newTotal;
      amount = $('.info-screen').val();
      newTotal = machine.takePayment(+amount, .25);
      $('.item-return').html('items');
      $('.change').html('change');
      return this.updateScreen(newTotal);
    };

    VendingController.prototype.frenchRoast = function() {
      return this.checkPayment(0, 1, "Ain't nobody got time for dat!!!");
    };

    VendingController.prototype.columbian = function() {
      return this.checkPayment(1, 1.25, "Bro...do you even lift?");
    };

    VendingController.prototype.expensiveFunction = function() {
      return this.checkPayment(2, 2.25, "NOPE! It's just Chuck Testa!!");
    };

    VendingController.prototype.checkPayment = function(itemNum, amt, msg) {
      if (this.isValid(amt)) {
        return this.makePurchase(itemNum, amt);
      } else {
        $('.item-return').html(msg);
        return $('.change').html('change');
      }
    };

    VendingController.prototype.makePurchase = function(itemNum, cost) {
      this.removeItemFromList(itemNum);
      this.createChange(cost);
      this.resetPayment();
      return this.updateItem(itemNum);
    };

    VendingController.prototype.removeItemFromList = function(int) {
      var count;
      count = coffee[int];
      if (count === 0) {
        return $('#coffee-' + int).prop('disabled', true);
      } else {
        return coffee[int] = count - 1;
      }
    };

    VendingController.prototype.createChange = function(cost) {
      var change, payment;
      payment = $('.info-screen').val();
      change = machine.makePurchase(cost, +payment);
      return $('.change').html(change);
    };

    VendingController.prototype.resetPayment = function() {
      this.updateScreen('0.00');
      return $('.item-return').html('items');
    };

    VendingController.prototype.updateItem = function(item) {
      return $('.item-return').html($('#coffee-' + item).html());
    };

    VendingController.prototype.updateScreen = function(amt) {
      $('.info-screen').val(+amt);
      return $('.info-screen').html(amt);
    };

    return VendingController;

  })();

  window.VendingController = VendingController;

}).call(this);
