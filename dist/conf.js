'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getConfSync = exports.getConf = void 0;
const fs_1 = require('fs');
const path_1 = require('path');
function getConf(path) {
	if (!path) path = (0, path_1.join)(__dirname, 'config.json');
	return new Promise((resolve, reject) => {
		try {
			resolve(JSON.parse((0, fs_1.readFileSync)(path).toString('utf-8')));
		} catch (error) {
			reject(error);
		}
	});
}
exports.getConf = getConf;
function getConfSync(path) {
	if (!path) path = (0, path_1.join)(__dirname, 'config.json');
	return JSON.parse((0, fs_1.readFileSync)(path).toString('utf-8'));
}
exports.getConfSync = getConfSync;
//# sourceMappingURL=conf.js.map
