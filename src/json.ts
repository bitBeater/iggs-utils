const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;

const parseDate = (_key: string, value: any) => (typeof value === 'string' && dateFormat.test(value) ? new Date(value) : value);

export function parse<T>(txt: string): T {
	return JSON.parse(txt, parseDate);
}
