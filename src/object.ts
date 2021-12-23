export interface PathKeysOptions {
	ignoreFunctions?: boolean;
	unfoldArrays?: boolean;
	omitFirstLevel: boolean;
}

export function getPathKeys(obj: any, opt?: PathKeysOptions): string[] {
	if (!obj) return;
	if (typeof obj === 'string') return;

	const pathKeys = [];
	for (const rawKey of Object.keys(obj)) {
		const value = obj[rawKey];

		if (typeof value === 'function' && opt?.ignoreFunctions) continue;

		const key = Array.isArray(obj) ? '[' + rawKey + ']' : rawKey;

		if (Array.isArray(value) || typeof value !== 'object' || !opt?.omitFirstLevel) pathKeys.push(key);

		if (typeof value === 'object') {
			if (Array.isArray(value) && !opt?.unfoldArrays) continue;

			const secondLevelSeparator = Array.isArray(value) ? '' : '.';

			const secondLevelKeys = getPathKeys(value, opt);
			if (!secondLevelKeys?.length) continue;
			const secondLevelPathKeys = secondLevelKeys.map(k => key + secondLevelSeparator + k);
			pathKeys.push(...secondLevelPathKeys);
		}
	}

	return pathKeys;
}
