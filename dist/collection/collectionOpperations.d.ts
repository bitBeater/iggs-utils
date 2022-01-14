/**
 *
 * @param a1 array to compare
 * @param a2 array to compare
 * @returns return the array difference a1-a2
 */
export declare function arrayDifferences(a1?: number[], a2?: number[]): number[];
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
export declare function forEachConsTouple<T>(array: T[], fn: (item1: T, item2: T) => void): void;
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
export declare function isSorted<T>(array: T[], compareFn?: (item1: T, item2: T) => number): boolean;
//# sourceMappingURL=../../src/dist/collection/collectionOpperations.d.ts.map