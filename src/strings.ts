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

export type TemplateExpression = string | number | Array<string | number>;
