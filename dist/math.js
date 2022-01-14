"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weightedArithmeticMean = exports.calculatePercent = exports.percDiff = exports.round = void 0;
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
//# sourceMappingURL=math.js.map