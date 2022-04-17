"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDurations = exports.multiplyDuration = exports.splitIntervalByDuration = exports.isDurationBiggerThanInterval = exports.durationToSeconds = exports.durationToMilliSeconds = exports.leapMonths = exports.months = exports.december = exports.november = exports.october = exports.september = exports.august = exports.july = exports.june = exports.may = exports.april = exports.march = exports.february = exports.january = exports.leapFebruary = exports.leapYear = exports.year = exports.month = exports.solarYear = exports.week = exports.day = exports.hour = exports.minute = exports.seccond = exports.millis = void 0;
/** in millis */
exports.millis = 1;
/** in millis */
exports.seccond = 1000 * exports.millis;
/** in millis */
exports.minute = 60 * exports.seccond;
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
    return ((duration === null || duration === void 0 ? void 0 : duration.years) || 0) * exports.year + ((duration === null || duration === void 0 ? void 0 : duration.months) || 0) * exports.month + ((duration === null || duration === void 0 ? void 0 : duration.weeks) || 0) * exports.week + ((duration === null || duration === void 0 ? void 0 : duration.days) || 0) * exports.day + ((duration === null || duration === void 0 ? void 0 : duration.hours) || 0) * exports.hour + ((duration === null || duration === void 0 ? void 0 : duration.minutes) || 0) * exports.minute + ((duration === null || duration === void 0 ? void 0 : duration.seconds) || 0) * exports.seccond;
}
exports.durationToMilliSeconds = durationToMilliSeconds;
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
    return durationToMilliSeconds(duration) / exports.seccond;
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
    if (!(interval === null || interval === void 0 ? void 0 : interval.start) || !(interval === null || interval === void 0 ? void 0 : interval.end))
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
//# sourceMappingURL=time.js.map