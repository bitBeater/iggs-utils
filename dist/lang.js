"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fors = void 0;
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
//# sourceMappingURL=lang.js.map