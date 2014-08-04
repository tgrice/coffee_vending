class VendingController

  frenchRoast = new Coffee('French Roast', 1.00)
  colombian  = new Coffee('Colombian', 1.25)
  expensive = new Coffee('Expensive', 2.25)

  machine = new Machine()

  buttons: ->
    $('.info-screen').click(@insertQuarter($('.info-screen').val()))

  insertQuarter: (total) ->
    console.log(total)
    console.log(machine.takePayment(total, .25))
    $('.info-screen').html(machine.takePayment(total, .25))

window.VendingController = VendingController
