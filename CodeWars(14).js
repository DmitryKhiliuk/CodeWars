/* Square(n) Sum */

/* Complete the square sum function so that it squares each number passed into it and then sums the results together. */

const squareSum = numbers =>
  numbers.map(number => number**2).reduce((a, b) => a + b, 0)

module.exports = squareSum