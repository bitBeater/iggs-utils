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
