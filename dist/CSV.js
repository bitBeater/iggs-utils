"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCsvLine = exports.getCsvColumns = exports.stringify = exports.parse = void 0;
const _1 = require(".");
const lodash_1 = require("lodash");
const object_1 = require("./object");
const ESCAPE_CHAR = String.fromCharCode(-1);
const DEFAULT_SEPARATOR = ';';
function parse(txt, options) {
    const collumns = (options === null || options === void 0 ? void 0 : options.collumns) || parseColumns(txt, options === null || options === void 0 ? void 0 : options.separator);
    const csvRawRows = txt.split('\n').slice(1);
    const opt = Object.assign(Object.assign({}, options), { collumns });
    const retVAl = csvRawRows.map(csvRawRow => parseCsv(csvRawRow, opt));
    return retVAl;
}
exports.parse = parse;
function stringify(values, opt) {
    const csvLines = [];
    const columns = (opt === null || opt === void 0 ? void 0 : opt.columns) || getCsvColumns(values, opt);
    for (const obj of values) {
        const csvLine = toCsvLine(obj, Object.assign(Object.assign({}, opt), { columns }));
        csvLines.push(csvLine);
    }
    const csv = [columns.join((opt === null || opt === void 0 ? void 0 : opt.separator) || DEFAULT_SEPARATOR), ...csvLines].join('\n');
    return csv;
}
exports.stringify = stringify;
function parseCsvValue(value, options) {
    switch (typeof value) {
        case 'string':
            return value;
        case 'bigint':
        case 'number':
            return _1.math.round(value, (options === null || options === void 0 ? void 0 : options.numberPrecision) || 4);
        default: {
            return JSON.stringify(value);
        }
    }
}
function getCsvColumns(objs, opt) {
    const columns = objs.map(obj => object_1.getPathKeys(obj, Object.assign(Object.assign({}, opt === null || opt === void 0 ? void 0 : opt.pathKeyOPtions), { omitFirstLevel: true, ignoreFunctions: true })));
    return lodash_1.union(...columns);
}
exports.getCsvColumns = getCsvColumns;
function toCsvLine(obj, opt) {
    var _a;
    const columns = (opt === null || opt === void 0 ? void 0 : opt.columns) || getCsvColumns([obj], opt);
    const csvVAlues = [];
    for (const column of columns) {
        const value = lodash_1.get(obj, column);
        const parsedValue = ((_a = opt === null || opt === void 0 ? void 0 : opt.parser) === null || _a === void 0 ? void 0 : _a.call(opt, column, value)) || value;
        const csvValue = parseCsvValue(parsedValue, opt);
        const cleanValue = escapeSeparator(csvValue);
        csvVAlues.push(cleanValue);
    }
    return csvVAlues.join((opt === null || opt === void 0 ? void 0 : opt.separator) || DEFAULT_SEPARATOR);
}
exports.toCsvLine = toCsvLine;
function parseColumns(txt, separator = DEFAULT_SEPARATOR) {
    const columnsRaw = txt.split('\n')[0];
    const collumns = columnsRaw.split(separator);
    return collumns;
}
function parseCsv(txt, options) {
    var _a, _b;
    if (!((_a = options === null || options === void 0 ? void 0 : options.collumns) === null || _a === void 0 ? void 0 : _a.length) || !txt)
        return;
    const separator = (options === null || options === void 0 ? void 0 : options.separator) || DEFAULT_SEPARATOR;
    const rawValues = txt.split(separator);
    if (rawValues.length !== ((_b = options === null || options === void 0 ? void 0 : options.collumns) === null || _b === void 0 ? void 0 : _b.length))
        throw new Error('parsed values length dont match columns length');
    var value = {};
    options.collumns.forEach((collumn, index) => {
        const rawVAlue = rawValues[index];
        const parsedValue = (options === null || options === void 0 ? void 0 : options.reviver) ? options === null || options === void 0 ? void 0 : options.reviver(collumn, rawVAlue) : rawVAlue;
        const unescapedSeparator = unEscapeSeparator(parsedValue, separator);
        lodash_1.set(value, collumn, unescapedSeparator);
    });
    return value;
}
function escapeSeparator(value, separator = DEFAULT_SEPARATOR) {
    if (typeof value === 'string')
        return value.replace(new RegExp(separator, 'g'), ESCAPE_CHAR);
    return value;
}
function unEscapeSeparator(value, separator = DEFAULT_SEPARATOR) {
    return value === null || value === void 0 ? void 0 : value.replace(new RegExp(ESCAPE_CHAR, 'g'), separator);
}
//# sourceMappingURL=CSV.js.map