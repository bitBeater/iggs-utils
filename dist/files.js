"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.of = exports.write = exports.appendFile = exports.exists = exports.deserealizeObject = exports.serealizeObjectSync = exports.readGZip = exports.writeGZipSync = exports.fileLinesSync = exports.insertBetweenPlacweHoldersSync = exports.readJson = exports.writeJsonSync = exports.writeSync = exports.writeToDesktopSync = exports.writeObjectToDesktopSync = exports.DESKTOP_PATH = void 0;
const fs_1 = require("fs");
const promises_1 = require("fs/promises");
const os_1 = require("os");
const path_1 = require("path");
const zlib_1 = require("zlib");
exports.DESKTOP_PATH = (0, path_1.join)((0, os_1.homedir)(), 'Desktop');
function writeObjectToDesktopSync(fileName, object) {
    (0, fs_1.writeFileSync)(`${exports.DESKTOP_PATH}/${fileName}`, JSON.stringify(object));
}
exports.writeObjectToDesktopSync = writeObjectToDesktopSync;
function writeToDesktopSync(fileName, data) {
    (0, fs_1.writeFileSync)(`${exports.DESKTOP_PATH}/${fileName}`, data);
}
exports.writeToDesktopSync = writeToDesktopSync;
function writeSync(dir, fileName, data) {
    if (!(0, fs_1.existsSync)(dir)) {
        (0, fs_1.mkdirSync)(dir);
    }
    (0, fs_1.writeFileSync)(`${dir}/${fileName}`, data);
}
exports.writeSync = writeSync;
function writeJsonSync(path, object) {
    (0, fs_1.writeFileSync)(path, JSON.stringify(object));
}
exports.writeJsonSync = writeJsonSync;
function readJson(path, reviver) {
    const data = (0, fs_1.readFileSync)(path);
    if (!data)
        return;
    const retVal = JSON.parse(data.toString(), reviver);
    return retVal;
}
exports.readJson = readJson;
function insertBetweenPlacweHoldersSync(filePath, data, beginPlaceHolder, endPlaceHolder) {
    var _a, _b, _c, _d, _e, _f;
    const writeData = (0, fs_1.readFileSync)(filePath);
    if (!(0, fs_1.existsSync)(filePath)) {
        (0, fs_1.writeFileSync)(filePath, writeData);
    }
    const fileContent = (0, fs_1.readFileSync)(filePath).toString();
    const top = (_b = (_a = fileContent === null || fileContent === void 0 ? void 0 : fileContent.split) === null || _a === void 0 ? void 0 : _a.call(fileContent, beginPlaceHolder)) === null || _b === void 0 ? void 0 : _b[0];
    const bottom = (_f = (_e = (_c = fileContent === null || fileContent === void 0 ? void 0 : fileContent.split) === null || _c === void 0 ? void 0 : (_d = _c.call(fileContent, endPlaceHolder)).reverse) === null || _e === void 0 ? void 0 : _e.call(_d)) === null || _f === void 0 ? void 0 : _f[0];
    (0, fs_1.writeFileSync)(filePath, `${top}\n\r${beginPlaceHolder}\n\r${data}\n\r${endPlaceHolder}\n\r${bottom}`);
}
exports.insertBetweenPlacweHoldersSync = insertBetweenPlacweHoldersSync;
function fileLinesSync(path, lineSeparator = /[\n|\r]/) {
    var _a;
    if (!path)
        return null;
    try {
        const data = (_a = (0, fs_1.readFileSync)(path)) === null || _a === void 0 ? void 0 : _a.toString();
        if (!data)
            return null;
        return data.split(lineSeparator);
    }
    catch (error) {
        console.error(error);
    }
}
exports.fileLinesSync = fileLinesSync;
function writeGZipSync(filePath, data, writeFileOptions, zLibOptions) {
    const buffer = data instanceof Buffer ? data : Buffer.from(data);
    const zippBuffer = (0, zlib_1.gzipSync)(buffer, zLibOptions);
    (0, fs_1.writeFileSync)(filePath, zippBuffer, writeFileOptions);
}
exports.writeGZipSync = writeGZipSync;
function readGZip(path, readFileOptions, zlibOptions) {
    const data = (0, fs_1.readFileSync)(path, readFileOptions);
    return (0, zlib_1.unzipSync)(data, zlibOptions);
}
exports.readGZip = readGZip;
function serealizeObjectSync(filePath, object) {
    writeGZipSync(filePath, JSON.stringify(object));
}
exports.serealizeObjectSync = serealizeObjectSync;
function deserealizeObject(filePath) {
    return JSON.parse(readGZip(filePath).toString());
}
exports.deserealizeObject = deserealizeObject;
const exists = (path) => (0, promises_1.stat)(path)
    .then(() => true)
    .catch(e => {
    if (e.code === 'ENOENT')
        return false;
    throw e;
});
exports.exists = exists;
/**
 * add to file, if the file or folder does not exist it will be recursively created
 * @param path
 * @param data
 * @param options
 * @returns
 */
function appendFile(path, data, options) {
    return (0, promises_1.appendFile)(path, data, options).catch(error => {
        if (error.code === 'ENOENT')
            return (0, promises_1.mkdir)((0, path_1.dirname)(path.toString()), { recursive: true }).then(() => (0, promises_1.appendFile)(path, data, options));
        return error;
    });
}
exports.appendFile = appendFile;
/**
 * write to file, if the folder does not exist it will be recursively created
 * @param path
 * @param data
 * @param options
 * @returns
 */
function write(file, data, options) {
    const dirPath = (0, path_1.dirname)(file.toString());
    return (0, exports.exists)(dirPath).then(exist => {
        const _opt = typeof options === 'string' ? { encoding: options } : options;
        let promise = of();
        if (!exist)
            promise = (0, promises_1.mkdir)(dirPath, Object.assign(Object.assign({}, _opt), { recursive: true }));
        return promise.then(() => (0, promises_1.writeFile)(file, data, options));
    });
}
exports.write = write;
function of(data) {
    return new Promise((resolve, _reject) => {
        resolve(data);
    });
}
exports.of = of;
//# sourceMappingURL=files.js.map