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
//# sourceMappingURL=collectionOpperations.d.ts.map