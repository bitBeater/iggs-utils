"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSorted = exports.forEachConsTouple = exports.arrayDifferences = void 0;
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
/**
 * check if the givven array is sorted or not.
 *
 * @example <caption>check array of numbers </caption>
 * ```js
 *  isSorted([1,2,3])	//true
 *  isSorted([1,3,2])	//false
 * ```
 *
 *  @example <caption>check array of strings</caption>
 *```js
 *  isSorted(['a','b','c'])	//true
 *  isSorted(['a','c','b'])	//false
 * ```
 *
 *   @example <caption>check array of objects, with compareFn</caption>
 * ```js
 *  isSorted([{ x:1}, { x:2}, { x:3}], (o1,o2)=> o1.x-o2.x) // true
 *  isSorted([{ x:1}, { x:3}, { x:2}], (o1,o2)=> o1.x-o2.x) // false
 * ```
 *
 * @param array array to check if is sorted
 * @param compareFn function to use for comparison operation
 */
function isSorted(array, compareFn = genericSortFunction) {
    if (!(array === null || array === void 0 ? void 0 : array.length))
        return;
    for (let i = 1; i < array.length; i++) {
        const item1 = array[i - 1];
        const item2 = array[i];
        if (compareFn(item1, item2) > 0)
            return false;
    }
    return true;
}
exports.isSorted = isSorted;
const genericSortFunction = (item1, item2) => {
    try {
        return item1 === item2 ? 0 : item1 > item2 ? 1 : -1;
    }
    catch (error) {
        return 0;
    }
};
//# sourceMappingURL=collectionOpperations.js.map