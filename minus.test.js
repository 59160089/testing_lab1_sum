const minus = require ('./minus')

// 2 - 2 เท่ากับ 0
test('2 - 2 เท่ากับ 0' , () =>{
    expect(minus(2,2)).toBe(0)
})

// 10 - 5 เท่ากับ 5
test('10 - 5 เท่ากับ 5' , () => {
    expect(minus(10,5)).toBe(5)
})

// 5 - 10 เท่ากับ -5 
test('5 - 10 เท่ากับ -5', () => {
    expect(minus(5 , 10)).toBe(-5)
})


// 100 - 10 เท่ากับ 90
test('100 - 10 เท่ากับ 90', () => {
    expect(minus(100 , 10 )).toBe(90)
})


// 10 - 5 เท่ากับ 5 
test('10 - 5 เท่ากับ 5', () => {
    expect(minus(10 , minus(10,5) )).toBe(5)
})