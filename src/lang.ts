/**
 * Execute a functio n times
 *
 * @param execs number of executions
 * @param fn function to be executed
 */
export function fors(execs: number, fn: (i: number) => any): void {
	for (var i = 0; execs; i++, execs--) fn(i);
}
