'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.printObj = exports.logColors = exports.printNl = void 0;
function printNl(n) {
	if (n === void 0) {
		n = 5;
	}
	for (var i = 0; i < n; i++) {
		console.log();
	}
}
exports.printNl = printNl;
exports.logColors = {
	reset: '\x1b[0m',
	bright: '\x1b[1m',
	dim: '\x1b[2m',
	underscore: '\x1b[4m',
	blink: '\x1b[5m',
	reverse: '\x1b[7m',
	hidden: '\x1b[8m',
	// Foreground (text) colors
	fg: {
		black: '\x1b[30m',
		red: '\x1b[31m',
		green: '\x1b[32m',
		yellow: '\x1b[33m',
		blue: '\x1b[34m',
		magenta: '\x1b[35m',
		cyan: '\x1b[36m',
		white: '\x1b[37m',
		crimson: '\x1b[38m'
	},
	// Background colors
	bg: {
		black: '\x1b[40m',
		red: '\x1b[41m',
		green: '\x1b[42m',
		yellow: '\x1b[43m',
		blue: '\x1b[44m',
		magenta: '\x1b[45m',
		cyan: '\x1b[46m',
		white: '\x1b[47m',
		crimson: '\x1b[48m'
	}
};
function printObj(obj) {
	for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
		var key = _a[_i];
		console.log(key, ' : ', obj[key]);
	}
}
exports.printObj = printObj;
//# sourceMappingURL=../src/dist/cons.js.map
