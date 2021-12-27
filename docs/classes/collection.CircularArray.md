[iggs-utils - v1.1.21](../README.md) / [Exports](../modules.md) / [collection](../modules/collection.md) / CircularArray

# Class: CircularArray<T\>

[collection](../modules/collection.md).CircularArray

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](collection.CircularArray.md#constructor)

### Properties

- [array](collection.CircularArray.md#array)
- [currentIndex](collection.CircularArray.md#currentindex)

### Methods

- [get](collection.CircularArray.md#get)
- [left](collection.CircularArray.md#left)
- [peek](collection.CircularArray.md#peek)
- [right](collection.CircularArray.md#right)

## Constructors

### constructor

• **new CircularArray**<`T`\>(...`items`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...items` | `T`[] |

#### Defined in

[src/collection/CircularArray.ts:6](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/collection/CircularArray.ts#L6)

## Properties

### array

• `Private` **array**: `T`[]

#### Defined in

[src/collection/CircularArray.ts:2](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/collection/CircularArray.ts#L2)

___

### currentIndex

• `Private` **currentIndex**: `number` = `0`

#### Defined in

[src/collection/CircularArray.ts:4](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/collection/CircularArray.ts#L4)

## Methods

### get

▸ **get**(`index`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`T`

#### Defined in

[src/collection/CircularArray.ts:10](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/collection/CircularArray.ts#L10)

___

### left

▸ **left**(): `T`

#### Returns

`T`

#### Defined in

[src/collection/CircularArray.ts:15](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/collection/CircularArray.ts#L15)

___

### peek

▸ **peek**(): `T`

#### Returns

`T`

#### Defined in

[src/collection/CircularArray.ts:27](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/collection/CircularArray.ts#L27)

___

### right

▸ **right**(): `T`

#### Returns

`T`

#### Defined in

[src/collection/CircularArray.ts:21](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/collection/CircularArray.ts#L21)
