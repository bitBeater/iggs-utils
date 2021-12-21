"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePercent = exports.percDiff = exports.round = void 0;
/**
 *
 * @param n number to be rounded round
 * @param positions decimal positions depth to round
 * @returns the rounded number
 */
function round(n, positions) {
    if (positions === void 0) { positions = 0; }
    var exp = Math.pow(10, positions);
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
//# sourceMappingURL=math.js.map