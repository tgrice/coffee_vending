(function() {
  describe('Machine', function() {
    it('takes a quater', function() {
      var vend;
      vend = new Machine();
      return expect(vend.takePayment(0, 25)).toBe(25);
    });
    it('takes 2 quaters', function() {
      var vend;
      vend = new Machine();
      return expect(vend.takePayment(25, 25)).toBe(50);
    });
    it('makes a purchase', function() {
      var vend;
      vend = new Machine();
      return expect(vend.makePurchase(25, 25)).toBe(0);
    });
    return it('makes a purchase and has change', function() {
      var vend;
      vend = new Machine();
      return expect(vend.makePurchase(50, 75)).toBe(25);
    });
  });

}).call(this);
