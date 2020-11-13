//Test array using jest
const cloneArray = require('./cloneArrays')
//Create a new array
test('properly clone array', () =>{
    const array =[1, 2, 3]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
})