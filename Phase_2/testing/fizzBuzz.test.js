const fizzBuzz = require('./fizzBuzz');

describe('fizzBuzz', () => {
  it('returns Fizz when number is divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
  });
  it('returns Buzz when number is divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
  })
  it('returns FizzBuzz when number is both divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  })
  it('returns number when number is not divisible', () => {
    expect(fizzBuzz(8)).toBe(8)
  })
})