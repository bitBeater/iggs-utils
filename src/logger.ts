export enum LogLevel {
	OFF,
	FATAL,
	ERROR,
	WARN,
	INFO,
	DEBUG,
	TRACE,
}

export interface Logger {
	/**
	 * Designates fine-grained informational events that are most useful to debug an application.
	 */
	debug: (...msg: any[]) => void;
	/**
	 * Designates informational messages that highlight the progress of the application at coarse-grained level.
	 */
	info: (...msg: any[]) => void;
	/**
	 * Designates potentially harmful situations.
	 */
	warn: (...msg: any[]) => void;
	/**
	 * Designates error events that might still allow the application to continue running.
	 */
	error: (...msg: any[]) => void;
	/**
	 * Designates very severe error events that will presumably lead the application to abort.
	 */
	fatal: (...msg: any[]) => void;
	/**
	 * Designates finer-grained informational events than the DEBUG.
	 */
	trace: (...msg: any[]) => void;
}

var actualLogger: Logger = {
	debug: (...data: any[]) => console.debug(`[${new Date().toJSON()}] DEBUG:`, ...data),
	info: (...data: any[]) => console.info(`[${new Date().toJSON()}] INFO:`, ...data),
	warn: (...data: any[]) => console.warn(`[${new Date().toJSON()}] WARN:`, ...data),
	error: (...data: any[]) => {
		console.error(`[${new Date().toJSON()}] ERROR:`, ...data), printStack(data);
	},
	fatal: (...data: any[]) => {
		console.error(`[${new Date().toJSON()}] FATAL:`, ...data), printStack(data);
	},
	trace: (...data: any[]) => console.info(`[${new Date().toJSON()}] TRACE:`, ...data),
};

let _logLevel = LogLevel.OFF;

const _logger: Logger = {
	trace: (...data: any[]) => {
		if (_logLevel >= LogLevel.TRACE) actualLogger?.trace(...data);
	},
	debug: (...data: any[]) => {
		if (_logLevel >= LogLevel.DEBUG) actualLogger?.debug(...data);
	},

	info: (...data: any[]) => {
		if (_logLevel >= LogLevel.INFO) actualLogger?.info(...data);
	},
	warn: (...data: any[]) => {
		if (_logLevel >= LogLevel.WARN) actualLogger?.warn(...data);
	},
	error: (...data: any[]) => {
		if (_logLevel >= LogLevel.ERROR) actualLogger?.error(...data);
	},
	fatal: (...data: any[]) => {
		if (_logLevel >= LogLevel.FATAL) actualLogger?.error(...data);
	},
};

export const debug = (...data: any[]) => _logger.debug(data);
export const info = (...data: any[]) => _logger.info(data);
export const warn = (...data: any[]) => _logger.warn(data);
export const error = (...data: any[]) => _logger.error(data);
export const fatal = (...data: any[]) => _logger.fatal(data);
export const trace = (...data: any[]) => _logger.trace(data);
export const getLogger = () => ({ ..._logger });

export const setLogger = (logger: Logger) => {
	if (!logger) warn('[LOGGER]', 'setting undefined logger');
	actualLogger = logger;
};

export const setLogLevel = (logLevel: LogLevel) => {
	if (_logLevel == null) warn('[LOGGER]', 'setting undefined log level');
	logLevel = _logLevel;
};

function printStack(errors: any[]) {
	errors?.filter(e => e?.stack)?.forEach(e => console.error(e?.stack));
}
