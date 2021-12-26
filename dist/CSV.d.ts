import { Reviver } from './revivers';
import { PathKeysOptions } from './object';
interface CSVOPtions {
    parser?: (key: string, value: any) => any;
    numberPrecision?: number;
    columns?: string[];
    separator?: string;
    pathKeyOPtions?: PathKeysOptions;
}
interface ParseCSVOPtions {
    reviver?: Reviver<any>;
    collumns?: string[];
    separator?: string;
}
export declare function parse<T>(txt: string, options?: ParseCSVOPtions): T[];
export declare function stringify(values: any[], opt?: CSVOPtions): string;
export declare function getCsvColumns(objs: Object[], opt?: CSVOPtions): string[];
export declare function toCsvLine(obj: any, opt?: CSVOPtions): string;
export {};
//# sourceMappingURL=CSV.d.ts.map