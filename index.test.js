import { capitalize, reverseString } from './index';

console.log(capitalize)

// const capitalize = require('./index.js');

// console.log(capitalize)


test('capitalize the first letter of a string', () => {
    expect(capitalize('start')).toBe('Start');
})

test('reverse the order of a string', () => {
    expect(reverseString('end')).toBe('dne');
    expect(reverseString('did not')).toBe('ton did');
})