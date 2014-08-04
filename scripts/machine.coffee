class Machine

  takePayment: (ttl, amt) ->
    ttl = amt + ttl

  makePurchase: (cost, payment) ->
    payment - cost

window.Machine = Machine
