"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leapMonths = exports.months = exports.december = exports.november = exports.october = exports.september = exports.august = exports.july = exports.june = exports.may = exports.april = exports.march = exports.february = exports.january = exports.leapFebruary = exports.leapYear = exports.year = exports.week = exports.day = exports.hour = exports.minute = exports.seccond = exports.millis = void 0;
exports.millis = 1;
exports.seccond = 1000 * exports.millis;
exports.minute = 60 * exports.seccond;
exports.hour = 60 * exports.minute;
exports.day = 24 * exports.hour;
exports.week = 7 * exports.day;
exports.year = 365 * exports.day;
/** 366 days */
exports.leapYear = 366 * exports.day;
/** 29 days */
exports.leapFebruary = 29 * exports.day;
exports.january = 31 * exports.day;
exports.february = 28 * exports.day;
exports.march = 31 * exports.day;
exports.april = 30 * exports.day;
exports.may = 31 * exports.day;
exports.june = 30 * exports.day;
exports.july = 31 * exports.day;
exports.august = 31 * exports.day;
exports.september = 30 * exports.day;
exports.october = 31 * exports.day;
exports.november = 30 * exports.day;
exports.december = 31 * exports.day;
exports.months = [exports.january, exports.february, exports.march, exports.april, exports.may, exports.june, exports.july, exports.august, exports.september, exports.october, exports.november, exports.december];
exports.leapMonths = [exports.january, exports.leapFebruary, exports.march, exports.april, exports.may, exports.june, exports.july, exports.august, exports.september, exports.october, exports.november, exports.december];
//# sourceMappingURL=time.js.map