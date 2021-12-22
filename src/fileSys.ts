import { existsSync, mkdirSync, readFileSync, WriteFileOptions, writeFileSync } from 'fs';
import { stat } from 'fs/promises';
import { homedir } from 'os';
import { join } from 'path';

import { gzipSync, unzipSync, ZlibOptions } from 'zlib';

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

export function writeGZip(filePath: string, data: string | Buffer, writeFileOptions?: WriteFileOptions, zLibOptions?: ZlibOptions) {
	const buffer = data instanceof Buffer ? data : Buffer.from(data);
	const zippBuffer = gzipSync(buffer, zLibOptions);
	writeFileSync(filePath, zippBuffer, writeFileOptions);
}

export function readGZip(path: string, readFileOptions?: { encoding?: null; flag?: string }, zlibOptions?: ZlibOptions): Buffer {
	const data = readFileSync(path, readFileOptions);
	return unzipSync(data, zlibOptions);
}

export function serealizeObject(filePath: string, object: any) {
	writeGZip(filePath, JSON.stringify(object));
}

export function deserealizeObject(filePath: string) {
	return JSON.parse(readGZip(filePath).toString());
}

export const exists: (path: string) => Promise<boolean> = (path: string) =>
	stat(path)
		.then(() => true)
		.catch(e => {
			if (e.code === 'ENOENT') return false;
			throw e;
		});
