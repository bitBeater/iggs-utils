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
/**
 * Separates text into an array of [whitespace, word] tuples, preserving the whitespace.
 * @example
 * ```ts
 * spacedWords('\t Hello \n world ')`
 * // Returns:
 * // [
 * //   ['\t ', 'Hello'],
 * //   [' \n ', 'world'],
 * //   [' ', '']
 * // ]
 * ```
 * @param text
 * @returns [[whitespace, word], ...]
 */
export declare function spacedWords(text: string): [string, string][];
export declare const isWhitespace: (char: string) => boolean;
export declare function isUpperCase(str: string): boolean;
export type TemplateExpression = string | number | Array<string | number>;
//# sourceMappingURL=strings.d.ts.map