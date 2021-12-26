"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPathKeys = void 0;
function getPathKeys(obj, opt) {
    if (!obj)
        return;
    if (typeof obj === 'string')
        return;
    const pathKeys = [];
    for (const rawKey of Object.keys(obj)) {
        const value = obj[rawKey];
        if (typeof value === 'function' && (opt === null || opt === void 0 ? void 0 : opt.ignoreFunctions))
            continue;
        const key = Array.isArray(obj) ? '[' + rawKey + ']' : rawKey;
        if (Array.isArray(value) || typeof value !== 'object' || !(opt === null || opt === void 0 ? void 0 : opt.omitFirstLevel))
            pathKeys.push(key);
        if (typeof value === 'object') {
            if (Array.isArray(value) && !(opt === null || opt === void 0 ? void 0 : opt.unfoldArrays))
                continue;
            const secondLevelSeparator = Array.isArray(value) ? '' : '.';
            const secondLevelKeys = getPathKeys(value, opt);
            if (!(secondLevelKeys === null || secondLevelKeys === void 0 ? void 0 : secondLevelKeys.length))
                continue;
            const secondLevelPathKeys = secondLevelKeys.map(k => key + secondLevelSeparator + k);
            pathKeys.push(...secondLevelPathKeys);
        }
    }
    return pathKeys;
}
exports.getPathKeys = getPathKeys;
//# sourceMappingURL=object.js.map