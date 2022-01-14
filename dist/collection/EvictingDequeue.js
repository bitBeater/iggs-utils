"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _maxLenght;
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
        _maxLenght.set(this, void 0);
        __classPrivateFieldSet(this, _maxLenght, maxLenght);
        this.push(...(items || []));
    }
    push(...item) {
        super.push(...item);
        var overflow = this.length - __classPrivateFieldGet(this, _maxLenght);
        for (; overflow > 0; overflow--)
            this.shift();
        return this.length;
    }
    unshift(...item) {
        super.unshift(...item);
        var overflow = this.length - __classPrivateFieldGet(this, _maxLenght);
        for (; overflow > 0; overflow--)
            this.pop();
        return this.length;
    }
    get maxLenght() {
        return __classPrivateFieldGet(this, _maxLenght);
    }
}
exports.EvictingDequeue = EvictingDequeue;
_maxLenght = new WeakMap();
//# sourceMappingURL=../../src/src/collection/EvictingDequeue.js.map