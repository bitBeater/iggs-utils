/**
 * Execute a functio n times
 *
 * @param execs number of executions
 * @param fn function to be executed
 */
export declare function fors(execs: number, fn: (i: number) => any): void;
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
//# sourceMappingURL=lang.d.ts.map