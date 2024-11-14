"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepLogger = exports.Logger = exports.setLogLevel = exports.setLogger = exports.getLogger = exports.trace = exports.fatal = exports.error = exports.warn = exports.info = exports.debug = exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["TRACE"] = 0] = "TRACE";
    LogLevel[LogLevel["DEBUG"] = 1] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["FATAL"] = 5] = "FATAL";
    LogLevel[LogLevel["OFF"] = 6] = "OFF";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
const defaultLogWriter = {
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
let actualLogWriter = Object.assign({}, defaultLogWriter);
let _logLevel = LogLevel.OFF;
const _logger = {
    trace: (...data) => {
        if (_logLevel <= LogLevel.TRACE)
            actualLogWriter === null || actualLogWriter === void 0 ? void 0 : actualLogWriter.trace(...data);
    },
    debug: (...data) => {
        if (_logLevel <= LogLevel.DEBUG)
            actualLogWriter === null || actualLogWriter === void 0 ? void 0 : actualLogWriter.debug(...data);
    },
    info: (...data) => {
        if (_logLevel <= LogLevel.INFO)
            actualLogWriter === null || actualLogWriter === void 0 ? void 0 : actualLogWriter.info(...data);
    },
    warn: (...data) => {
        if (_logLevel <= LogLevel.WARN)
            actualLogWriter === null || actualLogWriter === void 0 ? void 0 : actualLogWriter.warn(...data);
    },
    error: (...data) => {
        if (_logLevel <= LogLevel.ERROR)
            actualLogWriter === null || actualLogWriter === void 0 ? void 0 : actualLogWriter.error(...data);
    },
    fatal: (...data) => {
        if (_logLevel <= LogLevel.FATAL)
            actualLogWriter === null || actualLogWriter === void 0 ? void 0 : actualLogWriter.error(...data);
    },
};
/** @deprecated */
const debug = (...data) => _logger.debug(...data);
exports.debug = debug;
/** @deprecated */
const info = (...data) => _logger.info(...data);
exports.info = info;
/** @deprecated */
const warn = (...data) => _logger.warn(...data);
exports.warn = warn;
/** @deprecated */
const error = (...data) => _logger.error(...data);
exports.error = error;
/** @deprecated */
const fatal = (...data) => _logger.fatal(...data);
exports.fatal = fatal;
/** @deprecated */
const trace = (...data) => _logger.trace(...data);
exports.trace = trace;
/** @deprecated */
const getLogger = () => (Object.assign({}, _logger));
exports.getLogger = getLogger;
/** @deprecated */
const setLogger = (logger) => {
    if (!logger)
        console.warn('[LOGGER]', 'setting undefined logger');
    actualLogWriter = logger;
};
exports.setLogger = setLogger;
/** @deprecated */
const setLogLevel = (logLevel) => {
    if (_logLevel == null)
        console.warn('[LOGGER]', 'setting undefined log level');
    _logLevel = logLevel;
};
exports.setLogLevel = setLogLevel;
function printStack(errors) {
    var _a;
    (_a = errors === null || errors === void 0 ? void 0 : errors.filter(e => e === null || e === void 0 ? void 0 : e.stack)) === null || _a === void 0 ? void 0 : _a.forEach(e => console.error(e === null || e === void 0 ? void 0 : e.stack));
}
class Logger {
    constructor(conf) {
        var _a, _b, _c;
        this.logLevel = LogLevel.WARN;
        this.logWriter = defaultLogWriter;
        this.prefix = '';
        if (typeof conf === 'string') {
            this.prefix = conf;
            return;
        }
        this.logLevel = (_a = conf === null || conf === void 0 ? void 0 : conf.logLevel) !== null && _a !== void 0 ? _a : this.logLevel;
        this.logWriter = (_b = conf === null || conf === void 0 ? void 0 : conf.logWriter) !== null && _b !== void 0 ? _b : this.logWriter;
        this.prefix = (_c = conf === null || conf === void 0 ? void 0 : conf.prefix) !== null && _c !== void 0 ? _c : this.prefix;
    }
    trace(...data) {
        var _a;
        if (this.logLevel <= LogLevel.TRACE)
            (_a = this.logWriter) === null || _a === void 0 ? void 0 : _a.trace(this.prefix, ...data);
    }
    debug(...data) {
        var _a;
        if (this.logLevel <= LogLevel.DEBUG)
            (_a = this.logWriter) === null || _a === void 0 ? void 0 : _a.debug(this.prefix, ...data);
    }
    info(...data) {
        var _a;
        if (this.logLevel <= LogLevel.INFO)
            (_a = this.logWriter) === null || _a === void 0 ? void 0 : _a.info(this.prefix, ...data);
    }
    warn(...data) {
        var _a;
        if (this.logLevel <= LogLevel.WARN)
            (_a = this.logWriter) === null || _a === void 0 ? void 0 : _a.warn(this.prefix, ...data);
    }
    error(...data) {
        var _a;
        if (this.logLevel <= LogLevel.ERROR)
            (_a = this.logWriter) === null || _a === void 0 ? void 0 : _a.error(this.prefix, ...data);
    }
    fatal(...data) {
        var _a;
        if (this.logLevel <= LogLevel.FATAL)
            (_a = this.logWriter) === null || _a === void 0 ? void 0 : _a.error(this.prefix, ...data);
    }
    /**
     * @unstable
     * @todo needs testing
     *
     * Creates a new StepLogger with the given name.
     * @example
     * ```ts
     * const logger = new Logger('[main]');
     *
     * logger.info('creating a step logger');
     *
     * const step = logger.step('[step]');
     * step.info('doing something...');
     * step.finish();
     *
     *
     * logger.info('after step logger has finished');
     *
     * // Output:
     * // [2021-08-31T14:00:00.000Z] INFO: [main] creating a step logger
     * // [2021-08-31T14:00:00.000Z] INFO: [main]:[step] started
     * // [2021-08-31T14:00:00.000Z] INFO: [main]:[step] doing something...
     * // [2021-08-31T14:00:00.000Z] INFO: [main]:[step] finished in 0ms
     * // [2021-08-31T14:00:00.000Z] INFO: [main] after step logger has finished
     * ```
     *
     * @param name
     * @returns a new StepLogger wrapping this logger.
     *
     */
    step(name) {
        return new StepLogger(this, name);
    }
}
exports.Logger = Logger;
/**
 * Wrapper Logger that logs the start and end of a step.
 * When it is created, it logs the start of the step.
 * When the finish method is called, it logs the end of the step, and the logWriter is set to null to prevent further logging.
 */
class StepLogger extends Logger {
    constructor(logger, stepName) {
        super(logger);
        this.startTime = Date.now();
        this.prefix = (logger.prefix ? logger.prefix + ':' : '') + stepName;
        this.info(`started`);
    }
    finish() {
        const duration = Date.now() - this.startTime;
        this.info(`finished in ${duration}ms`);
        this.logWriter = null;
    }
}
exports.StepLogger = StepLogger;
//# sourceMappingURL=logger.js.map