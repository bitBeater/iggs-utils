"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EvictingDequeue_maxLenght;
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
 *	evictingDequeue;			// [1,2,3]
 *	evictingDequeue.push(4);	// [2,3,4]
 *	evictingDequeue.unshift(5); // [5,2,3]
 *
 * ```
 */
class EvictingDequeue extends Array {
    constructor(maxLenght, items) {
        super();
        _EvictingDequeue_maxLenght.set(this, void 0);
        __classPrivateFieldSet(this, _EvictingDequeue_maxLenght, maxLenght, "f");
        this.push(...(items || []));
    }
    push(...item) {
        super.push(...item);
        var overflow = this.length - __classPrivateFieldGet(this, _EvictingDequeue_maxLenght, "f");
        for (; overflow > 0; overflow--)
            this.shift();
        return this.length;
    }
    unshift(...item) {
        super.unshift(...item);
        var overflow = this.length - __classPrivateFieldGet(this, _EvictingDequeue_maxLenght, "f");
        for (; overflow > 0; overflow--)
            this.pop();
        return this.length;
    }
    get maxLenght() {
        return __classPrivateFieldGet(this, _EvictingDequeue_maxLenght, "f");
    }
}
exports.EvictingDequeue = EvictingDequeue;
_EvictingDequeue_maxLenght = new WeakMap();
//# sourceMappingURL=EvictingDequeue.js.map