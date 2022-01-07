/**
 *
 * @param n number to be rounded round
 * @param positions decimal positions depth to round
 * @returns the rounded number
 */
export function round(n: number, positions = 0): number {
	const exp = Math.pow(10, positions);
	return Math.round(n * exp) / exp;
}

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
export function percDiff(start: number, end: number) {
	return (end - start) / (start / 100);
}

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
export function calculatePercent(value: number, percent: number): number {
	return value + value * (percent / 100);
}

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
export function weightedArithmeticMean(value: number[], weight: number[]): number {
	var totWeightedValue = 0;
	var totWeight = 0;

	for (var i = value.length - 1; i; i--) {
		totWeightedValue += value[i] * weight[i];
		totWeight += weight[i];
	}

	return totWeightedValue / totWeight;
}
