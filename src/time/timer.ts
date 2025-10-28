import { Duration, durationToMilliSeconds } from "./time";




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
export class Timer {

    /**
     * The time when the timer was started for the first time
     */
    private firstStartTime: number = -1;

    /** The time when the timer was finished */
    private finishedTime: number = -1;

    /** The time when the timer was started last time */
    private startTime: number = 0;

    /** The time when the timer was stopped last time */
    private stopTime: number = 0;

    /** The total elapsed timer time in milliseconds */
    private elapsedMs: number = 0;

    /** milliseconds to be timed  */
    private durationMs: number = 0;

    private timeoutId: any;
    #stopped: boolean = true;
    #completed: boolean = false;

    constructor(private duration: Duration | number, private cb: (totalDuration?: number) => void) {
        if (typeof duration === 'number') {
            this.durationMs = duration;
        } else {
            this.durationMs = durationToMilliSeconds(duration);
        }
    }


    /**
     * Start or resume the timer.
     * 
     * @returns The time left in milliseconds
     */
    start(): number {

        if (!this.#stopped) return;

        if (this.firstStartTime === -1)
            this.firstStartTime = Date.now();

        const timeLeftMs = this.durationMs - this.elapsedMs;

        this.timeoutId = setTimeout(() => {
            this.pause();
            this.#completed = true;
            const totalDuration = Date.now() - this.firstStartTime;
            this.finishedTime = Date.now()
            this.cb(totalDuration);

        }, timeLeftMs);

        this.startTime = Date.now();
        this.#stopped = false;

        return timeLeftMs;
    }

    /**
     * Pause the timer.
     * 
     * @returns The elapsed time in milliseconds
     */
    pause(): number {
        if (this.#stopped) return;
        clearTimeout(this.timeoutId);
        this.stopTime = Date.now();
        this.elapsedMs += (Date.now() - this.startTime);
        this.#stopped = true;

        return this.elapsedMs;
    }



    get stopped(): boolean {
        return this.#stopped;
    }

    get completed(): boolean {
        return this.#completed;
    }

    get elapsedTimeMs(): number {

        if (this.#completed) return this.durationMs;
        if (this.#stopped) return this.elapsedMs;


        return this.elapsedMs + (Date.now() - this.startTime);
    }
}