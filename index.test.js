import { capitalize, reverseString, calculatorController } from './index';

console.log(capitalize)

// const capitalize = require('./index.js');

// console.log(capitalize)
const calcRun = calculatorController()

test('capitalize the first letter of a string', () => {
    expect(capitalize('start')).toBe('Start');
})

test('reverse the order of a string', () => {
    expect(reverseString('end')).toBe('dne');
    expect(reverseString('did not')).toBe('ton did');
})

test('perform basic calculator functions', () => {
    expect(calcRun.add(3, 2)).toBe(5);
    expect(calcRun.subtract(42, 50)).toBe(-8);
    expect(calcRun.multiply(3, 4)).toBe(12);
    expect(calcRun.divide(36, 6)).toBe(6);
});
