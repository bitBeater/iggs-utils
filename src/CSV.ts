import { Reviver } from './revivers';
import { math } from '.';
import { union, get, set, unescape } from 'lodash';
import { getPathKeys, PathKeysOptions } from './object';

const ESCAPE_CHAR = String.fromCharCode(-1);
const DEFAULT_SEPARATOR = ';';
type CSVValue = string | number;

interface CSVOPtions {
	parser?: (key: string, value: any) => any;
	numberPrecision?: number;
	columns?: string[];
	separator?: string;
	//dateFormat?: string,
	pathKeyOPtions?: PathKeysOptions;
}

interface ParseCSVOPtions {
	reviver?: Reviver<any>;
	collumns?: string[];
	separator?: string;
}

export function parse<T>(txt: string, options?: ParseCSVOPtions): T[] {
	const collumns = options?.collumns || parseColumns(txt, options?.separator);
	const csvRawRows = txt.split('\n').slice(1);
	const opt = { ...options, collumns };
	const retVAl: T[] = csvRawRows.map(csvRawRow => parseCsv(csvRawRow, opt));

	return retVAl;
}

export function stringify(values: any[], opt?: CSVOPtions): string {
	const csvLines: string[] = [];
	const columns = opt?.columns || getCsvColumns(values, opt);

	for (const obj of values) {
		const csvLine = toCsvLine(obj, { ...opt, columns });
		csvLines.push(csvLine);
	}

	const csv = [columns.join(opt?.separator || DEFAULT_SEPARATOR), ...csvLines].join('\n');

	return csv;
}

function parseCsvValue(value: unknown, options?: { numberPrecision?: number }): CSVValue {
	switch (typeof value) {
		case 'string':
			return value;
		case 'bigint':
		case 'number':
			return math.round(value as any, options?.numberPrecision || 4);
		default: {
			return JSON.stringify(value);
		}
	}
}

export function getCsvColumns(objs: Object[], opt?: CSVOPtions): string[] {
	const columns: string[][] = objs.map(obj => getPathKeys(obj, { ...opt?.pathKeyOPtions, omitFirstLevel: true, ignoreFunctions: true }));

	return union(...columns);
}

export function toCsvLine(obj: any, opt?: CSVOPtions): string {
	const columns = opt?.columns || getCsvColumns([obj], opt);

	const csvVAlues: CSVValue[] = [];

	for (const column of columns) {
		const value = get(obj, column);
		const parsedValue = opt?.parser?.(column, value) || value;
		const csvValue = parseCsvValue(parsedValue, opt);
		const cleanValue = escapeSeparator(csvValue);
		csvVAlues.push(cleanValue);
	}

	return csvVAlues.join(opt?.separator || DEFAULT_SEPARATOR);
}

function parseColumns(txt: string, separator = DEFAULT_SEPARATOR): string[] {
	const columnsRaw = txt.split('\n')[0];
	const collumns = columnsRaw.split(separator);
	return collumns;
}

function parseCsv<T extends Object>(txt: string, options: ParseCSVOPtions): T {
	if (!options?.collumns?.length || !txt) return;
	const separator = options?.separator || DEFAULT_SEPARATOR;
	const rawValues = txt.split(separator);

	if (rawValues.length !== options?.collumns?.length) throw new Error('parsed values length dont match columns length');

	var value: T = {} as T;

	options.collumns.forEach((collumn, index) => {
		const rawVAlue = rawValues[index];
		const parsedValue = options?.reviver ? options?.reviver(collumn, rawVAlue) : rawVAlue;
		const unescapedSeparator = unEscapeSeparator(parsedValue, separator);
		set(value, collumn, unescapedSeparator);
	});

	return value;
}

function escapeSeparator(value: CSVValue, separator = DEFAULT_SEPARATOR): CSVValue {
	if (typeof value === 'string') return value.replace(new RegExp(separator, 'g'), ESCAPE_CHAR);
	return value;
}

function unEscapeSeparator(value: string, separator = DEFAULT_SEPARATOR): string {
	return value?.replace(new RegExp(ESCAPE_CHAR, 'g'), separator);
}
