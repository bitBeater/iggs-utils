"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWhitespace = void 0;
exports.isJson = isJson;
exports.templateToString = templateToString;
exports.spacedWords = spacedWords;
exports.isUpperCase = isUpperCase;
function isJson(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
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
function templateToString(template, ...expressions) {
    const merged = [];
    for (let i = 0; i < template.length; i++) {
        merged.push(template[i]);
        merged.push(expressions[i]);
    }
    return merged.join('');
}
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
function spacedWords(text) {
    const _spacedWords = [];
    let isPreviousCharWhitespace = null;
    let [whitespaces, currentWord] = ['', ''];
    for (const char of text) {
        if ((0, exports.isWhitespace)(char)) {
            if (isPreviousCharWhitespace === false) {
                _spacedWords.push([whitespaces, currentWord]);
                currentWord = '';
                whitespaces = '';
            }
            const whiteSpace = char;
            whitespaces += whiteSpace;
            isPreviousCharWhitespace = true;
            continue;
        }
        currentWord += char;
        isPreviousCharWhitespace = false;
    }
    return _spacedWords.concat([[whitespaces, currentWord]]);
}
const isWhitespace = (char) => {
    return /\s/.test(char);
};
exports.isWhitespace = isWhitespace;
function isUpperCase(str) {
    return str === str.toUpperCase();
}
//# sourceMappingURL=strings.js.map