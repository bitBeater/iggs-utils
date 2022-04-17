import { Abortable } from 'events';
import { existsSync, mkdirSync, Mode, ObjectEncodingOptions, OpenMode, PathLike, readFileSync, WriteFileOptions, writeFileSync } from 'fs';
import { appendFile as append, FileHandle, FlagAndOpenMode, mkdir, stat, writeFile } from 'fs/promises';
import { homedir } from 'os';
import { dirname, join } from 'path';
import { Stream } from 'stream';

import { gzipSync, unzipSync, ZlibOptions } from 'zlib';
import { Reviver } from './revivers';

export const DESKTOP_PATH = join(homedir(), 'Desktop');

export function writeObjectToDesktopSync(fileName: string, object: any) {
	writeFileSync(`${DESKTOP_PATH}/${fileName}`, JSON.stringify(object));
}

export function writeToDesktopSync(fileName: string, data: string | Buffer) {
	writeFileSync(`${DESKTOP_PATH}/${fileName}`, data);
}

export function writeSync(dir: string, fileName: string, data: string | Buffer) {
	if (!existsSync(dir)) {
		mkdirSync(dir);
	}
	writeFileSync(`${dir}/${fileName}`, data);
}

export function writeJsonSync(path: string, object: any) {
	writeFileSync(path, JSON.stringify(object));
}

export function readJson<T>(path: string, reviver?: Reviver<any>): T {
	const data = readFileSync(path);
	if (!data) return;

	const retVal = JSON.parse(data.toString(), reviver);

	return retVal;
}

export function insertBetweenPlacweHoldersSync(filePath: string, data: string, beginPlaceHolder: string, endPlaceHolder: string) {
	const writeData = readFileSync(filePath);
	if (!existsSync(filePath)) {
		writeFileSync(filePath, writeData);
	}

	const fileContent = readFileSync(filePath).toString();

	const top = fileContent?.split?.(beginPlaceHolder)?.[0];
	const bottom = fileContent?.split?.(endPlaceHolder).reverse?.()?.[0];

	writeFileSync(filePath, `${top}\n\r${beginPlaceHolder}\n\r${data}\n\r${endPlaceHolder}\n\r${bottom}`);
}

export function fileLinesSync(path: string, lineSeparator = /[\n|\r]/): string[] {
	if (!path) return null;

	try {
		const data = readFileSync(path)?.toString();
		if (!data) return null;
		return data.split(lineSeparator);
	} catch (error) {
		console.error(error);
	}
}

export function writeGZipSync(filePath: string, data: string | Buffer, writeFileOptions?: WriteFileOptions, zLibOptions?: ZlibOptions) {
	const buffer = data instanceof Buffer ? data : Buffer.from(data);
	const zippBuffer = gzipSync(buffer, zLibOptions);
	writeFileSync(filePath, zippBuffer, writeFileOptions);
}

export function readGZip(path: string, readFileOptions?: { encoding?: null; flag?: string }, zlibOptions?: ZlibOptions): Buffer {
	const data = readFileSync(path, readFileOptions);
	return unzipSync(data, zlibOptions);
}

export function serealizeObjectSync(filePath: string, object: any) {
	writeGZipSync(filePath, JSON.stringify(object));
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

/**
 * add to file, if the file or folder does not exist it will be recursively created
 * @param path
 * @param data
 * @param options
 * @returns
 */
export function appendFile(path: PathLike | FileHandle, data: string | Uint8Array, options?: (ObjectEncodingOptions & FlagAndOpenMode) | BufferEncoding | null): Promise<void> {
	return append(path, data, options).catch(error => {
		if (error.code === 'ENOENT') return mkdir(dirname(path.toString()), { recursive: true }).then(() => append(path, data, options));
		return error;
	});
}

/**
 * write to file, if the folder does not exist it will be recursively created
 * @param path
 * @param data
 * @param options
 * @returns
 */
export function write(
	file: PathLike | FileHandle,
	data: string | NodeJS.ArrayBufferView | Iterable<string | NodeJS.ArrayBufferView> | AsyncIterable<string | NodeJS.ArrayBufferView> | Stream,
	options?:
		| (ObjectEncodingOptions & {
				mode?: Mode | undefined;
				flag?: OpenMode | undefined;
		  } & Abortable)
		| BufferEncoding
		| null
): Promise<void> {
	const dirPath = dirname(file.toString());
	return exists(dirPath).then(exist => {
		const _opt = typeof options === 'string' ? { encoding: options } : options;
		let promise = of();
		if (!exist) promise = mkdir(dirPath, { ..._opt, recursive: true });
		return promise.then(() => writeFile(file, data, options));
	});
}

export function of<T>(data?: T): Promise<T> {
	return new Promise((resolve, _reject) => {
		resolve(data);
	});
}
