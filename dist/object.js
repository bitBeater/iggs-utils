"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPathKeys = void 0;
/**
 * Returns an array of a given object's keys paths (own and nested key names) in a reccursive manner, iterated in the same order that a normal loop would.
 *
 * @example <caption>Simple usage</caption>
 * ```js
 * const object={
 * 	str:"hello",
 * 	nr:1,
 * 	fn: (a:number,b:number)=> a+b,
 * 	arr:[1,2,3],
 * 	nestedObject:{
 * 		str:"world",
 * 		nr:2,
 * 		fn: (a:number,b:number)=> a+b,
 * 		arr:[4.5],
 * 	}
 * };
 *
 * getPathKeys(object)
 *
 * // RETURNS:
 * // [  'str',
 * //	 'nr',
 * //	 'fn',
 * //	 'arr',
 * //	 'nestedObject',
 * //	 'nestedObject.str',
 * //	 'nestedObject.nr',
 * //	 'nestedObject.fn',
 * //	 'nestedObject.arr' ]
 * ```
 *
 *@example <caption>Omitting first level</caption>
 * ```js
 * const object={
 * 	str:"hello",
 * 	nestedObject:{
 * 		str:"world",
 * 		nr:2,
 * 		fn: (a:number,b:number)=> a+b,
 * 		arr:[4.5],
 * 	}
 * };
 *
 * getPathKeys(object,{omitFirstLevel:true})
 *
 * // RETURNS:
 * // [  'str',
 * //	 'nestedObject.str',
 * //	 'nestedObject.nr',
 * //	 'nestedObject.fn',
 * //	 'nestedObject.arr' ]
 * ```
 *
 * @param obj object from which to derive the paths
 * @param options options object
 * @returns
 */
function getPathKeys(obj, options) {
    if (!obj)
        return;
    if (typeof obj === 'string')
        return;
    const pathKeys = [];
    for (const rawKey of Object.keys(obj)) {
        const value = obj[rawKey];
        if (typeof value === 'function' && (options === null || options === void 0 ? void 0 : options.ignoreFunctions))
            continue;
        const key = Array.isArray(obj) ? '[' + rawKey + ']' : rawKey;
        if (Array.isArray(value) || typeof value !== 'object' || !(options === null || options === void 0 ? void 0 : options.omitFirstLevel))
            pathKeys.push(key);
        if (typeof value === 'object') {
            if (Array.isArray(value) && !(options === null || options === void 0 ? void 0 : options.unfoldArrays))
                continue;
            const secondLevelSeparator = Array.isArray(value) ? '' : '.';
            const secondLevelKeys = getPathKeys(value, options);
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