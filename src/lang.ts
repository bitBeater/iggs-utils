import { lastEl } from './collection/collectionOpperations';

/**
 * Execute a functio n times
 *
 * @param execs number of executions
 * @param fn function to be executed
 */
export function fors(execs: number, fn: (i: number) => any): void {
	for (var i = 0; execs; i++, execs--) fn(i);
}

/**
 *
 * benchamrks a function execution,
 *
 * @returns an object with min, max and mean time execution, in millis.
 */
export function benchmarkFn(fn: Function, iterations = 1): { min: number; max: number; mean: number } {
	const execTimes: number[] = [];
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
	const max = lastEl(orderedExecTimes);
	const mean = execTimes.reduce((pre, cur) => pre + cur, 0) / execTimes.length;

	return { min, max, mean };
}
