/// <reference types="node" />
export declare const DESKTOP_PATH: string;
export declare function writeObjectToDesktop(fileName: string, object: any): void;
export declare function writeToDesktop(fileName: string, data: string | Buffer): void;
export declare function write(dir: string, fileName: string, data: string | Buffer): void;
export declare function writeJson(path: string, object: any): void;
export declare function readJson(path: string): any;
export declare function insertBetweenPlacweHolders(filePath: string, data: string, beginPlaceHolder: string, endPlaceHolder: string): void;
export declare function fileLines(path: string, lineSeparator?: RegExp): string[];
//# sourceMappingURL=../src/dist/fileSys.d.ts.map