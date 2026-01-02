"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWhitespace = void 0;
exports.isJson = isJson;
exports.templateToString = templateToString;
exports.spacedWords = spacedWords;
exports.splitRuns = splitRuns;
exports.isUpperCase = isUpperCase;
exports.isPunctuation = isPunctuation;
exports.isNumber = isNumber;
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
    return splitRuns(text, exports.isWhitespace);
}
/**
 * Splits a string into pairs of `[delimiterRun, token]`, preserving contiguous
 * delimiter runs.
 *
 * @param {string} text - The input string to split.
 * @param {(char: string, index: number, text: string) => boolean} isDelimiter
 *   Predicate to determine whether a character is a delimiter.
 * @returns {[string, string][]} Array of tuples: `[delimiterRun, token]`.
 *
 * @example
 * ```ts
 * // Split on spaces and punctuation
 * const isDelim = (ch) => ch === ' ' || ch === '-' || ch === '!';
 *
 * splitRuns('hello world', isDelim);
 * [
 *    ["", "hello"],
 *    [" ", "world"],
 * ]
 *
 * splitRuns('hello world!', isDelim);
 * [
 *    ["", "hello"],
 *    [" ", "world"],
 *    ["!", ""]
 * ]
 *
 * splitRuns('- hello world!', isDelim);
 * [
 *    ["- ", "hello"],
 *    [" ", "world"],
 *    ["!", ""]
 * ]
 * ```
 * */
function splitRuns(text, isDelimiter) {
    const result = [];
    if (!text)
        return result;
    let inDelimiter = null;
    const delimiterBuf = [];
    const wordBuf = [];
    const flush = () => {
        result.push([delimiterBuf.join(''), wordBuf.join('')]);
        delimiterBuf.length = 0;
        wordBuf.length = 0;
    };
    for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (isDelimiter(ch, i, text)) {
            // entering a delimiter run after a word => flush the word+match pair
            if (inDelimiter === false)
                flush();
            delimiterBuf.push(ch);
            inDelimiter = true;
            continue;
        }
        wordBuf.push(ch);
        inDelimiter = false;
    }
    // flush trailing tuple (captures trailing delimiter run or last word)
    flush();
    return result;
}
function isUpperCase(str) {
    return str === str.toUpperCase();
}
const isWhitespace = (char) => {
    return /\s/.test(char);
};
exports.isWhitespace = isWhitespace;
function isPunctuation(char) {
    return /[.,\/#!$%\^&\*;:{}=\-_`~()]/.test(char);
}
function isNumber(char) {
    return /[0-9]/.test(char);
}
//# sourceMappingURL=strings.js.map