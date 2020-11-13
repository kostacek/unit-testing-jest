//Runs test by testing the sum of two digits
const sum = require('./sum')

test('properly adds two numbers', () => {
  expect(sum(1, 2)
  ).toBe(3)// expect takes an object and expects it to do something
})