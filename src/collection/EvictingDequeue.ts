/**
 * A non-blocking de-queue which automatically evicts elements from queue when attempting to add new elements onto the queue and it is full
 *
 * @example
 * ```js
 * const maxSize=3;
 * const evictingDequeue = new EvictingDequeue<number>(maxSize,[1,2,3]);
 *
 * evictingDequeue.getItems();    // [1,2,3]
 * evictingDequeue.push(4);       // [2,3,4]
 * evictingDequeue.unshift(5);    // [5,2,3]
 *
 * ```
 */
export class EvictingDequeue<T> {
	private items: T[] = [];
	constructor(private readonly length: number, items?: T[]) {
		if (items?.length) for (var i = items.length - 1; i >= 0; i--) this.unshift(items[i]);
	}

	push(item: T) {
		this.items.push(item);
		const overflow = this.items.length - this.length;
		if (overflow > 0) this.items.shift();
	}

	unshift(item: T) {
		this.items.unshift(item);
		const overflow = this.items.length - this.length;
		if (overflow > 0) this.items.pop();
	}

	public getItems(): T[] {
		return [...this.items];
	}
}
