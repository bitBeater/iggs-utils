"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookieStringToObject = cookieStringToObject;
exports.cookieObjectToString = cookieObjectToString;
exports.cookieArrayToString = cookieArrayToString;
exports.http = http;
exports.toURL = toURL;
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
function cookieObjectToString(cookie) {
    const parts = [];
    for (const key in cookie) {
        parts.push(`${key}=${cookie[key]}`);
    }
    return parts.join('; ');
}
function cookieArrayToString(cookies) {
    const parts = [];
    for (const cookie of cookies) {
        parts.push(`${cookie[0]}=${cookie[1]}`);
    }
    return parts.join('; ');
}
class HttpError extends Error {
    constructor(response) {
        super(response.statusText);
        this.response = response;
    }
}
function http(req, init = {}, options) {
    const { reqTimeOutTimer, controller } = requestTimeout(options);
    if (init.signal)
        controller?.signal?.addEventListener('abort', e => init.signal?.dispatchEvent(e));
    else
        init.signal = controller?.signal;
    return fetch(req, init)
        .finally(() => clearTimeout(reqTimeOutTimer))
        .then((response) => {
        if (response.ok)
            return response;
        throw new HttpError(response);
    })
        .catch((error) => {
        error?.response?.body?.cancel();
        if ((0, math_1.parseIntOrZero)(options?.retry?.retryCount) >= (0, math_1.parseIntOrZero)(options?.retry?.maxRetries) - 1)
            throw error;
        options.retry.retryCount = (0, math_1.parseIntOrZero)(options?.retry?.retryCount);
        options.retry.retryCount++;
        options?.retry?.onRetry?.(error, req, error?.response, options?.retry);
        return (0, promises_1.delay)((0, math_1.parseIntOrZero)(options?.retry?.retryDelay)).then(() => http(req, init, options));
    });
}
function toURL(httpRequest) {
    // @ts-ignore
    return new URL(httpRequest?.url || httpRequest.toString());
}
function requestTimeout(options) {
    if (!options?.timeout)
        return {};
    const controller = new AbortController();
    const reqTimeOutTimer = setTimeout(() => controller.abort(), options.timeout);
    return { reqTimeOutTimer, controller };
}
//# sourceMappingURL=http.js.map