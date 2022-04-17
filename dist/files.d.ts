/// <reference types="node" />
import { Abortable } from 'events';
import { Mode, ObjectEncodingOptions, OpenMode, PathLike, WriteFileOptions } from 'fs';
import { FileHandle, FlagAndOpenMode } from 'fs/promises';
import { Stream } from 'stream';
import { ZlibOptions } from 'zlib';
import { Replacer, Reviver } from './revivers';
export declare const DESKTOP_PATH: string;
export declare function writeObjectToDesktopSync(fileName: string, object: any): void;
export declare function writeToDesktopSync(fileName: string, data: string | Buffer): void;
export declare function writeSync(dir: string, fileName: string, data: string | Buffer): void;
export declare function writeJsonSync(path: string, object: any): void;
export declare function readJsonSync<T>(path: string, reviver?: Reviver<any>): T;
export declare function insertBetweenPlacweHoldersSync(filePath: string, data: string, beginPlaceHolder: string, endPlaceHolder: string): void;
export declare function fileLinesSync(path: string, lineSeparator?: RegExp): string[];
export declare function writeGZipSync(filePath: string, data: string | Buffer, writeFileOptions?: WriteFileOptions, zLibOptions?: ZlibOptions): void;
export declare function readGZipSync(path: string, readFileOptions?: {
    encoding?: null;
    flag?: string;
}, zlibOptions?: ZlibOptions): Buffer;
export declare function serealizeObjectSync(filePath: string, object: any): void;
export declare function deserealizeObjectSync(filePath: string): any;
/**
 * check if file exists
 *
 *
 * @param path file path
 * @returns true if exists false otherwise
 *
 * @see{@link stat}
 */
export declare const exists: (path: PathLike) => Promise<boolean>;
/**
 * add to file, if the file or folder does not exist it will be recursively created
 * @param path
 * @param data
 * @param options
 * @returns
 */
export declare function append(path: PathLike | FileHandle, data: string | Uint8Array, options?: (ObjectEncodingOptions & FlagAndOpenMode) | BufferEncoding | null): Promise<void>;
/**
 * write to file, if the folder does not exist it will be recursively created
 *
 * @param file filename or `FileHandle`
 * @param data
 * @param options
 * @return Fulfills with `undefined` upon success.
 *
 *
 * @see{@link exists}
 * @see{@link mkdir}
 * @see{@link writeFile}
 */
export declare function write(file: PathLike | FileHandle, data: string | NodeJS.ArrayBufferView | Iterable<string | NodeJS.ArrayBufferView> | AsyncIterable<string | NodeJS.ArrayBufferView> | Stream, options?: (ObjectEncodingOptions & {
    mode?: Mode | undefined;
    flag?: OpenMode | undefined;
} & Abortable) | BufferEncoding | null): Promise<void>;
/**
 * Asynchronously reads the entire contents of a file that contains a valid JSON string, and converts the content into an object.
 *
 * @param file filename or `FileHandle`
 * @param options
 * @param reviver A function that transforms the results. This function is called for each member of the object.
 * If a member contains nested objects, the nested objects are transformed before the parent object is.
 *
 * @see{@link readFile}
 * @see{@link JSON.parse}
 */
export declare function readJson<T>(file: PathLike | FileHandle, options?: ({
    encoding?: null | undefined;
    flag?: OpenMode | undefined;
} & Abortable) | null, reviver?: Reviver<any>): Promise<T>;
/**
 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string, and asynchronously writes data to a file, replacing the file if it already exists.
 *
 * @param file filename or `FileHandle`
 * @param obj A JavaScript value, usually an object or array, to be converted.
 * @param replacer A function that transforms the results.
 * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
 * @returns
 * @see {@link JSON.stringify}
 * @see {@link write}
 */
export declare function writeJson(file: PathLike | FileHandle, obj: any, options?: (ObjectEncodingOptions & {
    mode?: Mode | undefined;
    flag?: OpenMode | undefined;
} & Abortable) | BufferEncoding | null, replacer?: Replacer<any>, space?: string | number): Promise<void>;
//# sourceMappingURL=files.d.ts.map