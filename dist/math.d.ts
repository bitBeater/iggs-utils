/**
 *
 * @param n number to be rounded round
 * @param positions decimal positions depth to round
 * @returns the rounded number
 */
export declare function round(n: number, positions?: number): number;
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
export declare function percDiff(start: number, end: number): number;
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
export declare function calculatePercent(value: number, percent: number): number;
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
export declare function weightedArithmeticMean(value: number[], weight: number[]): number;
/**
 * gets the precision of a number (how many decimal digits)
 *
 * @example
 * ```js
 * getPrecision(2.1)   //1
 * getPrecision(9.65)  //2
 * getPrecision(0.479) //3
 * getPrecision(1) //0
 * getPrecision(0) //0
 * ```
 */
export declare function getPrecision(n?: number): number;
/**
 *
 * returns the nearest multiple of a number
 * @example
 * ```js
 * getNearestMultiple(17, 5) // 15
 * getNearestMultiple(11, 2) // 12
 * getNearestMultiple(8, 5)  // 10
 * getNearestMultiple(5,  2) // 6
 * getNearestMultiple(5,  0) // 0
 * getNearestMultiple(0.5, 0.2) // 0.4
 * ```
 */
export declare function getNearestMultiple(n: number, multiple: number): number;
/**
 *
 * returns the nearest low multiple of a number, the result will always be less or equal to input number
 * @example
 * ```js
 * getNearestLowMultiple(17, 5) // 15
 * getNearestLowMultiple(11, 2) // 10
 * getNearestLowMultiple(8, 5)  // 5
 * getNearestLowMultiple(5,  2) // 4
 * getNearestLowMultiple(5,  0) // 0
 * getNearestLowMultiple(0.5, 0.2) // 0.4
 * getNearestLowMultiple(0.7777777777777, 0.00001) // 0.7777700000000001   cause j♿ can't deal with decimal module
 * getNearestLowMultiple(0.7777777777777, 0.00001, 5) // 0.77777
 *
 * ```
 */
export declare function getNearestLowMultiple(n: number, multiple: number, precision?: number): number;
/**
 * truncate decimal numbers to decimal places, without rounding
 * @example
 * ```js
 * truncateDecimals(5.469, 2); // => 5.46
 * truncateDecimals(5.461, 2); // => 5.46
 * ```
 */
export declare function truncateDecimals(n: number, digits: number): number;
//# sourceMappingURL=math.d.ts.map