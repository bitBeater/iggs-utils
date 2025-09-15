"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseIntOrZero = exports.fibonacis = exports.numberSequenceByLength = exports.numberSequenceRange = exports.truncateDecimals = exports.getNearestLowMultiple = exports.getNearestMultiple = exports.getPrecision = exports.weightedArithmeticMean = exports.calculatePercent = exports.percDiff = exports.round = void 0;
/**
 *
 * @param n number to be rounded round
 * @param positions decimal positions depth to round
 * @returns the rounded number
 */
function round(n, positions = 0) {
    const exp = Math.pow(10, positions);
    return Math.round(n * exp) / exp;
}
exports.round = round;
/**
 *
 * @param start start value
 * @param end end value
 * @returns the percent difference
 *
 * ## Example
 * ```ts
 * percDiff(100,90)
 * // output: -10
 *
 * percDiff(90,100)
 * // output: 10
 * ```
 */
function percDiff(start, end) {
    return (end - start) / (start / 100);
}
exports.percDiff = percDiff;
/**
 *
 * @param value the value tu be multiplied by the given percent value
 * @param percent percent value
 * @returns the value multiplied by percent
 *
 * ## Example
 * ```ts
 * calculatePercent(100,10)
 * // output: 110
 *
 * calculatePercent(100,-10)
 * // output: 90
 * ```
 */
function calculatePercent(value, percent) {
    return value + value * (percent / 100);
}
exports.calculatePercent = calculatePercent;
/**
 * ```
 * Weighted Mean =  Σwx/Σw
 * ```
 *
 * The weighted arithmetic mean is similar to an ordinary arithmetic mean,
 * except that instead of each of the data points contributing equally to the final average,
 * some data points contribute more than others.
 * If all the weights are equal, then the weighted mean is the same as the arithmetic mean.
 *
 * @example
 * ```js
 * weightedArithmeticMean([[251,0.1], [360, 0.5], [210, 0.7]]);
 * // => 270.8461538461539
 * ```
 *
 * @link https://en.wikipedia.org/wiki/Weighted_arithmetic_mean
 */
function weightedArithmeticMean(value, weight) {
    /**
     *
     * I tried to optimize the performance to the maximum, to do this:
     * - I used the var because it is slightly faster than the let
     * - the for loop also in this case is slightly faster than the while, and much faster than the methods of the array reduce or the forEach
     * - Looping the array backwards is slightly faster than looping it from the start: https://stackoverflow.com/questions/8689573/why-is-iterating-through-an-array-backwards-faster-than-forwards
     */
    var totWeightedValue = 0;
    var totWeight = 0;
    for (var i = value.length - 1; i >= 0; i--) {
        totWeightedValue += value[i] * weight[i];
        totWeight += weight[i];
    }
    return totWeightedValue / totWeight;
}
exports.weightedArithmeticMean = weightedArithmeticMean;
/**
 * gets the precision of a number (how many decimal digits)
 *
 * @example
 * ```js
 * getPrecision(2.1)   //1
 * getPrecision(9.65)  //2
 * getPrecision(0.479) //3
 * getPrecision(1) //0
 * getPrecision(0) //0
 * ```
 */
function getPrecision(n = 0) {
    return n?.toString()?.split('.')?.[1]?.length || 0;
}
exports.getPrecision = getPrecision;
/**
 *
 * returns the nearest multiple of a number
 * @example
 * ```js
 * getNearestMultiple(17, 5) // 15
 * getNearestMultiple(11, 2) // 12
 * getNearestMultiple(8, 5)  // 10
 * getNearestMultiple(5,  2) // 6
 * getNearestMultiple(5,  0) // 0
 * getNearestMultiple(0.5, 0.2) // 0.4
 * ```
 */
function getNearestMultiple(n, multiple) {
    const log = n % multiple || n;
    if (log >= multiple / 2)
        return n + multiple - log;
    return n - log;
}
exports.getNearestMultiple = getNearestMultiple;
/**
 *
 * returns the nearest low multiple of a number, the result will always be less or equal to input number
 * @example
 * ```js
 * getNearestLowMultiple(17, 5) // 15
 * getNearestLowMultiple(11, 2) // 10
 * getNearestLowMultiple(8, 5)  // 5
 * getNearestLowMultiple(5,  2) // 4
 * getNearestLowMultiple(5,  0) // 0
 * getNearestLowMultiple(0.5, 0.2) // 0.4
 * getNearestLowMultiple(0.7777777777777, 0.00001) // 0.7777700000000001   cause j♿ can't deal with decimal module
 * getNearestLowMultiple(0.7777777777777, 0.00001, 5) // 0.77777
 *
 * ```
 */
function getNearestLowMultiple(n, multiple, precision = 0) {
    var multiplier = 10 ** precision;
    var integer = n * multiplier;
    return (integer - (integer % (multiple * multiplier))) / multiplier;
}
exports.getNearestLowMultiple = getNearestLowMultiple;
/**
 * truncate decimal numbers to decimal places, without rounding
 * @example
 * ```js
 * truncateDecimals(5.469, 2); // => 5.46
 * truncateDecimals(5.461, 2); // => 5.46
 * ```
 */
