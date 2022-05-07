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
 * forEachConsPairs(array,console.log);
 *
 * // prints
 * // 1 2
 * // 2 3
 * // 3 4
 * ```
 *
 */
export declare function forEachConsPairs<T>(array: T[], fn: (item1: T, item2: T) => void): void;
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
/**
 * get the last element of an aray.
 *
 * @example <caption>simply does:</caption>
 * simply does:
 * ```js
 *  array[array.length - 1];
 * ```
 */
export declare function lastEl<T>(array: T[]): T;
/**
 * generate an array, of specified length using the generate function
 *
 * @example <caption>Generate an array with numbers from 0 to 9</caption>
 * ```js
 *  gen(10, i => i); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 */
export declare function gen<T>(length: number, genFn: (index: number) => T): T[];
//# sourceMappingURL=collectionOpperations.d.ts.map