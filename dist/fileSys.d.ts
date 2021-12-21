/// <reference types="node" />
import { WriteFileOptions } from 'fs';
import { ZlibOptions } from 'zlib';
export declare const DESKTOP_PATH: string;
export declare function writeObjectToDesktop(fileName: string, object: any): void;
export declare function writeToDesktop(fileName: string, data: string | Buffer): void;
export declare function write(dir: string, fileName: string, data: string | Buffer): void;
export declare function writeJson(path: string, object: any): void;
export declare function readJson(path: string): any;
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
//# sourceMappingURL=fileSys.d.ts.map