function truncateDecimals(n, digits) {
    const multiplier = Math.pow(10, digits);
    return Math.floor(n * multiplier) / multiplier;
}
exports.truncateDecimals = truncateDecimals;
/**
 *
 * Create a sequence of numbers, from start value to end value with span
 *
 * @example
 * ```js
 * numberSequence({start:1, end: 5, span:1})	//	[1,2,3,4,5]
 * numberSequence({start:1, end: 10, span:2})	//	[1,3,5,7,9]
 * numberSequence({start:1, end: 5, span:2})	//	[1,3,5]
 * numberSequence({start:5, end: 1, span:1})	//	[5,4,3,2,1]
 * numberSequence({start:1, end: -5, span:1})	//	[1,0,-1,-2,-3,-4,-5]
 * numberSequence({start:5, end: -1, span:1})	//	[5,4,3,2,1,0,-1]
 * numberSequence({start:0, end: 1, span:0.2})	//	[0,0.2,0.4,0.6000000000000001,0.8,1]
 * numberSequence({start:0, end: -1, span:0.2})	//	[0,-0.2,-0.4,-0.6000000000000001,-0.8,-1]
 * numberSequence({start:1, end: -1, span:0.3})	//	[1,0.7,0.4,0.10000000000000009,-0.2,-0.5,-0.7999999999999998]
 * numberSequence({start:-1, end:-5, span:1})	//	[-1,-2,-3,-4,-5]
 * numberSequence({start:-5, end:-1, span:1})	//	[-5,-4,-3,-2,-1]
 * numberSequence({start:-1, end:5, span:1})	//	[-1,0,1,2,3,4,5]
 * ```
 */
function numberSequenceRange(range) {
    const { start: start, end: end, span } = { ...range };
    const length = Math.floor(Math.abs(start - end) / span);
    const retVal = new Array(length);
    if (start < end)
        for (var i = length + 1; i;)
            retVal[--i] = start + span * i;
    else
        for (var i = length + 1; i;)
            retVal[--i] = start - span * i;
    return retVal;
}
exports.numberSequenceRange = numberSequenceRange;
/**
 *
 * Create a sequence of numbers, from start value to end value with span
 *
 * @example
 * ```js
 * numberSequenceByLength({ start: 0, span: 1, length: 10 })	// (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * numberSequenceByLength({ start: 0, span: 1, length: 10, direction: '-' })	// (10) [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
 * numberSequenceByLength({ start: 0, span: 0.3, length: 10 })	// (10) [0, 0.3, 0.6, 0.8999999999999999, 1.2, 1.5, 1.7999999999999998, 2.1, 2.4, 2.6999999999999997]
 * numberSequenceByLength({ start: 1.5, span: 0.3, length: 10, direction: '-' })	// (10) [1.5, 1.2, 0.9, 0.6000000000000001, 0.30000000000000004, 0, -0.2999999999999998, -0.6000000000000001, -0.8999999999999999, -1.1999999999999997]
 * numberSequenceByLength({ start: -1.5, span: 0.3, length: 10, direction: '+' })	// (10) [-1.5, -1.2, -0.9, -0.6000000000000001, -0.30000000000000004, 0, 0.2999999999999998, 0.6000000000000001, 0.8999999999999999, 1.1999999999999997]
 * ```
 */
function numberSequenceByLength(len) {
    const { start, span, length, direction } = { ...len };
    const retVal = new Array(length);
    if (direction === '-')
        for (var i = 0; i < length; i++)
            retVal[i] = start - span * i;
    else
        for (var i = 0; i < length; i++)
            retVal[i] = start + span * i;
    return retVal;
}
exports.numberSequenceByLength = numberSequenceByLength;
/**
 *
 * Create a sequence of fibonaci numbers, from start value to end value
 *
 */
function fibonacis(start, end) {
    const retVal = [];
    var lastFib = start || 1;
    var currentFib = start * 2 || 1;
    while (true) {
        if (lastFib > end)
            return retVal;
        const tmpLast = lastFib;
        lastFib = currentFib;
        currentFib = currentFib + tmpLast;
        retVal.push(tmpLast);
    }
}
exports.fibonacis = fibonacis;
/**
 * @example
 * ```
 * null			=>	 0
 * undefined		=>	 0
 * NaN			=>	 0
 * Infinity		=>	 0
 * -Infinity		=>	 0
 * new Date()		=>	 0
 * ''			=>	 0
 * ' '			=>	 0
 * '123'			=>	 123
 * '-123'			=>	 -123
 * '123.456'		=>	 123
 * 'abc'			=>	 0
 *
 *```
 * @param val any value
 * @returns {number}
 */
function parseIntOrZero(val, radix) {
    //@ts-ignore
    const retVal = Number.parseInt(val, radix);
    if (isNaN(retVal))
        return 0;
    return retVal;
}
exports.parseIntOrZero = parseIntOrZero;
//# sourceMappingURL=math.js.map