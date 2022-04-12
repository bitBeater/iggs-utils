"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookiesToObj = exports.objToCookies = exports.httpRequest = void 0;
const http_1 = require("http");
const https_1 = require("https");
const querystring_1 = require("querystring");
const url_1 = require("url");
function httpRequest(reqOpts, body) {
    const retVAl = new Promise((resolve, reject) => {
        reqOpts = adaptRequestOpts(reqOpts);
        const reqFn = getRequestFn(reqOpts);
        const req = reqFn(reqOpts, response => {
            let data = '';
            // a data chunk has been received.
            response.on('data', chunk => {
                data += chunk;
            });
            // complete response has been received.
            response.on('end', () => {
                resolve({ response, data });
            });
        }).on('error', err => {
            reject(err);
        });
        if (body)
            req.write(body, e => reject(e));
        req.flushHeaders();
        req.end();
    });
    return retVAl;
}
exports.httpRequest = httpRequest;
function getProtocol(req) {
    var _a;
    let rq = req;
    if (typeof rq === 'string') {
        rq = new url_1.URL(rq);
    }
    return (_a = rq === null || rq === void 0 ? void 0 : rq.protocol) === null || _a === void 0 ? void 0 : _a.replace(/\:/gm, '');
}
function getRequestFn(req) {
    const protocol = getProtocol(req);
    if (typeof req === 'string' || req instanceof url_1.URL) {
        if (protocol === 'http')
            return http_1.get;
        if (protocol === 'https')
            return https_1.get;
        return http_1.get;
    }
    if (protocol === 'http')
        return http_1.request;
    if (protocol === 'https')
        return https_1.request;
    return http_1.request;
}
//--------------------------------------------------------------------------------------------------------------------------------
function objToCookies(obj) {
    let retVal = '';
    let cookies = [];
    for (const key of Object.keys(obj))
        if (obj[key])
            cookies.push(`${key}=${obj[key]}`);
    retVal = cookies.join(';');
    return retVal;
}
exports.objToCookies = objToCookies;
function cookiesToObj(cookiesStr) {
    if (!cookiesStr)
        return;
    let cookiesObj = {};
    let cookiesArr = cookiesStr.split(';');
    for (const cookieStr of cookiesArr) {
        const [key, value] = cookieStr.split('=');
        cookiesObj[key.trim()] = value.trim();
    }
    return cookiesObj;
}
exports.cookiesToObj = cookiesToObj;
function adaptRequestOpts(reqOpts) {
    if (!reqOpts)
        return;
    if (typeof reqOpts === 'string' || reqOpts instanceof url_1.URL)
        return reqOpts;
    if (!reqOpts.url)
        return reqOpts;
    const url = new url_1.URL(reqOpts.url);
    reqOpts.protocol = url.protocol;
    reqOpts.port = url.port;
    reqOpts.host = url.host;
    reqOpts.hostname = url.hostname;
    reqOpts.path = url.pathname;
    if (reqOpts === null || reqOpts === void 0 ? void 0 : reqOpts.searchParams)
        reqOpts.path += '?' + (0, querystring_1.stringify)(reqOpts === null || reqOpts === void 0 ? void 0 : reqOpts.searchParams);
    return reqOpts;
}
//---------------------------------------------------------------------------------------------------------------------------------
//# sourceMappingURL=http.js.map