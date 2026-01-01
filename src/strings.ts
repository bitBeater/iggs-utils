export function isJson(str: string): boolean {
	try {
		JSON.parse(str);
	} catch (e) {
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
export function templateToString(template: TemplateStringsArray, ...expressions: TemplateExpression[]): string {
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
export function spacedWords(text: string): [string, string][] {
	const _spacedWords: [string, string][] = [];

	let isPreviousCharWhitespace = null;
	let [whitespaces, currentWord] = ['', ''];

	for (const char of text) {
		if (isWhitespace(char)) {
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

export const isWhitespace = (char: string): boolean => {
	return /\s/.test(char);
};

export function isUpperCase(str: string): boolean {
	return str === str.toUpperCase();
}

export type TemplateExpression = string | number | Array<string | number>;
