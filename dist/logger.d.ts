export declare enum LogLevel {
    TRACE = 0,
    DEBUG = 1,
    INFO = 2,
    WARN = 3,
    ERROR = 4,
    FATAL = 5,
    OFF = 6
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
/** @deprecated */
export declare const debug: (...data: Loggable[]) => void;
/** @deprecated */
export declare const info: (...data: Loggable[]) => void;
/** @deprecated */
export declare const warn: (...data: Loggable[]) => void;
/** @deprecated */
export declare const error: (...data: Loggable[]) => void;
/** @deprecated */
export declare const fatal: (...data: Loggable[]) => void;
/** @deprecated */
export declare const trace: (...data: Loggable[]) => void;
/** @deprecated */
export declare const getLogger: () => {
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
};
/** @deprecated */
export declare const setLogger: (logger: LogWriter) => void;
/** @deprecated */
export declare const setLogLevel: (logLevel: LogLevel) => void;
export declare class Logger implements LogWriter {
    logLevel: LogLevel;
    logWriter: LogWriter;
    prefix: string;
    constructor(conf?: {
        logWriter?: LogWriter;
        logLevel?: LogLevel;
        prefix?: string;
    });
    trace(...data: Loggable[]): void;
    debug(...data: Loggable[]): void;
    info(...data: Loggable[]): void;
    warn(...data: Loggable[]): void;
    error(...data: Loggable[]): void;
    fatal(...data: Loggable[]): void;
}
//# sourceMappingURL=logger.d.ts.map