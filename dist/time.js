"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leapMonths = exports.months = exports.december = exports.november = exports.october = exports.september = exports.august = exports.july = exports.june = exports.may = exports.april = exports.march = exports.february = exports.january = exports.leapFebruary = exports.leapYear = exports.year = exports.month = exports.solarYear = exports.week = exports.day = exports.hour = exports.minute = exports.seccond = exports.millis = void 0;
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
//# sourceMappingURL=../src/dist/time.js.map