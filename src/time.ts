/** in millis */
export const millis = 1;
/** in millis */
export const seccond = 1000 * millis;
/** in millis */
export const minute = 60 * seccond;
/** in millis */
export const hour = 60 * minute;
/** in millis */
export const day = 24 * hour;
/** in millis */
export const week = 7 * day;
/**
 * In millis
 * The average month is 365/12 = 30.42 days in a regular year and 366/12 = 30.50 days in a leap year. The Gregorian (western) solar calendar has 365.2425/12 = 30.436875 days on the average, varying between 28 and 31 days.
 */
export const solarYear = 365.25 * day;
/** in millis */
export const month = solarYear / 12;
/** in millis */
export const year = 365 * day;
/** 366 days */
export const leapYear = 366 * day;
/** 29 days */
export const leapFebruary = 29 * day;

/** in millis */
export const january = 31 * day;
/** in millis */
export const february = 28 * day;
/** in millis */
export const march = 31 * day;
/** in millis */
export const april = 30 * day;
/** in millis */
export const may = 31 * day;
/** in millis */
export const june = 30 * day;
/** in millis */
export const july = 31 * day;
/** in millis */
export const august = 31 * day;
/** in millis */
export const september = 30 * day;
/** in millis */
export const october = 31 * day;
/** in millis */
export const november = 30 * day;
/** in millis */
export const december = 31 * day;

export const months = [january, february, march, april, may, june, july, august, september, october, november, december];

export const leapMonths = [january, leapFebruary, march, april, may, june, july, august, september, october, november, december];

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
export function durationToMilliSeconds(duration: Duration): number {
	return (duration?.years || 0) * year + (duration?.months || 0) * month + (duration?.weeks || 0) * week + (duration?.days || 0) * day + (duration?.hours || 0) * hour + (duration?.minutes || 0) * minute + (duration?.seconds || 0) * seccond;
}

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
export function durationToSeconds(duration: Duration): number {
	return durationToMilliSeconds(duration) / seccond;
}

/**
 * check if the duration is larger than the interval
 */
export function isDurationBiggerThanInterval(interval: Interval, duration: Duration): boolean {
	const intervalSeconds = Math.abs(interval.end.getTime() - interval.start.getTime()) / 1000;
	const durationSeconds = durationToSeconds(duration);

	return durationSeconds > intervalSeconds;
}

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
export function splitIntervalByDuration(interval: Interval, duration: Duration): Interval[] {
	if (!interval?.start || !interval?.end) return;
	if (isDurationBiggerThanInterval(interval, duration)) return [interval];

	const intervals: Interval[] = [];

	var start = interval.start;

	while (start < interval.end) {
		let end: Date = new Date(start.getTime() + durationToMilliSeconds(duration));

		if (end > interval.end) end = interval.end;

		intervals.push({ start, end });

		start = end;
	}

	return intervals;
}

/**
 * multiply the given duration
 *
 * @example
 * ```js
 * const duration={moths:2, days:3, hours:4};
 *
 * multiplyDuration(duration:Duration,multiplier:number) // => {moths:4, days:6, hours:8}
 * ```
 */
export function multiplyDuration(duration: Duration, multiplier: number): Duration {
	return {
		years: duration.years * multiplier,
		months: duration.months * multiplier,
		weeks: duration.weeks * multiplier,
		days: duration.days * multiplier,
		hours: duration.hours * multiplier,
		minutes: duration.minutes * multiplier,
		seconds: duration.seconds * multiplier
	};
}

/**
 * add the given durations
 *
 * @example
 * ```js
 * const duration1={moths:2, days:3, hours:4};
 * const duration2={moths:2, days:3, hours:4};
 * const duration3={moths:2, days:3, hours:4};
 *
 * addDurations(duration1,duration2,duration3) // => {moths:6, days:9, hours:12}
 * ```
 */
export function addDurations(...durations: Duration[]): Duration {
	const retval: Duration = {
		years: 0,
		months: 0,
		weeks: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	};

	for (const duration of durations) {
		retval.years += duration.years || 0;
		retval.months += duration.months || 0;
		retval.weeks += duration.weeks || 0;
		retval.days += duration.days || 0;
		retval.hours += duration.hours || 0;
		retval.minutes += duration.minutes || 0;
		retval.seconds += duration.seconds || 0;
	}

	return retval;
}
