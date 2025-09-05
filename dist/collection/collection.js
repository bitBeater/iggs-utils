"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvictingDequeue = exports.CircularArray = void 0;
var CircularArray_1 = require("./CircularArray");
Object.defineProperty(exports, "CircularArray", { enumerable: true, get: function () { return CircularArray_1.CircularArray; } });
var EvictingDequeue_1 = require("./EvictingDequeue");
Object.defineProperty(exports, "EvictingDequeue", { enumerable: true, get: function () { return EvictingDequeue_1.EvictingDequeue; } });
__exportStar(require("./collectionOperations"), exports);
//# sourceMappingURL=collection.js.map