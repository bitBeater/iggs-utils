"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanizeDuration = exports.intervalToDuration = exports.toSqlDate = exports.isValidDate = exports.addDurations = exports.multiplyDuration = exports.splitIntervalByDuration = exports.isDurationBiggerThanInterval = exports.durationToSeconds = exports.millisecondsToDuration = exports.durationToMilliSeconds = exports.leapMonths = exports.months = exports.december = exports.november = exports.october = exports.september = exports.august = exports.july = exports.june = exports.may = exports.april = exports.march = exports.february = exports.january = exports.leapFebruary = exports.leapYear = exports.year = exports.month = exports.solarYear = exports.week = exports.day = exports.hour = exports.minute = exports.second = exports.millis = exports.MAX_JS_DATE = void 0;
exports.MAX_JS_DATE = 8.64e15; // Sat Sep 13 275760 00:00:00 GMT+0000
/** in millis */
exports.millis = 1;
/** in millis */
exports.second = 1000 * exports.millis;
/** in millis */
exports.minute = 60 * exports.second;
/** in millis */
exports.hour = 60 * exports.minute;
/** in millis */
exports.day = 24 * exports.hour;
/** in millis */
exports.week = 7 * exports.day;
/**
 * In millis
 * The average month is 365/12 = 30.42 days in a regular year and 366/12 = 30.50 days in a leap year. The Gregorian (western) solar calendar has 365.2425/12 = 30.436875 days on the average, varying between 28 and 31 days.
 */
exports.solarYear = 365.25 * exports.day;
/** in millis */
exports.month = exports.solarYear / 12;
/** in millis */
exports.year = 365 * exports.day;
/** 366 days */
exports.leapYear = 366 * exports.day;
/** 29 days */
exports.leapFebruary = 29 * exports.day;
/** in millis */
exports.january = 31 * exports.day;
/** in millis */
exports.february = 28 * exports.day;
/** in millis */
exports.march = 31 * exports.day;
/** in millis */
exports.april = 30 * exports.day;
/** in millis */
exports.may = 31 * exports.day;
/** in millis */
exports.june = 30 * exports.day;
/** in millis */
exports.july = 31 * exports.day;
/** in millis */
exports.august = 31 * exports.day;
/** in millis */
exports.september = 30 * exports.day;
/** in millis */
exports.october = 31 * exports.day;
/** in millis */
exports.november = 30 * exports.day;
/** in millis */
exports.december = 31 * exports.day;
exports.months = [exports.january, exports.february, exports.march, exports.april, exports.may, exports.june, exports.july, exports.august, exports.september, exports.october, exports.november, exports.december];
exports.leapMonths = [exports.january, exports.leapFebruary, exports.march, exports.april, exports.may, exports.june, exports.july, exports.august, exports.september, exports.october, exports.november, exports.december];
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
function durationToMilliSeconds(duration) {
    return (duration?.years || 0) * exports.year + (duration?.months || 0) * exports.month + (duration?.weeks || 0) * exports.week + (duration?.days || 0) * exports.day + (duration?.hours || 0) * exports.hour + (duration?.minutes || 0) * exports.minute + (duration?.seconds || 0) * exports.second + (duration?.milliseconds || 0) * exports.millis;
}
exports.durationToMilliSeconds = durationToMilliSeconds;
function millisecondsToDuration(millis) {
    const duration = {};
    duration.years = Math.floor(millis / exports.year);
    millis %= exports.year;
    duration.months = Math.floor(millis / exports.month);
    millis %= exports.month;
    duration.weeks = Math.floor(millis / exports.week);
    millis %= exports.week;
    duration.days = Math.floor(millis / exports.day);
    millis %= exports.day;
    duration.hours = Math.floor(millis / exports.hour);
    millis %= exports.hour;
    duration.minutes = Math.floor(millis / exports.minute);
    millis %= exports.minute;
    duration.seconds = Math.floor(millis / exports.second);
    millis %= exports.second;
    duration.milliseconds = millis;
    return duration;
}
exports.millisecondsToDuration = millisecondsToDuration;
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
function durationToSeconds(duration) {
    return durationToMilliSeconds(duration) / exports.second;
}
exports.durationToSeconds = durationToSeconds;
/**
 * check if the duration is larger than the interval
 */
