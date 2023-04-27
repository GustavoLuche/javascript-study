// Numbers

// An integer is a wholw number.
let myNumber = 23

// A number with a decimal point is a float which references the "floating point"
let myFloat = 23.0

let myString = "23"

console.log(myNumber)
console.log(myFloat)
console.log(myString)

console.log(myNumber === myFloat)
console.log(myNumber === myString)

console.log(myString + 3)
console.log(Number(myString) + 3)
console.log(Number(myString) === myNumber)
console.log(Number("Gustavo"))
console.log(Number(undefined))
console.log(Number(true))
console.log(Number(false))

// Numbers Methods
// The Number.isInteger() method determines whether the passed value is an integer.

// The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.

// The toFixed() method formats a number according to how many decimal points you provide as the parameter.

// The Number.parseInt() method parses a string argument and returns an integer

// The toString() method returns a string representing the number.

myFloat = 23.01
myString = "23.123abc"

console.log(Number.isInteger(myNumber))
console.log(Number.parseFloat(myFloat))
console.log(Number.parseFloat(myString))
console.log(Number.parseFloat(myString).toFixed(2))
console.log(Number.parseInt(myFloat).toFixed(2))
console.log(Number.parseInt(myFloat))
console.log(myFloat.toString())
console.log(typeof myFloat.toString())

// Chaining = Using several methods chained together

console.log(Number.parseFloat("4.237abc").toFixed(2).toString())

// NaN is an acronym for not a Number
// The Number.isNaN() method determines whether the passed value is NaN AND its type is Number.
// The global isNaN() function determines whether a value is NaN or not.

console.log(Number("Gustavo"))
console.log(Number.isNaN("Gustavo"))
console.log(isNaN("Gustavo"))
