"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayDifferences = void 0;
/**
 *
 * @param a1 array to compare
 * @param a2 array to compare
 * @returns return the array difference a1-a2
 */
function arrayDifferences(a1, a2) {
    if (a1 === void 0) { a1 = []; }
    if (a2 === void 0) { a2 = []; }
    var retVal = [];
    for (var i = 0; i < a1.length; i++)
        retVal.push(Math.abs((a1[i] || 0) - (a2[i] || 0)));
    return retVal;
}
exports.arrayDifferences = arrayDifferences;
//# sourceMappingURL=collectionOpperations.js.map