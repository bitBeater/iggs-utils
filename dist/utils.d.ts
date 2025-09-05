import { Duration, Interval } from './time';
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
export declare function forEach<T>(execs: number, fn: (i: number) => T): T[];
/**
 *
 * benchamrks a function execution,
 *
 * @returns an object with min, max and mean time execution, in millis.
 */
export declare function benchmarkFn(fn: Function, iterations?: number): {
    min: number;
    max: number;
    mean: number;
};
/**
 * @description A utility class to track the duration of multiple tasks and estimate completion times.
 * It records the start and end times of each task, calculates elapsed time, estimates remaining time,
 * and provides the expected finish time based on the average duration of completed tasks.
 */
export declare class TaskDurationTracker {
    private tasksCount;
    private intervals;
    private creationTime;
    constructor(tasksCount: number);
    /**
     * @description Gets the total elapsed time since the first task started.
     * @returns the total elapsed time since the first task started.
     */
    getElapsedTime(): Duration;
    /**
     * @description Estimates the total time taken to complete all tasks.
     */
    getEstimatedCompletionTime(): Duration;
    /**
     * @description Gets the expected finish time for all tasks.
     */
    getExpectedFinishTime(): Date;
    /**
     * @description Gets the number of completed tasks.
     * @returns the number of completed tasks.
     */
    getCompletedTasks(): number;
    /**
     * @description Gets the number of remaining tasks.
     * @returns the number of remaining tasks.
     */
    getRemainingTasks(): number;
    /**
     * @description Gets the mean time taken per task.
     * @returns the mean time taken per task.
     */
    getMeanTimePerTask(): Duration;
    /**
     * @description Adds a task interval to the tracker.
     * @param interval The interval of the task to add.
     */
    addCompletedTask(interval: Interval): void;
    /**
     * @description Gets the start time of the first task, or the creation time if no tasks have been started.
     * @returns the start time of the first task, or the creation time if no tasks have been started.
     */
    getStartTime(): Date;
    /**
     * @description Marks the current task as completed,
     * - the start time is either the end time of the last task or the TaskDurationTracker creation time,
     * - the end time is the current time.
     */
    recordTaskEnd(): void;
}
//# sourceMappingURL=utils.d.ts.map