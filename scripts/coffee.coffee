class Coffee

  constructor: (name, cost) ->
    @name = name 
    @cost = cost
    @amount = 10

  purchased: ->
    @amount = @amount - 1

window.Coffee = Coffee
