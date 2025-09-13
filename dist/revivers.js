"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISO_8601StringtoDate = void 0;
exports.mergeRevivers = mergeRevivers;
const consts_1 = require("./consts");
/**
 * revive
 * @param _key
 * @param value
 * @returns
 */
const ISO_8601StringtoDate = (_key, value) => (typeof value === 'string' && consts_1.ISO_8601_DATE_FORMAT_REX.test(value) ? new Date(value) : value);
exports.ISO_8601StringtoDate = ISO_8601StringtoDate;
/**
 * merge multiple reviver in one, the resulted value is equal to the result of the first reviver that resolve,
 * so reviver order determine theire priority
 *
 * @param revivers
 * @returns
 * @link  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter
 */
function mergeRevivers(...revivers) {
    if (!revivers?.length)
        return;
    return (key, value) => {
        for (const reviver of revivers) {
            const revived = reviver(key, value);
            if (revived !== value)
                return revived;
        }
        return value;
    };
}
//# sourceMappingURL=revivers.js.map