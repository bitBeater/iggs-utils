[iggs-utils - v1.1.21](../README.md) / [Exports](../modules.md) / fileSys

# Namespace: fileSys

## Table of contents

### Variables

- [DESKTOP\_PATH](fileSys.md#desktop_path)

### Functions

- [appendFile](fileSys.md#appendfile)
- [deserealizeObject](fileSys.md#deserealizeobject)
- [exists](fileSys.md#exists)
- [fileLines](fileSys.md#filelines)
- [insertBetweenPlacweHolders](fileSys.md#insertbetweenplacweholders)
- [readGZip](fileSys.md#readgzip)
- [readJson](fileSys.md#readjson)
- [serealizeObject](fileSys.md#serealizeobject)
- [write](fileSys.md#write)
- [writeGZip](fileSys.md#writegzip)
- [writeJson](fileSys.md#writejson)
- [writeObjectToDesktop](fileSys.md#writeobjecttodesktop)
- [writeToDesktop](fileSys.md#writetodesktop)

## Variables

### DESKTOP\_PATH

• **DESKTOP\_PATH**: `string`

#### Defined in

[src/fileSys.ts:8](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/fileSys.ts#L8)

## Functions

### appendFile

▸ **appendFile**(`path`, `data`, `options?`): `Promise`<`void`\>

add to file, if the file or folder does not exist it will be recursively created

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` \| `FileHandle` |
| `data` | `string` \| `Uint8Array` |
| `options?` | `BufferEncoding` \| `ObjectEncodingOptions` & `FlagAndOpenMode` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/fileSys.ts:98](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/fileSys.ts#L98)

___

### deserealizeObject

▸ **deserealizeObject**(`filePath`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |

#### Returns

`any`

#### Defined in

[src/fileSys.ts:79](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/fileSys.ts#L79)

___

### exists

▸ `Const` **exists**(`path`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/fileSys.ts:83](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/fileSys.ts#L83)

___

### fileLines

▸ **fileLines**(`path`, `lineSeparator?`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `lineSeparator` | `RegExp` |

#### Returns

`string`[]

#### Defined in

[src/fileSys.ts:52](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/fileSys.ts#L52)

___

### insertBetweenPlacweHolders

▸ **insertBetweenPlacweHolders**(`filePath`, `data`, `beginPlaceHolder`, `endPlaceHolder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `data` | `string` |
| `beginPlaceHolder` | `string` |
| `endPlaceHolder` | `string` |

#### Returns

`void`

#### Defined in

[src/fileSys.ts:38](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/fileSys.ts#L38)

___

### readGZip

▸ **readGZip**(`path`, `readFileOptions?`, `zlibOptions?`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `readFileOptions?` | `Object` |
| `readFileOptions.encoding?` | ``null`` |
| `readFileOptions.flag?` | `string` |
| `zlibOptions?` | `ZlibOptions` |

#### Returns

`Buffer`

#### Defined in

[src/fileSys.ts:70](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/fileSys.ts#L70)

___

### readJson

▸ **readJson**(`path`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`any`

#### Defined in

[src/fileSys.ts:29](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/fileSys.ts#L29)

___

### serealizeObject

▸ **serealizeObject**(`filePath`, `object`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `object` | `any` |

#### Returns

`void`

#### Defined in

[src/fileSys.ts:75](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/fileSys.ts#L75)

___

### write

▸ **write**(`dir`, `fileName`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |
| `fileName` | `string` |
| `data` | `string` \| `Buffer` |

#### Returns

`void`

#### Defined in

[src/fileSys.ts:18](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/fileSys.ts#L18)

___

### writeGZip

▸ **writeGZip**(`filePath`, `data`, `writeFileOptions?`, `zLibOptions?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `data` | `string` \| `Buffer` |
| `writeFileOptions?` | `WriteFileOptions` |
| `zLibOptions?` | `ZlibOptions` |

#### Returns

`void`

#### Defined in

[src/fileSys.ts:64](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/fileSys.ts#L64)

___

### writeJson

▸ **writeJson**(`path`, `object`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `object` | `any` |

#### Returns

`void`

#### Defined in

[src/fileSys.ts:25](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/fileSys.ts#L25)

___

### writeObjectToDesktop

▸ **writeObjectToDesktop**(`fileName`, `object`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileName` | `string` |
| `object` | `any` |

#### Returns

`void`

#### Defined in

[src/fileSys.ts:10](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/fileSys.ts#L10)

___

### writeToDesktop

▸ **writeToDesktop**(`fileName`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileName` | `string` |
| `data` | `string` \| `Buffer` |

#### Returns

`void`

#### Defined in

[src/fileSys.ts:14](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/fileSys.ts#L14)
