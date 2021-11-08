import { readFileSync } from 'fs';
import { join } from 'path';

export function getConf<T>(path: string): Promise<T> {
	if (!path) path = join(__dirname, 'config.json');

	return new Promise((resolve, reject) => {
		try {
			resolve(JSON.parse(readFileSync(path).toString('utf-8')));
		} catch (error) {
			reject(error);
		}
	});
}

export function getConfSync<T>(path: string): T {
	if (!path) path = join(__dirname, 'config.json');
	return JSON.parse(readFileSync(path).toString('utf-8'));
}
