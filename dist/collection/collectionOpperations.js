"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forEachConsTouple = exports.arrayDifferences = void 0;
/**
 *
 * @param a1 array to compare
 * @param a2 array to compare
 * @returns return the array difference a1-a2
 */
function arrayDifferences(a1 = [], a2 = []) {
    const retVal = [];
    for (let i = 0; i < a1.length; i++)
        retVal.push(Math.abs((a1[i] || 0) - (a2[i] || 0)));
    return retVal;
}
exports.arrayDifferences = arrayDifferences;
/**
 * executes the provided function fn once for each pair of consecutive elements of the provided array.
 *
 * @example
 * ```js
 * const array=[1,2,3,4];
 *
 * forEachConsTouple(array,console.log);
 *
 * // prints
 * // 1 2
 * // 2 3
 * // 3 4
 * ```
 *
 */
function forEachConsTouple(array, fn) {
    if (!(array === null || array === void 0 ? void 0 : array.length) || typeof fn !== 'function')
        return;
    for (let i = 1; i < array.length; i++) {
        const item1 = array[i - 1];
        const item2 = array[i];
        fn(item1, item2);
    }
}
exports.forEachConsTouple = forEachConsTouple;
//# sourceMappingURL=collectionOpperations.js.map