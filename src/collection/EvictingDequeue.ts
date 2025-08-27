/**
 * A non-blocking de-queue which automatically evicts elements from queue when attempting to add new elements onto the queue and it is full
 *
 * @example
 * ```js
 * const maxSize=3;
 * const evictingDequeue = new EvictingDequeue<number>(maxSize,[1,2,3]);
 *
 *	evictingDequeue;            // [1,2,3]
 *	evictingDequeue.push(4);    // [2,3,4]
 *	evictingDequeue.unshift(5); // [5,2,3]
 *
 * ```
 */
export class EvictingDequeue<T> extends Array<T> {
	readonly #maxLenght: number;
	constructor(maxLenght: number, items: T[] = []) {
		super();
		this.#maxLenght = maxLenght;
		this.push(...items);
	}

	push(...item: T[]) {
		super.push(...item);
		let overflow = this.length - this.#maxLenght;
		for (; overflow > 0; overflow--) this.shift();

		return this.length;
	}

	unshift(...item: T[]) {
		super.unshift(...item);
		let overflow = this.length - this.#maxLenght;
		for (; overflow > 0; overflow--) this.pop();

		return this.length;
	}

	get maxLenght() {
		return this.#maxLenght;
	}
}
