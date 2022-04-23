"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.benchmarkFn = exports.fors = void 0;
const collectionOpperations_1 = require("./collection/collectionOpperations");
/**
 * Execute a functio n times
 *
 * @param execs number of executions
 * @param fn function to be executed
 */
function fors(execs, fn) {
    for (var i = 0; execs; i++, execs--)
        fn(i);
}
exports.fors = fors;
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
        console.log(_iterations);
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
//# sourceMappingURL=lang.js.map