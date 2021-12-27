[iggs-utils - v1.1.21](../README.md) / [Exports](../modules.md) / CSV

# Namespace: CSV

## Table of contents

### Functions

- [getCsvColumns](CSV.md#getcsvcolumns)
- [parse](CSV.md#parse)
- [stringify](CSV.md#stringify)
- [toCsvLine](CSV.md#tocsvline)

## Functions

### getCsvColumns

▸ **getCsvColumns**(`objs`, `opt?`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `objs` | `Object`[] |
| `opt?` | `CSVOPtions` |

#### Returns

`string`[]

#### Defined in

[src/CSV.ts:61](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/CSV.ts#L61)

___

### parse

▸ **parse**<`T`\>(`txt`, `options?`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `txt` | `string` |
| `options?` | `ParseCSVOPtions` |

#### Returns

`T`[]

#### Defined in

[src/CSV.ts:25](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/CSV.ts#L25)

___

### stringify

▸ **stringify**(`values`, `opt?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `any`[] |
| `opt?` | `CSVOPtions` |

#### Returns

`string`

#### Defined in

[src/CSV.ts:34](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/CSV.ts#L34)

___

### toCsvLine

▸ **toCsvLine**(`obj`, `opt?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |
| `opt?` | `CSVOPtions` |

#### Returns

`string`

#### Defined in

[src/CSV.ts:67](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/CSV.ts#L67)
