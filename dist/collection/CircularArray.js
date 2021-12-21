"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircularArray = void 0;
var CircularArray = /** @class */ (function () {
    function CircularArray() {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        this.currentIndex = 0;
        this.array = items || [];
    }
    CircularArray.prototype.get = function (index) {
        this.currentIndex = ((index % this.array.length) + this.array.length) % this.array.length;
        return this.array[this.currentIndex];
    };
    CircularArray.prototype.left = function () {
        var retVal = this.get(this.currentIndex);
        this.currentIndex++;
        return retVal;
    };
    CircularArray.prototype.right = function () {
        var retVal = this.get(this.currentIndex);
        this.currentIndex--;
        return retVal;
    };
    CircularArray.prototype.peek = function () {
        return this.get(this.currentIndex);
    };
    return CircularArray;
}());
exports.CircularArray = CircularArray;
//# sourceMappingURL=../../src/dist/collection/CircularArray.js.map