const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

const parseDate = (_key: string, value: any) => (typeof value === 'string' && dateFormat.test(value) ? new Date(value) : value);

export function parse<T>(txt: string = 'null'): T {
	return JSON.parse(txt, parseDate);
}
