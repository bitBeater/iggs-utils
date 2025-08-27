"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isJson = isJson;
function isJson(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
//# sourceMappingURL=strings.js.map