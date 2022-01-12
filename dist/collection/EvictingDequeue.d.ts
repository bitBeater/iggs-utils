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
export declare class EvictingDequeue<T> {
    private readonly length;
    private items;
    constructor(length: number, items?: T[]);
    push(item: T): void;
    unshift(item: T): void;
    getItems(): T[];
}
//# sourceMappingURL=EvictingDequeue.d.ts.map