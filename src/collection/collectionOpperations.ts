/**
 *
 * @param a1 array to compare
 * @param a2 array to compare
 * @returns return the array difference a1-a2
 */
export function arrayDifferences(a1: number[] = [], a2: number[] = []): number[] {
	const retVal: number[] = [];

	for (let i = 0; i < a1.length; i++) retVal.push(Math.abs((a1[i] || 0) - (a2[i] || 0)));

	return retVal;
}

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
export function forEachConsTouple<T>(array: T[], fn: (item1: T, item2: T) => void) {
	if (!array?.length || typeof fn !== 'function') return;

	for (let i = 1; i < array.length; i++) {
		const item1: T = array[i - 1];
		const item2: T = array[i];

		fn(item1, item2);
	}
}
