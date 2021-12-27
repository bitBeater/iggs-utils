'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.parse = void 0;
const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
const parseDate = (_key, value) => (typeof value === 'string' && dateFormat.test(value) ? new Date(value) : value);
function parse(txt = 'null') {
	return JSON.parse(txt, parseDate);
}
exports.parse = parse;
//# sourceMappingURL=json.js.map
