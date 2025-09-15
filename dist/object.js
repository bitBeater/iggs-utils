"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keysOf = exports.isPlainObject = exports.getPathKeys = void 0;
/**
 * Returns an array of a given object's keys paths (own and nested key names) in a reccursive manner, iterated in the same order that a normal loop would.
 *
 * @example ```ts
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
 * @example ```ts
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
        if (typeof value === 'function' && options?.ignoreFunctions)
            continue;
        const key = Array.isArray(obj) ? '[' + rawKey + ']' : rawKey;
        if (Array.isArray(value) || typeof value !== 'object' || !options?.omitFirstLevel)
            pathKeys.push(key);
        if (typeof value === 'object') {
            if (Array.isArray(value) && !options?.unfoldArrays)
                continue;
            const secondLevelSeparator = Array.isArray(value) ? '' : '.';
            const secondLevelKeys = getPathKeys(value, options);
            if (!secondLevelKeys?.length)
                continue;
            const secondLevelPathKeys = secondLevelKeys.map(k => key + secondLevelSeparator + k);
            pathKeys.push(...secondLevelPathKeys);
        }
    }
    return pathKeys;
}
exports.getPathKeys = getPathKeys;
/**
 * Checks if a value is a plain object (not null, not array, not date, not promise, not function)
 *
 * @param v value to check
 * @returns boolean indicating if the value is a plain object
 *
 * @example
 * ```ts
 * isPlainObject({}) // => true
 * isPlainObject({ a: 1, b: { c: 2 } }) // => true
 * isPlainObject(() => {}) // => false
 * isPlainObject(null) // => false
 * isPlainObject(undefined) // => false
 * isPlainObject([]) // => false
 * isPlainObject(new Date()) // => false
 * isPlainObject("hello") // => false
 * isPlainObject(123) // => false
 * isPlainObject(true) // => false
 * isPlainObject(Symbol("sym")) // => false
 * isPlainObject(BigInt(123)) // => false
 * isPlainObject(Promise.resolve(123)) // => false
 * ```
 */
function isPlainObject(v) {
    return typeof v === 'object' && v !== null && !(v instanceof Date) && !Array.isArray(v) && !(v instanceof Promise);
}
exports.isPlainObject = isPlainObject;
/**
 * returns the keys of an object as an array, with proper typing.
 * @example
 * ```ts
 * const obj = { a: 1, b: 2, c: 3 };
 * const keys = keysOf(obj); // ['a', 'b', 'c']
 * ```
 * @param o
 * @returns
 */
function keysOf(o) {
    return Object.keys(o);
}
exports.keysOf = keysOf;
//# sourceMappingURL=object.js.map