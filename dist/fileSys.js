"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendFile = exports.exists = exports.deserealizeObject = exports.serealizeObject = exports.readGZip = exports.writeGZip = exports.fileLines = exports.insertBetweenPlacweHolders = exports.readJson = exports.writeJson = exports.write = exports.writeToDesktop = exports.writeObjectToDesktop = exports.DESKTOP_PATH = void 0;
const fs_1 = require("fs");
const promises_1 = require("fs/promises");
const os_1 = require("os");
const path_1 = require("path");
const zlib_1 = require("zlib");
exports.DESKTOP_PATH = (0, path_1.join)((0, os_1.homedir)(), 'Desktop');
function writeObjectToDesktop(fileName, object) {
    (0, fs_1.writeFileSync)(`${exports.DESKTOP_PATH}/${fileName}`, JSON.stringify(object));
}
exports.writeObjectToDesktop = writeObjectToDesktop;
function writeToDesktop(fileName, data) {
    (0, fs_1.writeFileSync)(`${exports.DESKTOP_PATH}/${fileName}`, data);
}
exports.writeToDesktop = writeToDesktop;
function write(dir, fileName, data) {
    if (!(0, fs_1.existsSync)(dir)) {
        (0, fs_1.mkdirSync)(dir);
    }
    (0, fs_1.writeFileSync)(`${dir}/${fileName}`, data);
}
exports.write = write;
function writeJson(path, object) {
    (0, fs_1.writeFileSync)(path, JSON.stringify(object));
}
exports.writeJson = writeJson;
function readJson(path, reviver) {
    const data = (0, fs_1.readFileSync)(path);
    if (!data)
        return;
    const retVal = JSON.parse(data.toString(), reviver);
    return retVal;
}
exports.readJson = readJson;
function insertBetweenPlacweHolders(filePath, data, beginPlaceHolder, endPlaceHolder) {
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
exports.insertBetweenPlacweHolders = insertBetweenPlacweHolders;
function fileLines(path, lineSeparator = /[\n|\r]/) {
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
exports.fileLines = fileLines;
function writeGZip(filePath, data, writeFileOptions, zLibOptions) {
    const buffer = data instanceof Buffer ? data : Buffer.from(data);
    const zippBuffer = (0, zlib_1.gzipSync)(buffer, zLibOptions);
    (0, fs_1.writeFileSync)(filePath, zippBuffer, writeFileOptions);
}
exports.writeGZip = writeGZip;
function readGZip(path, readFileOptions, zlibOptions) {
    const data = (0, fs_1.readFileSync)(path, readFileOptions);
    return (0, zlib_1.unzipSync)(data, zlibOptions);
}
exports.readGZip = readGZip;
function serealizeObject(filePath, object) {
    writeGZip(filePath, JSON.stringify(object));
}
exports.serealizeObject = serealizeObject;
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
//# sourceMappingURL=fileSys.js.map