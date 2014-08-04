(function() {
  var Coffee;

  Coffee = (function() {
    function Coffee(name, cost) {
      this.name = name;
      this.cost = cost;
      this.amount = 10;
    }

    Coffee.prototype.purchased = function() {
      return this.amount = this.amount - 1;
    };

    return Coffee;

  })();

  window.Coffee = Coffee;

}).call(this);
