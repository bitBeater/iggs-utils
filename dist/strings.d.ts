export declare function isJson(str: string): boolean;
/**
 * convert a template string to a normal string.
 * example:
 * ```ts
 * const name = 'world';
 * const str = templateToString`hello ${name}!`;
 * // str = 'hello world!'
 *
 * @param template
 * @param expressions
 * @returns
 */
export declare function templateToString(template: TemplateStringsArray, ...expressions: TemplateExpression[]): string;
export type TemplateExpression = string | number | Array<string | number>;
//# sourceMappingURL=strings.d.ts.map