"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isJson = isJson;
exports.templateToString = templateToString;
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
//# sourceMappingURL=strings.js.map