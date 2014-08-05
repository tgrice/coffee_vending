class VendingController

  machine = new Machine()
  coffee = [9,9,9]

  $('#coffee-0').prop('disabled', false)
  $('#coffee-1').prop('disabled', false)
  $('#coffee-2').prop('disabled', false)

  isValid: (cost) ->
    payment = $('.info-screen').val()
    cost <= +payment

  buttons: ->
    $('#centButton').click(@insertQuarter)
    $('#resetButton').click(@resetPayment)
    $('#coffee-0').click(@frenchRoast)
    $('#coffee-1').click(@columbian)
    $('#coffee-2').click(@expensiveFunction)

  insertQuarter: =>
    amount = $('.info-screen').val()
    newTotal = machine.takePayment(+amount, .25)
    $('.item-return').html('items')
    $('.change').html('change')
    @updateScreen(newTotal)

  frenchRoast: =>
    @checkPayment(0, 1, "Ain't nobody got time for dat!!!")

  columbian: =>
    @checkPayment(1, 1.25, "Bro...do you even lift?")

  expensiveFunction: =>
    @checkPayment(2, 2.25, "NOPE! It's just Chuck Testa!!")

  checkPayment: (itemNum, amt, msg) =>
    if @isValid(amt)
      @makePurchase(itemNum, amt)
    else
      $('.item-return').html(msg)
      $('.change').html('change')

  makePurchase: (itemNum, cost) =>
    @removeItemFromList(itemNum)
    @createChange(cost)
    @resetPayment()
    @updateItem(itemNum)

  removeItemFromList: (int) =>
    count = coffee[int]
    if count is 0
      $('#coffee-' + int).prop('disabled', true)
    else
      coffee[int] = count - 1

  createChange: (cost) =>
    payment = $('.info-screen').val()
    change = machine.makePurchase(cost, +payment)
    $('.change').html(change)

  resetPayment: =>
    @updateScreen('0.00')
    $('.item-return').html('items')

  updateItem: (item) ->
    $('.item-return').html($('#coffee-' + item).html())

  updateScreen: (amt) ->
    $('.info-screen').val(+amt)
    $('.info-screen').html(amt)

window.VendingController = VendingController
