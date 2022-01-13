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
