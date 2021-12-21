"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
var dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
var parseDate = function (_key, value) { return (typeof value === 'string' && dateFormat.test(value) ? new Date(value) : value); };
function parse(txt) {
    if (txt === void 0) { txt = 'null'; }
    return JSON.parse(txt, parseDate);
}
exports.parse = parse;
//# sourceMappingURL=json.js.map