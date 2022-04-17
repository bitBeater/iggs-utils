"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setLogLevel = exports.setLogger = exports.trace = exports.fatal = exports.error = exports.warn = exports.info = exports.debug = exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["OFF"] = 0] = "OFF";
    LogLevel[LogLevel["FATAL"] = 1] = "FATAL";
    LogLevel[LogLevel["ERROR"] = 2] = "ERROR";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["INFO"] = 4] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 5] = "DEBUG";
    LogLevel[LogLevel["TRACE"] = 6] = "TRACE";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var actualLogger = {
    debug: (...data) => console.debug(`[${new Date().toJSON()}] DEBUG:`, ...data),
    info: (...data) => console.info(`[${new Date().toJSON()}] INFO:`, ...data),
    warn: (...data) => console.warn(`[${new Date().toJSON()}] WARN:`, ...data),
    error: (...data) => {
        console.error(`[${new Date().toJSON()}] ERROR:`, ...data), printStack(data);
    },
    fatal: (...data) => {
        console.error(`[${new Date().toJSON()}] FATAL:`, ...data), printStack(data);
    },
    trace: (...data) => console.info(`[${new Date().toJSON()}] TRACE:`, ...data),
};
let _logLevel = LogLevel.OFF;
const _logger = {
    trace: (...data) => {
        if (_logLevel >= LogLevel.TRACE)
            actualLogger === null || actualLogger === void 0 ? void 0 : actualLogger.trace(...data);
    },
    debug: (...data) => {
        if (_logLevel >= LogLevel.DEBUG)
            actualLogger === null || actualLogger === void 0 ? void 0 : actualLogger.debug(...data);
    },
    info: (...data) => {
        if (_logLevel >= LogLevel.INFO)
            actualLogger === null || actualLogger === void 0 ? void 0 : actualLogger.info(...data);
    },
    warn: (...data) => {
        if (_logLevel >= LogLevel.WARN)
            actualLogger === null || actualLogger === void 0 ? void 0 : actualLogger.warn(...data);
    },
    error: (...data) => {
        if (_logLevel >= LogLevel.ERROR)
            actualLogger === null || actualLogger === void 0 ? void 0 : actualLogger.error(...data);
    },
    fatal: (...data) => {
        if (_logLevel >= LogLevel.FATAL)
            actualLogger === null || actualLogger === void 0 ? void 0 : actualLogger.error(...data);
    },
};
const debug = (...data) => _logger.debug(data);
exports.debug = debug;
const info = (...data) => _logger.info(data);
exports.info = info;
const warn = (...data) => _logger.warn(data);
exports.warn = warn;
const error = (...data) => _logger.error(data);
exports.error = error;
const fatal = (...data) => _logger.fatal(data);
exports.fatal = fatal;
const trace = (...data) => _logger.trace(data);
exports.trace = trace;
const setLogger = (logger) => {
    if (!logger)
        (0, exports.warn)('[LOGGER]', 'setting undefined logger');
    actualLogger = logger;
};
exports.setLogger = setLogger;
const setLogLevel = (logLevel) => {
    if (_logLevel == null)
        (0, exports.warn)('[LOGGER]', 'setting undefined log level');
    logLevel = _logLevel;
};
exports.setLogLevel = setLogLevel;
function printStack(errors) {
    var _a;
    (_a = errors === null || errors === void 0 ? void 0 : errors.filter(e => e === null || e === void 0 ? void 0 : e.stack)) === null || _a === void 0 ? void 0 : _a.forEach(e => console.error(e === null || e === void 0 ? void 0 : e.stack));
}
//# sourceMappingURL=logger.js.map