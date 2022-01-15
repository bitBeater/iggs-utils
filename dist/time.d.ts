/** in millis */
export declare const millis = 1;
/** in millis */
export declare const seccond: number;
/** in millis */
export declare const minute: number;
/** in millis */
export declare const hour: number;
/** in millis */
export declare const day: number;
/** in millis */
export declare const week: number;
/**
 * In millis
 * The average month is 365/12 = 30.42 days in a regular year and 366/12 = 30.50 days in a leap year. The Gregorian (western) solar calendar has 365.2425/12 = 30.436875 days on the average, varying between 28 and 31 days.
 */
export declare const solarYear: number;
/** in millis */
export declare const month: number;
/** in millis */
export declare const year: number;
/** 366 days */
export declare const leapYear: number;
/** 29 days */
export declare const leapFebruary: number;
/** in millis */
export declare const january: number;
/** in millis */
export declare const february: number;
/** in millis */
export declare const march: number;
/** in millis */
export declare const april: number;
/** in millis */
export declare const may: number;
/** in millis */
export declare const june: number;
/** in millis */
export declare const july: number;
/** in millis */
export declare const august: number;
/** in millis */
export declare const september: number;
/** in millis */
export declare const october: number;
/** in millis */
export declare const november: number;
/** in millis */
export declare const december: number;
export declare const months: number[];
export declare const leapMonths: number[];
interface Duration {
    years?: number;
    months?: number;
    weeks?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
}
interface Interval {
    start: Date;
    end: Date;
}
/**
 * parse a duration into millisecconds
 *
 * @example
 * ```js
 * durationToMilliSeconds({seconds:1}) // => 1000
 * durationToMilliSeconds({minutes:1}) // => 60_000
 * durationToMilliSeconds({hours:1}) // => 3_600_000
 * durationToMilliSeconds({minutes:1,seconds:1}) // => 61_000
 * durationToMilliSeconds({hours:1,minutes:1,seconds:1}) // => 3_661_000
 * ```
 */
export declare function durationToMilliSeconds(duration: Duration): number;
/**
 * parse a duration into millisecconds
 *
 * @example
 * ```js
 * durationToMilliSeconds({seconds:1}) // => 1
 * durationToMilliSeconds({minutes:1}) // => 60
 * durationToMilliSeconds({hours:1}) // => 3_600
 * durationToMilliSeconds({minutes:1,seconds:1}) // => 61
 * durationToMilliSeconds({hours:1,minutes:1,seconds:1}) // => 3_661
 * ```
 */
export declare function durationToSeconds(duration: Duration): number;
/**
 * check if the duration is larger than the interval
 */
export declare function isDurationBiggerThanInterval(interval: Interval, duration: Duration): boolean;
/**
 * divide the given interval into smaller intervals, each having the duration equal to the given duration
 *
 * @example
 * ```js
 * const start=new Date('2000-01-01');
 * const end=new Date('2000-01-10');
 *
 * splitIntervalByDuration({start, end},{days:1});
 * // [
 * //   {start:2000-01-01, end:2000-01-02},
 * //   {start:2000-01-02, end:2000-01-03},
 * //   {start:2000-01-03, end:2000-01-04},
 * //   {start:2000-01-04, end:2000-01-05},
 * //   {start:2000-01-05, end:2000-01-06},
 * //   {start:2000-01-06, end:2000-01-07},
 * //   {start:2000-01-07, end:2000-01-08},
 * //   {start:2000-01-08, end:2000-01-09},
 * //   {start:2000-01-09, end:2000-01-10},
 * // ]
 * ```
 */
export declare function splitIntervalByDuration(interval: Interval, duration: Duration): Interval[];
export {};
//# sourceMappingURL=time.d.ts.map