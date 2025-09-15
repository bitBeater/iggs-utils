"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomDate = exports.getRandomString = exports.getRandomChar = exports.getRandomSign = exports.getRandomBool = exports.getRandomInt = exports.getRandom = void 0;
const collectionOperations_1 = require("./collection/collectionOperations");
const time_1 = require("./time");
/**
 * Returns a random floating-point number between min and max (inclusive).
 * @param min The minimum value.
 * @param max The maximum value.
 * @returns A random floating-point number between min and max.
 */
function getRandom(min = Number.MIN_VALUE, max = Number.MAX_VALUE) {
    return Math.random() * (max - min) + min;
}
exports.getRandom = getRandom;
/**
 * Returns a random integer between min and max (inclusive).
 * @param min The minimum value.
 * @param max The maximum value.
 * @returns A random integer between min and max.
 */
function getRandomInt(min, max) {
    return Math.floor(getRandom(min, max));
}
exports.getRandomInt = getRandomInt;
/**
* Returns a random boolean value.
* @param trueProbability A number between 0 and 1 representing the probability of returning true. Default is 0.5.
* @returns A random boolean value.
*/
function getRandomBool(trueProbability = 0.5) {
    return Math.random() < trueProbability;
}
exports.getRandomBool = getRandomBool;
/**
 * Returns either 1 or -1, with equal probability.
 * @returns Either 1 or -1.
 */
function getRandomSign(positiveProbability = 0.5) {
    return getRandomBool(positiveProbability) ? 1 : -1;
}
exports.getRandomSign = getRandomSign;
/**]
 * Returns a random character from the given string of characters.
 * @param chars A string containing the characters to choose from. Default is alphanumeric characters.
 * @returns A random character from the given string.
 */
function getRandomChar(chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
    return (0, collectionOperations_1.takeRandomElement)(chars.split(''));
}
exports.getRandomChar = getRandomChar;
/**
 * Returns a random string of the specified length using the given characters.
 * @param length The length of the random string to generate.
 * @param chars A string containing the characters to choose from. Default is alphanumeric characters.
 * @returns A random string of the specified length.
 */
function getRandomString(length, chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += getRandomChar(chars);
    }
    return result;
}
exports.getRandomString = getRandomString;
/**
 * Returns a random date between the specified start and end dates.
 * @param start The start date (inclusive).
 * @param end The end date (inclusive).
 * @returns A random date between the start and end dates.
 */
function getRandomDate(start = new Date(0), end = new Date(time_1.MAX_JS_DATE)) {
    return new Date(getRandomInt(start.getTime(), end.getTime()));
}
exports.getRandomDate = getRandomDate;
/// return new Date(getRandomInt(start.getTime(), end.getTime()));
//# sourceMappingURL=random.js.map