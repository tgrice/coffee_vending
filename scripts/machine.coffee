class Machine

  takePayment: (total, amt) ->
    total = amt + total

  makePurchase: (cost, payment) ->
    payment - cost

window.Machine = Machine
