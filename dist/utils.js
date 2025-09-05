"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDurationTracker = exports.benchmarkFn = exports.forEach = void 0;
const collectionOpperations_1 = require("./collection/collectionOpperations");
const time_1 = require("./time");
/**
 * @description Executes a function a specified number of times and collects the results in an array.
 * @example
 * ```ts
 * const results = forEach(5, i => i * 2);
 * console.log(results); // [0, 2, 4, 6, 8]
 * ```
 * @param execs number of executions
 * @param fn function to be executed
 */
function forEach(execs, fn) {
    const results = [];
    for (var i = 0; execs; i++, execs--)
        results.push(fn(i));
    return results;
}
exports.forEach = forEach;
/**
 *
 * benchamrks a function execution,
 *
 * @returns an object with min, max and mean time execution, in millis.
 */
function benchmarkFn(fn, iterations = 1) {
    const execTimes = [];
    var _iterations = iterations + 1;
    while (--_iterations) {
        const start = Date.now();
        fn();
        const end = Date.now();
        //execTimes[_iterations] = end - start;
        execTimes.push(end - start);
    }
    const orderedExecTimes = execTimes.sort();
    const min = orderedExecTimes[0];
    const max = (0, collectionOpperations_1.lastEl)(orderedExecTimes);
    const mean = execTimes.reduce((pre, cur) => pre + cur, 0) / execTimes.length;
    return { min, max, mean };
}
exports.benchmarkFn = benchmarkFn;
/**
 * @description A utility class to track the duration of multiple tasks and estimate completion times.
 * It records the start and end times of each task, calculates elapsed time, estimates remaining time,
 * and provides the expected finish time based on the average duration of completed tasks.
 */
class TaskDurationTracker {
    constructor(tasksCount) {
        this.tasksCount = tasksCount;
        this.intervals = [];
        this.creationTime = new Date();
    }
    /**
     * @description Gets the total elapsed time since the first task started.
     * @returns the total elapsed time since the first task started.
     */
    getElapsedTime() {
        const milliseconds = new Date().getTime() - this.getStartTime().getTime();
        return (0, time_1.millisecondsToDuration)(milliseconds);
    }
    /**
     * @description Estimates the total time taken to complete all tasks.
     */
    getEstimatedCompletionTime() {
        const meanTime = this.getMeanTimePerTask();
        const remainingTasks = this.getRemainingTasks();
        const remainingMillis = (0, time_1.durationToMilliSeconds)(meanTime) * remainingTasks;
        return (0, time_1.millisecondsToDuration)(remainingMillis);
    }
    /**
     * @description Gets the expected finish time for all tasks.
     */
    getExpectedFinishTime() {
        const remainingMillis = (0, time_1.durationToMilliSeconds)(this.getEstimatedCompletionTime());
        return new Date(Date.now() + remainingMillis);
    }
    /**
     * @description Gets the number of completed tasks.
     * @returns the number of completed tasks.
     */
    getCompletedTasks() {
        return this.intervals.length;
    }
    /**
     * @description Gets the number of remaining tasks.
     * @returns the number of remaining tasks.
     */
    getRemainingTasks() {
        return this.tasksCount - this.intervals.length;
    }
    /**
     * @description Gets the mean time taken per task.
     * @returns the mean time taken per task.
     */
    getMeanTimePerTask() {
        if (this.intervals.length === 0) {
            return this.getElapsedTime();
        }
        const totalMillis = this.intervals.reduce((acc, interval) => {
            if (interval.start && interval.end) {
                return acc + (interval.end.getTime() - interval.start.getTime());
            }
            return acc;
        }, 0);
        const meanMillis = totalMillis / this.intervals.length;
        return (0, time_1.millisecondsToDuration)(Math.round(meanMillis));
    }
    /**
     * @description Adds a task interval to the tracker.
     * @param interval The interval of the task to add.
     */
    addCompletedTask(interval) {
        this.intervals.push(interval);
    }
    /**
     * @description Gets the start time of the first task, or the creation time if no tasks have been started.
     * @returns the start time of the first task, or the creation time if no tasks have been started.
     */
    getStartTime() {
        return this.intervals[0]?.start || this.creationTime;
    }
    /**
     * @description Marks the current task as completed,
     * - the start time is either the end time of the last task or the TaskDurationTracker creation time,
     * - the end time is the current time.
     */
    recordTaskEnd() {
        this.intervals.push({
            start: (0, collectionOpperations_1.lastEl)(this.intervals)?.end || this.creationTime,
            end: new Date()
        });
    }
}
exports.TaskDurationTracker = TaskDurationTracker;
//# sourceMappingURL=utils.js.map