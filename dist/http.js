'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.cookiesToObj = exports.objToCookies = exports.httpRequest = void 0;
var http_1 = require('http');
var https_1 = require('https');
var querystring_1 = require('querystring');
var url_1 = require('url');
function httpRequest(reqOpts, body) {
	var retVAl = new Promise(function (resolve, reject) {
		reqOpts = adaptRequestOpts(reqOpts);
		var reqFn = getRequestFn(reqOpts);
		var req = reqFn(reqOpts, function (response) {
			var data = '';
			// a data chunk has been received.
			response.on('data', function (chunk) {
				data += chunk;
			});
			// complete response has been received.
			response.on('end', function () {
				resolve({ response: response, data: data });
			});
		}).on('error', function (err) {
			reject(err);
		});
		if (body) req.write(body);
		req.flushHeaders();
		req.end();
	});
	return retVAl;
}
exports.httpRequest = httpRequest;
function getProtocol(req) {
	var _a;
	var rq = req;
	if (typeof rq === 'string') {
		rq = new url_1.URL(rq);
	}
	return (_a = rq === null || rq === void 0 ? void 0 : rq.protocol) === null || _a === void 0 ? void 0 : _a.replace(/\:/gm, '');
}
function getRequestFn(req) {
	var protocol = getProtocol(req);
	if (typeof req === 'string' || req instanceof url_1.URL) {
		if (protocol === 'http') return http_1.get;
		if (protocol === 'https') return https_1.get;
		return http_1.get;
	}
	if (protocol === 'http') return http_1.request;
	if (protocol === 'https') return https_1.request;
	return http_1.request;
}
//--------------------------------------------------------------------------------------------------------------------------------
function objToCookies(obj) {
	var retVal = '';
	var cookies = [];
	for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
		var key = _a[_i];
		if (obj[key]) cookies.push(key + '=' + obj[key]);
	}
	retVal = cookies.join(';');
	return retVal;
}
exports.objToCookies = objToCookies;
function cookiesToObj(cookiesStr) {
	if (!cookiesStr) return;
	var cookiesObj = {};
	var cookiesArr = cookiesStr.split(';');
	for (var _i = 0, cookiesArr_1 = cookiesArr; _i < cookiesArr_1.length; _i++) {
		var cookieStr = cookiesArr_1[_i];
		var _a = cookieStr.split('='),
			key = _a[0],
			value = _a[1];
		cookiesObj[key.trim()] = value.trim();
	}
	return cookiesObj;
}
exports.cookiesToObj = cookiesToObj;
function adaptRequestOpts(reqOpts) {
	if (!reqOpts) return;
	if (typeof reqOpts === 'string' || reqOpts instanceof url_1.URL) return reqOpts;
	if (!reqOpts.url) return reqOpts;
	var url = new url_1.URL(reqOpts.url);
	reqOpts.protocol = url.protocol;
	reqOpts.port = url.port;
	reqOpts.host = url.host;
	reqOpts.hostname = url.hostname;
	reqOpts.path = url.pathname;
	if (reqOpts === null || reqOpts === void 0 ? void 0 : reqOpts.searchParams) reqOpts.path += '?' + querystring_1.stringify(reqOpts === null || reqOpts === void 0 ? void 0 : reqOpts.searchParams);
	return reqOpts;
}
//---------------------------------------------------------------------------------------------------------------------------------
//# sourceMappingURL=../src/dist/http.js.map
