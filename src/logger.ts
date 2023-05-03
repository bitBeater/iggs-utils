export enum LogLevel {
	TRACE,
	DEBUG,
	INFO,
	WARN,
	ERROR,
	FATAL,
	OFF,
}

export type Loggable = string | number | boolean | object | undefined | null | Error | Loggable[];

export interface LogWriter {
	/**
	 * Designates fine-grained informational events that are most useful to debug an application.
	 */
	debug: (...msg: Loggable[]) => void;
	/**
	 * Designates informational messages that highlight the progress of the application at coarse-grained level.
	 */
	info: (...msg: Loggable[]) => void;
	/**
	 * Designates potentially harmful situations.
	 */
	warn: (...msg: Loggable[]) => void;
	/**
	 * Designates error events that might still allow the application to continue running.
	 */
	error: (...msg: Loggable[]) => void;
	/**
	 * Designates very severe error events that will presumably lead the application to abort.
	 */
	fatal: (...msg: Loggable[]) => void;
	/**
	 * Designates finer-grained informational events than the DEBUG.
	 */
	trace: (...msg: Loggable[]) => void;
}

const defaultLogWriter: LogWriter = {
	debug: (...data: Loggable[]) => console.debug(`[${new Date().toJSON()}] DEBUG:`, ...data),
	info: (...data: Loggable[]) => console.info(`[${new Date().toJSON()}] INFO:`, ...data),
	warn: (...data: Loggable[]) => console.warn(`[${new Date().toJSON()}] WARN:`, ...data),
	error: (...data: Loggable[]) => {
		console.error(`[${new Date().toJSON()}] ERROR:`, ...data), printStack(data);
	},
	fatal: (...data: Loggable[]) => {
		console.error(`[${new Date().toJSON()}] FATAL:`, ...data), printStack(data);
	},
	trace: (...data: Loggable[]) => console.info(`[${new Date().toJSON()}] TRACE:`, ...data),
};

let actualLogWriter = { ...defaultLogWriter };

let _logLevel = LogLevel.OFF;

const _logger: LogWriter = {
	trace: (...data: Loggable[]) => {
		if (_logLevel <= LogLevel.TRACE) actualLogWriter?.trace(...data);
	},
	debug: (...data: Loggable[]) => {
		if (_logLevel <= LogLevel.DEBUG) actualLogWriter?.debug(...data);
	},

	info: (...data: Loggable[]) => {
		if (_logLevel <= LogLevel.INFO) actualLogWriter?.info(...data);
	},
	warn: (...data: Loggable[]) => {
		if (_logLevel <= LogLevel.WARN) actualLogWriter?.warn(...data);
	},
	error: (...data: Loggable[]) => {
		if (_logLevel <= LogLevel.ERROR) actualLogWriter?.error(...data);
	},
	fatal: (...data: Loggable[]) => {
		if (_logLevel <= LogLevel.FATAL) actualLogWriter?.error(...data);
	},
};

/** @deprecated */
export const debug = (...data: Loggable[]) => _logger.debug(...data);
/** @deprecated */
export const info = (...data: Loggable[]) => _logger.info(...data);
/** @deprecated */
export const warn = (...data: Loggable[]) => _logger.warn(...data);
/** @deprecated */
export const error = (...data: Loggable[]) => _logger.error(...data);
/** @deprecated */
export const fatal = (...data: Loggable[]) => _logger.fatal(...data);
/** @deprecated */
export const trace = (...data: Loggable[]) => _logger.trace(...data);
/** @deprecated */
export const getLogger = () => ({ ..._logger });

/** @deprecated */
export const setLogger = (logger: LogWriter) => {
	if (!logger) console.warn('[LOGGER]', 'setting undefined logger');
	actualLogWriter = logger;
};
/** @deprecated */
export const setLogLevel = (logLevel: LogLevel) => {
	if (_logLevel == null) console.warn('[LOGGER]', 'setting undefined log level');
	_logLevel = logLevel;
};

function printStack(errors: any[]) {
	errors?.filter(e => e?.stack)?.forEach(e => console.error(e?.stack));
}

export class Logger implements LogWriter {
	logLevel = LogLevel.WARN;
	logWriter = defaultLogWriter;
	prefix = '';
	constructor(conf?: { logWriter?: LogWriter; logLevel?: LogLevel; prefix?: string }) {
		this.logLevel = conf?.logLevel ?? this.logLevel;
		this.logWriter = conf?.logWriter ?? this.logWriter;
		this.prefix = conf?.prefix ?? this.prefix;
	}

	trace(...data: Loggable[]) {
		if (this.logLevel <= LogLevel.TRACE) this.logWriter?.trace(this.prefix, ...data);
	}

	debug(...data: Loggable[]) {
		if (this.logLevel <= LogLevel.DEBUG) this.logWriter?.debug(this.prefix, ...data);
	}

	info(...data: Loggable[]) {
		if (this.logLevel <= LogLevel.INFO) this.logWriter?.info(this.prefix, ...data);
	}
	warn(...data: Loggable[]) {
		if (this.logLevel <= LogLevel.WARN) this.logWriter?.warn(this.prefix, ...data);
	}
	error(...data: Loggable[]) {
		if (this.logLevel <= LogLevel.ERROR) this.logWriter?.error(this.prefix, ...data);
	}
	fatal(...data: Loggable[]) {
		if (this.logLevel <= LogLevel.FATAL) this.logWriter?.error(this.prefix, ...data);
	}
}
