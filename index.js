/* eslint-disable semi */
/* eslint-disable import/prefer-default-export */
export function capitalize(string) {
    const newString = string.charAt(0).toUpperCase() + string.slice(1)
    return newString
}

export function reverseString(string) {
    const splitString = string.split("").reverse()
    const newString = splitString.join("")
    return newString
}