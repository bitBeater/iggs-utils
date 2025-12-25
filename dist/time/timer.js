"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Timer_started, _Timer_paused, _Timer_running, _Timer_completed;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
const time_1 = require("./time");
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
class Timer {
    constructor(duration, onComplete) {
        this.duration = duration;
        this.onComplete = onComplete;
        /**
         * The time when the timer was started for the first time
         */
        this.startTime = -1;
        /** The time when the timer finished */
        this.finishedTime = -1;
        /** The time when the timer was started last time */
        this.lastStartTime = 0;
        /** The running elapsed time*/
        this.elapsedMs = 0;
        /** milliseconds to be timed  */
        this.durationMs = 0;
        /**
         *  Indicates whether the timer has been started at least once.
         */
        _Timer_started.set(this, false);
        /**
         * Indicates whether the timer is currently paused.
         */
        _Timer_paused.set(this, false);
        /**
         * Indicates whether the timer is running.
         */
        _Timer_running.set(this, false);
        /**
         * Indicates whether the timer has completed.
         */
        _Timer_completed.set(this, false);
        if (typeof this.duration === 'number') {
            this.durationMs = this.duration;
        }
        else {
            this.durationMs = (0, time_1.durationToMilliSeconds)(this.duration);
        }
    }
    /**
     * Start or resume the timer.
     *
     * @returns The time left in milliseconds
     */
    start() {
        if (__classPrivateFieldGet(this, _Timer_running, "f") || __classPrivateFieldGet(this, _Timer_completed, "f"))
            return;
        if (!__classPrivateFieldGet(this, _Timer_started, "f")) {
            this.startTime = Date.now();
            __classPrivateFieldSet(this, _Timer_started, true, "f");
        }
        __classPrivateFieldSet(this, _Timer_running, true, "f");
        __classPrivateFieldSet(this, _Timer_paused, false, "f");
        this.lastStartTime = Date.now();
        const timeLeftMs = this.durationMs - this.elapsedMs;
        this.timeoutId = setTimeout(() => {
            __classPrivateFieldSet(this, _Timer_running, __classPrivateFieldSet(this, _Timer_paused, false, "f"), "f");
            __classPrivateFieldSet(this, _Timer_completed, true, "f");
            this.finishedTime = Date.now();
            const totalDuration = this.finishedTime - this.startTime;
            this.onComplete?.(totalDuration);
        }, timeLeftMs);
        this.onStart?.(timeLeftMs);
        return timeLeftMs;
    }
    /**
     * Pause the timer.
     *
     * @returns The elapsed time in milliseconds
     */
    pause() {
        if (!__classPrivateFieldGet(this, _Timer_running, "f"))
            return;
        __classPrivateFieldSet(this, _Timer_running, false, "f");
        __classPrivateFieldSet(this, _Timer_paused, true, "f");
        clearTimeout(this.timeoutId);
        this.elapsedMs += Date.now() - this.lastStartTime;
        this.onPause?.(this.elapsedMs);
        return this.elapsedMs;
    }
    /**
     * Indicates whether the timer is currently paused.
     */
    get paused() {
        return __classPrivateFieldGet(this, _Timer_paused, "f");
    }
    /**
     * Indicates whether the timer has completed.
     */
    get completed() {
        return __classPrivateFieldGet(this, _Timer_completed, "f");
    }
    /**
     * Indicates whether the timer is running.
     */
    get running() {
        return __classPrivateFieldGet(this, _Timer_running, "f");
    }
    /**
     *  Indicates whether the timer has been started at least once.
     */
    get started() {
        return __classPrivateFieldGet(this, _Timer_started, "f");
    }
    /**
     * Time elapsed while timer was running in milliseconds.
     * It does not include time while timer was paused.
     * @return Elapsed time in milliseconds
     */
    elapsedTime() {
        if (!__classPrivateFieldGet(this, _Timer_started, "f"))
            return 0;
        if (__classPrivateFieldGet(this, _Timer_paused, "f"))
            return this.elapsedMs;
        if (__classPrivateFieldGet(this, _Timer_completed, "f"))
            return this.durationMs;
        return this.elapsedMs + (Date.now() - this.lastStartTime);
    }
    /**
     * Total time elapsed, from when the timer started until it completed in milliseconds.
     * It includes time while timer was paused.
     * @return Total elapsed time in milliseconds
     */
    totalElapsedTime() {
        if (!__classPrivateFieldGet(this, _Timer_started, "f"))
            return 0;
        if (__classPrivateFieldGet(this, _Timer_completed, "f"))
            return this.finishedTime - this.startTime;
        return Date.now() - this.startTime;
    }
    /**
     * Remaining time in milliseconds.
     * @return Remaining time in milliseconds
     */
    remainingTime() {
        return this.durationMs - this.elapsedTime();
    }
}
exports.Timer = Timer;
_Timer_started = new WeakMap(), _Timer_paused = new WeakMap(), _Timer_running = new WeakMap(), _Timer_completed = new WeakMap();
//# sourceMappingURL=timer.js.map