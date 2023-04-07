"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toURL = exports.http = exports.cookieArrayToString = exports.cookieObjectToString = exports.cookieStringToObject = void 0;
const math_1 = require("../math");
const promises_1 = require("../promises");
function cookieStringToObject(cookie) {
    const cookies = {};
    const parts = cookie.split(';');
    for (const part of parts) {
        const equlIndex = part.indexOf('=');
        const [key, value] = [part.slice(0, equlIndex), part.slice(equlIndex + 1)];
        cookies[key.trim()] = value.trim();
    }
    return cookies;
}
exports.cookieStringToObject = cookieStringToObject;
function cookieObjectToString(cookie) {
    const parts = [];
    for (const key in cookie) {
        parts.push(`${key}=${cookie[key]}`);
    }
    return parts.join('; ');
}
exports.cookieObjectToString = cookieObjectToString;
function cookieArrayToString(cookies) {
    const parts = [];
    for (const cookie of cookies) {
        parts.push(`${cookie[0]}=${cookie[1]}`);
    }
    return parts.join('; ');
}
exports.cookieArrayToString = cookieArrayToString;
class HttpError extends Error {
    constructor(response) {
        super(response.statusText);
        this.response = response;
    }
}
function http(req, init, options) {
    // @ts-ignore
    return fetch(req, init)
        .then((response) => {
        if (response.ok)
            return response;
        throw new HttpError(response);
    })
        .catch((error) => {
        var _a, _b, _c, _d, _e, _f, _g;
        (_a = error === null || error === void 0 ? void 0 : error.response.body) === null || _a === void 0 ? void 0 : _a.cancel();
        if ((0, math_1.parseIntOrZero)((_b = options === null || options === void 0 ? void 0 : options.retry) === null || _b === void 0 ? void 0 : _b.retryCount) >= (0, math_1.parseIntOrZero)((_c = options === null || options === void 0 ? void 0 : options.retry) === null || _c === void 0 ? void 0 : _c.maxRetries) - 1)
            throw error;
        options.retry.retryCount = (0, math_1.parseIntOrZero)((_d = options === null || options === void 0 ? void 0 : options.retry) === null || _d === void 0 ? void 0 : _d.retryCount);
        options.retry.retryCount++;
        (_f = (_e = options === null || options === void 0 ? void 0 : options.retry) === null || _e === void 0 ? void 0 : _e.onRetry) === null || _f === void 0 ? void 0 : _f.call(_e, error, req, error === null || error === void 0 ? void 0 : error.response, options === null || options === void 0 ? void 0 : options.retry);
        return (0, promises_1.delay)((0, math_1.parseIntOrZero)((_g = options === null || options === void 0 ? void 0 : options.retry) === null || _g === void 0 ? void 0 : _g.retryDelay)).then(() => http(req, init, options));
    });
}
exports.http = http;
function toURL(httpRequest) {
    // @ts-ignore
    return new URL((httpRequest === null || httpRequest === void 0 ? void 0 : httpRequest.url) || httpRequest.toString());
}
exports.toURL = toURL;
//# sourceMappingURL=http.js.map