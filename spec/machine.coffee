describe 'Machine', ->

  it 'takes a quater', ->
    vend = new Machine()
    expect(vend.takePayment(0,25)).toBe(25)

  it 'takes 2 quaters', ->
    vend = new Machine()
    expect(vend.takePayment(25,25)).toBe(50)

  it 'makes a purchase', ->
    vend = new Machine()
    expect(vend.makePurchase(25,25)).toBe(0)

  it 'makes a purchase and has change', ->
    vend = new Machine()
    expect(vend.makePurchase(50,75)).toBe(25)
