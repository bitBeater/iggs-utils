/// <reference types="node" />
import { ObjectEncodingOptions, PathLike, WriteFileOptions } from 'fs';
import { FileHandle, FlagAndOpenMode } from 'fs/promises';
import { ZlibOptions } from 'zlib';
export declare const DESKTOP_PATH: string;
export declare function writeObjectToDesktop(fileName: string, object: any): void;
export declare function writeToDesktop(fileName: string, data: string | Buffer): void;
export declare function write(dir: string, fileName: string, data: string | Buffer): void;
export declare function writeJson(path: string, object: any): void;
export declare function readJson<T>(path: string): T;
export declare function insertBetweenPlacweHolders(filePath: string, data: string, beginPlaceHolder: string, endPlaceHolder: string): void;
export declare function fileLines(path: string, lineSeparator?: RegExp): string[];
export declare function writeGZip(filePath: string, data: string | Buffer, writeFileOptions?: WriteFileOptions, zLibOptions?: ZlibOptions): void;
export declare function readGZip(path: string, readFileOptions?: {
    encoding?: null;
    flag?: string;
}, zlibOptions?: ZlibOptions): Buffer;
export declare function serealizeObject(filePath: string, object: any): void;
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
//# sourceMappingURL=../src/dist/fileSys.d.ts.map