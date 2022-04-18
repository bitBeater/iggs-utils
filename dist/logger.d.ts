export declare enum LogLevel {
    TRACE = 0,
    DEBUG = 1,
    INFO = 2,
    WARN = 3,
    ERROR = 4,
    FATAL = 5,
    OFF = 6
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
export declare const debug: (...data: any[]) => void;
export declare const info: (...data: any[]) => void;
export declare const warn: (...data: any[]) => void;
export declare const error: (...data: any[]) => void;
export declare const fatal: (...data: any[]) => void;
export declare const trace: (...data: any[]) => void;
export declare const getLogger: () => {
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
};
export declare const setLogger: (logger: Logger) => void;
export declare const setLogLevel: (logLevel: LogLevel) => void;
//# sourceMappingURL=logger.d.ts.map