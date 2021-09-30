import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';

export const DESKTOP_PATH = join(homedir(), 'Desktop');

export function writeObjectToDesktop(fileName: string, object: any) {
	writeFileSync(`${DESKTOP_PATH}/${fileName}`, JSON.stringify(object));
}

export function writeToDesktop(fileName: string, data: string | Buffer) {
	writeFileSync(`${DESKTOP_PATH}/${fileName}`, data);
}

export function write(dir: string, fileName: string, data: string | Buffer) {
	if (!existsSync(dir)) {
		mkdirSync(dir);
	}
	writeFileSync(`${dir}/${fileName}`, data);
}

export function writeJson(path: string, object: any) {
	writeFileSync(path, JSON.stringify(object));
}

export function readJson(path: string): any {
	const data = readFileSync(path);
	if (!data) return;

	const retVal = JSON.parse(data.toString());

	return retVal;
}

export function insertBetweenPlacweHolders(filePath: string, data: string, beginPlaceHolder: string, endPlaceHolder: string) {
	const writeData = readFileSync(filePath);
	if (!existsSync(filePath)) {
		writeFileSync(filePath, writeData);
	}

	const fileContent = readFileSync(filePath).toString();

	const top = fileContent?.split?.(beginPlaceHolder)?.[0];
	const bottom = fileContent?.split?.(endPlaceHolder).reverse?.()?.[0];

	writeFileSync(filePath, `${top}\n\r${beginPlaceHolder}\n\r${data}\n\r${endPlaceHolder}\n\r${bottom}`);
}

export function fileLines(path: string, lineSeparator = /[\n|\r]/): string[] {
	if (!path) return null;

	try {
		const data = readFileSync(path)?.toString();
		if (!data) return null;
		return data.split(lineSeparator);
	} catch (error) {
		console.error(error);
	}
}
