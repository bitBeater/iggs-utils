"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exists = exports.deserealizeObject = exports.serealizeObject = exports.readGZip = exports.writeGZip = exports.fileLines = exports.insertBetweenPlacweHolders = exports.readJson = exports.writeJson = exports.write = exports.writeToDesktop = exports.writeObjectToDesktop = exports.DESKTOP_PATH = void 0;
var fs_1 = require("fs");
var promises_1 = require("fs/promises");
var os_1 = require("os");
var path_1 = require("path");
var zlib_1 = require("zlib");
exports.DESKTOP_PATH = path_1.join(os_1.homedir(), 'Desktop');
function writeObjectToDesktop(fileName, object) {
    fs_1.writeFileSync(exports.DESKTOP_PATH + "/" + fileName, JSON.stringify(object));
}
exports.writeObjectToDesktop = writeObjectToDesktop;
function writeToDesktop(fileName, data) {
    fs_1.writeFileSync(exports.DESKTOP_PATH + "/" + fileName, data);
}
exports.writeToDesktop = writeToDesktop;
function write(dir, fileName, data) {
    if (!fs_1.existsSync(dir)) {
        fs_1.mkdirSync(dir);
    }
    fs_1.writeFileSync(dir + "/" + fileName, data);
}
exports.write = write;
function writeJson(path, object) {
    fs_1.writeFileSync(path, JSON.stringify(object));
}
exports.writeJson = writeJson;
function readJson(path) {
    var data = fs_1.readFileSync(path);
    if (!data)
        return;
    var retVal = JSON.parse(data.toString());
    return retVal;
}
exports.readJson = readJson;
function insertBetweenPlacweHolders(filePath, data, beginPlaceHolder, endPlaceHolder) {
    var _a, _b, _c, _d, _e, _f;
    var writeData = fs_1.readFileSync(filePath);
    if (!fs_1.existsSync(filePath)) {
        fs_1.writeFileSync(filePath, writeData);
    }
    var fileContent = fs_1.readFileSync(filePath).toString();
    var top = (_b = (_a = fileContent === null || fileContent === void 0 ? void 0 : fileContent.split) === null || _a === void 0 ? void 0 : _a.call(fileContent, beginPlaceHolder)) === null || _b === void 0 ? void 0 : _b[0];
    var bottom = (_f = (_e = (_c = fileContent === null || fileContent === void 0 ? void 0 : fileContent.split) === null || _c === void 0 ? void 0 : (_d = _c.call(fileContent, endPlaceHolder)).reverse) === null || _e === void 0 ? void 0 : _e.call(_d)) === null || _f === void 0 ? void 0 : _f[0];
    fs_1.writeFileSync(filePath, top + "\n\r" + beginPlaceHolder + "\n\r" + data + "\n\r" + endPlaceHolder + "\n\r" + bottom);
}
exports.insertBetweenPlacweHolders = insertBetweenPlacweHolders;
function fileLines(path, lineSeparator) {
    var _a;
    if (lineSeparator === void 0) { lineSeparator = /[\n|\r]/; }
    if (!path)
        return null;
    try {
        var data = (_a = fs_1.readFileSync(path)) === null || _a === void 0 ? void 0 : _a.toString();
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
    var buffer = data instanceof Buffer ? data : Buffer.from(data);
    var zippBuffer = zlib_1.gzipSync(buffer, zLibOptions);
    fs_1.writeFileSync(filePath, zippBuffer, writeFileOptions);
}
exports.writeGZip = writeGZip;
function readGZip(path, readFileOptions, zlibOptions) {
    var data = fs_1.readFileSync(path, readFileOptions);
    return zlib_1.unzipSync(data, zlibOptions);
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
var exists = function (path) {
    return promises_1.stat(path)
        .then(function () { return true; })
        .catch(function () { return false; });
};
exports.exists = exists;
//# sourceMappingURL=fileSys.js.map