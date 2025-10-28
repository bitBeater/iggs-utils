import { Duration } from "./time";
/**
 * A simple timer that can be started, paused, and resumed.
 * @example
 * ```js
 * import { Timer } from 'iggs-utils/time/timer';
 *
 * const timer = new Timer(5000, (totalDuration) => {
 *     console.log(`Timer completed in ${totalDuration} ms`);
 * });
 *
 * timer.start();
 *
 * // Pause the timer after 2 seconds
 * setTimeout(() => {
 *     timer.pause();
 *     console.log('Timer paused');
 * }, 2000);
 *
 * // Resume the timer after another 3 seconds
 * setTimeout(() => {
 *     timer.start();
 *     console.log('Timer resumed');
 * }, 5000);
 * ```
 */
export declare class Timer {
    #private;
    private duration;
    private cb;
    /**
     * The time when the timer was started for the first time
     */
    private firstStartTime;
    /** The time when the timer was finished */
    private finishedTime;
    /** The time when the timer was started last time */
    private startTime;
    /** The time when the timer was stopped last time */
    private stopTime;
    /** The total elapsed timer time in milliseconds */
    private elapsedMs;
    /** milliseconds to be timed  */
    private durationMs;
    private timeoutId;
    constructor(duration: Duration | number, cb: (totalDuration?: number) => void);
    /**
     * Start or resume the timer.
     *
     * @returns The time left in milliseconds
     */
    start(): number;
    /**
     * Pause the timer.
     *
     * @returns The elapsed time in milliseconds
     */
    pause(): number;
    get stopped(): boolean;
    get completed(): boolean;
    get elapsedTimeMs(): number;
}
//# sourceMappingURL=timer.d.ts.map