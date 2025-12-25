"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDurationTracker = void 0;
exports.forEach = forEach;
exports.benchmarkFn = benchmarkFn;
const collectionOperations_1 = require("../collection/collectionOperations");
var task_duration_tracker_1 = require("./task_duration_tracker");
Object.defineProperty(exports, "TaskDurationTracker", { enumerable: true, get: function () { return task_duration_tracker_1.TaskDurationTracker; } });
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
/**
 *
 * @description A simple utility that benchmarks a function execution,
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
    const max = (0, collectionOperations_1.lastEl)(orderedExecTimes);
    const mean = execTimes.reduce((pre, cur) => pre + cur, 0) / execTimes.length;
    return { min, max, mean };
}
//# sourceMappingURL=utils.js.map