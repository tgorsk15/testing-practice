/* eslint-disable indent */
/* eslint-disable no-undef */
import { capitalize, 
    reverseString, 
    calculatorController, 
    caesarCipher,
    analyzeArray 
} from './index';



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


test('encrypt a string using the caesarCipher', () => {
    expect(caesarCipher('zzzz')).toBe('CCCC');
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz')).toBe('DEFGHIJKLMNOPQRSTUVWXYZABC')
})

test('return the average value, the min and max value, and the length of an array of numbers', () => {
    expect(analyzeArray([2,5,4,7,8,9])).toEqual(
        {
            average: 6,
            min: 2,
            max: 9,
            length: 6,
        }
    );
});
