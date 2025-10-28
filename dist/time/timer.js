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
var _Timer_stopped, _Timer_completed;
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
    constructor(duration, cb) {
        this.duration = duration;
        this.cb = cb;
        /**
         * The time when the timer was started for the first time
         */
        this.firstStartTime = -1;
        /** The time when the timer was finished */
        this.finishedTime = -1;
        /** The time when the timer was started last time */
        this.startTime = 0;
        /** The time when the timer was stopped last time */
        this.stopTime = 0;
        /** The total elapsed timer time in milliseconds */
        this.elapsedMs = 0;
        /** milliseconds to be timed  */
        this.durationMs = 0;
        _Timer_stopped.set(this, true);
        _Timer_completed.set(this, false);
        if (typeof duration === 'number') {
            this.durationMs = duration;
        }
        else {
            this.durationMs = (0, time_1.durationToMilliSeconds)(duration);
        }
    }
    /**
     * Start or resume the timer.
     *
     * @returns The time left in milliseconds
     */
    start() {
        if (!__classPrivateFieldGet(this, _Timer_stopped, "f"))
            return;
        if (this.firstStartTime === -1)
            this.firstStartTime = Date.now();
        const timeLeftMs = this.durationMs - this.elapsedMs;
        this.timeoutId = setTimeout(() => {
            this.pause();
            __classPrivateFieldSet(this, _Timer_completed, true, "f");
            const totalDuration = Date.now() - this.firstStartTime;
            this.finishedTime = Date.now();
            this.cb(totalDuration);
        }, timeLeftMs);
        this.startTime = Date.now();
        __classPrivateFieldSet(this, _Timer_stopped, false, "f");
        return timeLeftMs;
    }
    /**
     * Pause the timer.
     *
     * @returns The elapsed time in milliseconds
     */
    pause() {
        if (__classPrivateFieldGet(this, _Timer_stopped, "f"))
            return;
        clearTimeout(this.timeoutId);
        this.stopTime = Date.now();
        this.elapsedMs += (Date.now() - this.startTime);
        __classPrivateFieldSet(this, _Timer_stopped, true, "f");
        return this.elapsedMs;
    }
    get stopped() {
        return __classPrivateFieldGet(this, _Timer_stopped, "f");
    }
    get completed() {
        return __classPrivateFieldGet(this, _Timer_completed, "f");
    }
    get elapsedTimeMs() {
        if (__classPrivateFieldGet(this, _Timer_completed, "f"))
            return this.durationMs;
        if (__classPrivateFieldGet(this, _Timer_stopped, "f"))
            return this.elapsedMs;
        return this.elapsedMs + (Date.now() - this.startTime);
    }
}
exports.Timer = Timer;
_Timer_stopped = new WeakMap(), _Timer_completed = new WeakMap();
//# sourceMappingURL=timer.js.map