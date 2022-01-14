export interface PathKeysOptions {
    ignoreFunctions?: boolean;
    unfoldArrays?: boolean;
    omitFirstLevel: boolean;
}
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
export declare function getPathKeys(obj: any, options?: PathKeysOptions): string[];
//# sourceMappingURL=../src/dist/object.d.ts.map