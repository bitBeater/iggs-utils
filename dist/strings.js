"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isJson = void 0;
function isJson(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
exports.isJson = isJson;
//# sourceMappingURL=strings.js.map