/// <reference types="node" />
import { Abortable } from 'events';
import { Mode, ObjectEncodingOptions, OpenMode, PathLike, WriteFileOptions } from 'fs';
import { FileHandle, FlagAndOpenMode } from 'fs/promises';
import { Stream } from 'stream';
import { ZlibOptions } from 'zlib';
import { Reviver } from './revivers';
export declare const DESKTOP_PATH: string;
export declare function writeObjectToDesktopSync(fileName: string, object: any): void;
export declare function writeToDesktopSync(fileName: string, data: string | Buffer): void;
export declare function writeSync(dir: string, fileName: string, data: string | Buffer): void;
export declare function writeJsonSync(path: string, object: any): void;
export declare function readJson<T>(path: string, reviver?: Reviver<any>): T;
export declare function insertBetweenPlacweHoldersSync(filePath: string, data: string, beginPlaceHolder: string, endPlaceHolder: string): void;
export declare function fileLinesSync(path: string, lineSeparator?: RegExp): string[];
export declare function writeGZipSync(filePath: string, data: string | Buffer, writeFileOptions?: WriteFileOptions, zLibOptions?: ZlibOptions): void;
export declare function readGZip(path: string, readFileOptions?: {
    encoding?: null;
    flag?: string;
}, zlibOptions?: ZlibOptions): Buffer;
export declare function serealizeObjectSync(filePath: string, object: any): void;
export declare function deserealizeObject(filePath: string): any;
export declare const exists: (path: string) => Promise<boolean>;
/**
 * add to file, if the file or folder does not exist it will be recursively created
 * @param path
 * @param data
 * @param options
 * @returns
 */
export declare function appendFile(path: PathLike | FileHandle, data: string | Uint8Array, options?: (ObjectEncodingOptions & FlagAndOpenMode) | BufferEncoding | null): Promise<void>;
/**
 * write to file, if the folder does not exist it will be recursively created
 * @param path
 * @param data
 * @param options
 * @returns
 */
export declare function write(file: PathLike | FileHandle, data: string | NodeJS.ArrayBufferView | Iterable<string | NodeJS.ArrayBufferView> | AsyncIterable<string | NodeJS.ArrayBufferView> | Stream, options?: (ObjectEncodingOptions & {
    mode?: Mode | undefined;
    flag?: OpenMode | undefined;
} & Abortable) | BufferEncoding | null): Promise<void>;
export declare function of<T>(data?: T): Promise<T>;
//# sourceMappingURL=files.d.ts.map