/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
/* eslint-disable comma-spacing */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable import/prefer-default-export */
export function capitalize(string) {
    const newString = string.charAt(0).toUpperCase() + string.slice(1)
    return newString
}

export function reverseString(string) {
    const splitString = string.split("").reverse();
    const newString = splitString.join("");
    return newString
}

export const calculatorController = function calculator() {
    function add(a,b) {
        return a + b
    };

    function subtract(a, b) {
        return a - b
    };

    function multiply(a,b) {
        return a * b
    };

    function divide(a,b) {
        return a / b
    }

    return { add, subtract, multiply, divide }
}


// Caesar Cipher algorithm
function convertCharacter(character, alphabet) {
    const key = 3;
    let alphabetIndex = alphabet.indexOf(character)

    for (let i = 0; i < key; i++) {
        alphabetIndex += 1;
        if (!alphabet[alphabetIndex]) {
            alphabetIndex = 0;
        }
    }
    // console.log(alphabetIndex);
    return alphabet[alphabetIndex]
}

function encryptString(string, alphabet) {
    let encryptedString = '';
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) !== ' ') {
            const newCharacter = convertCharacter(string.charAt(i), alphabet)
            encryptedString += newCharacter
        } else {
            encryptedString += ' '
        }
    }
    // console.log(encryptedString);
    return encryptedString
}

export function caesarCipher(string) {
    const prepString = string.toLowerCase();
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']  // need to make strings
    const result = encryptString(prepString, alphabet)
    return result.toUpperCase()
}

// analyze array function
export function analyzeArray(numberArray) {
    const arrayObj = {};
    
    const average1 = () => {
        let sum = 0;
        numberArray.forEach(num => {
            sum += num
        });
        arrayObj.average = Math.round(sum / (numberArray.length));
    }
    average1();

    // get min
    const arrayMin = numberArray.reduce((a,b) => {
        return (a < b ? a : b)
    })
    arrayObj.min = arrayMin;

    // get max
    const arrayMax = numberArray.reduce((a,b) => {
        return (a > b ? a : b)
    })
    arrayObj.max = arrayMax

    arrayObj.length = numberArray.length
    console.log(arrayObj)
    
    return arrayObj
}