function isDurationBiggerThanInterval(interval, duration) {
    const intervalSeconds = Math.abs(interval.end.getTime() - interval.start.getTime()) / 1000;
    const durationSeconds = durationToSeconds(duration);
    return durationSeconds > intervalSeconds;
}
exports.isDurationBiggerThanInterval = isDurationBiggerThanInterval;
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
function splitIntervalByDuration(interval, duration) {
    if (!interval?.start || !interval?.end)
        return;
    if (isDurationBiggerThanInterval(interval, duration))
        return [interval];
    const intervals = [];
    var start = interval.start;
    while (start < interval.end) {
        let end = new Date(start.getTime() + durationToMilliSeconds(duration));
        if (end > interval.end)
            end = interval.end;
        intervals.push({ start, end });
        start = end;
    }
    return intervals;
}
exports.splitIntervalByDuration = splitIntervalByDuration;
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
function multiplyDuration(duration, multiplier) {
    return {
        years: duration.years * multiplier,
        months: duration.months * multiplier,
        weeks: duration.weeks * multiplier,
        days: duration.days * multiplier,
        hours: duration.hours * multiplier,
        minutes: duration.minutes * multiplier,
        seconds: duration.seconds * multiplier,
    };
}
exports.multiplyDuration = multiplyDuration;
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
function addDurations(...durations) {
    const retval = {
        years: 0,
        months: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
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
exports.addDurations = addDurations;
function isValidDate(value) {
    return value instanceof Date && !isNaN(value.valueOf());
}
exports.isValidDate = isValidDate;
/**
 * Format a date into sql datetime value
 * @param date
 * @returns
 *  * @example
 * ```js
 * const date = new Date();
 * toSqlDate() // => "2017-06-29 17:54:04"
 *
 */
function toSqlDate(date) {
    return date.toISOString().slice(0, 19).replace('T', ' ');
}
exports.toSqlDate = toSqlDate;
/**
 * Convert an interval to a duration
 * @param interval
 * @returns
 *
 * @example
 * ```ts
 * const interval = { start: new Date('2000-01-01'), end: new Date('2000-01-10') };
 * const duration = IntervalToDuration(interval);
 * // { years: 0, months: 0, weeks: 0, days: 9, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }
 * ```
 */
function intervalToDuration(interval) {
    if (interval.end === undefined) {
        throw new Error('Invalid interval, end date is missing: ' + JSON.stringify(interval));
    }
    if (interval.start === undefined) {
        throw new Error('Invalid interval, start date is missing: ' + JSON.stringify(interval));
    }
    const start = interval.start.getTime();
    const end = interval.end.getTime();
    if (start > end) {
        throw new Error('Invalid interval, end date is before start date: ' + JSON.stringify(interval));
    }
    let durationInMs = end - start;
    const duration = millisecondsToDuration(durationInMs);
    return duration;
}
exports.intervalToDuration = intervalToDuration;
/**
 * Humanize a duration object into a human-readable string.
 * @example
 * ```js
 * const duration = { years: 1, months: 2, days: 3, hours: 4, minutes: 5, seconds: 6 };
 * humanizeDuration(duration) // => "1 year, 2 months, 3 days, 4 hours, 5 minutes and 6 seconds"
 * ```
 *  * @example
 * ```js
 * const duration = { seconds: 4000 };
 * humanizeDuration(duration) // => "1 hour, 6 minutes and 40 seconds"
 * ```
 * @param inDuration
 * @param options
 * @returns
 */
function humanizeDuration(inDuration, options) {
    let duration = { ...inDuration };
    if (options?.reduce) {
        duration = millisecondsToDuration(durationToMilliSeconds(duration));
    }
    const parts = [];
    if (duration.years)
        parts.push(`${duration.years} year${duration.years > 1 ? 's' : ''}`);
    if (duration.months)
        parts.push(`${duration.months} month${duration.months > 1 ? 's' : ''}`);
    if (duration.weeks)
        parts.push(`${duration.weeks} week${duration.weeks > 1 ? 's' : ''}`);
    if (duration.days)
        parts.push(`${duration.days} day${duration.days > 1 ? 's' : ''}`);
    if (duration.hours)
        parts.push(`${duration.hours} hour${duration.hours > 1 ? 's' : ''}`);
    if (duration.minutes)
        parts.push(`${duration.minutes} minute${duration.minutes > 1 ? 's' : ''}`);
    if (duration.seconds)
        parts.push(`${duration.seconds} second${duration.seconds > 1 ? 's' : ''}`);
    if (duration.milliseconds)
        parts.push(`${duration.milliseconds} millisecond${duration.milliseconds > 1 ? 's' : ''}`);
    // handle singular case
    if (parts.length === 1) {
        return parts[0];
    }
    if (parts.length === 0) {
        return '0 milliseconds';
    }
    const last = parts.pop();
    return parts.join(', ') + ' and ' + last;
}
exports.humanizeDuration = humanizeDuration;
//# sourceMappingURL=time.js.map