"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircularArray = void 0;
class CircularArray {
    constructor(...items) {
        this.currentIndex = 0;
        this.array = items || [];
    }
    get(index) {
        this.currentIndex = ((index % this.array.length) + this.array.length) % this.array.length;
        return this.array[this.currentIndex];
    }
    left() {
        const retVal = this.get(this.currentIndex);
        this.currentIndex++;
        return retVal;
    }
    right() {
        const retVal = this.get(this.currentIndex);
        this.currentIndex--;
        return retVal;
    }
    peek() {
        return this.get(this.currentIndex);
    }
}
exports.CircularArray = CircularArray;
//# sourceMappingURL=CircularArray.js.map