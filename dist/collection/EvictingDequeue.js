"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvictingDequeue = void 0;
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
class EvictingDequeue {
    constructor(length, items) {
        this.length = length;
        this.items = [];
        if (items === null || items === void 0 ? void 0 : items.length)
            for (var i = items.length - 1; i >= 0; i--)
                this.unshift(items[i]);
    }
    push(item) {
        this.items.push(item);
        const overflow = this.items.length - this.length;
        if (overflow > 0)
            this.items.shift();
    }
    unshift(item) {
        this.items.unshift(item);
        const overflow = this.items.length - this.length;
        if (overflow > 0)
            this.items.pop();
    }
    getItems() {
        return [...this.items];
    }
}
exports.EvictingDequeue = EvictingDequeue;
//# sourceMappingURL=EvictingDequeue.js.map