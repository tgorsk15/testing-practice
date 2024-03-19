import {capitalize} from './index';

// const capitalize = require('./index');

console.log(capitalize)

test('capitalize the first letter of a string', () => {
    expect(capitalize('start')).toBe('Start')
})