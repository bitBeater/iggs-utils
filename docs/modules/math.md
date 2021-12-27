[iggs-utils - v1.1.21](../README.md) / [Exports](../modules.md) / math

# Namespace: math

## Table of contents

### Functions

- [calculatePercent](math.md#calculatepercent)
- [percDiff](math.md#percdiff)
- [round](math.md#round)

## Functions

### calculatePercent

▸ **calculatePercent**(`value`, `percent`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | the value tu be multiplied by the given percent value |
| `percent` | `number` | percent value |

#### Returns

`number`

the value multiplied by percent

## Example
```ts
calculatePercent(100,10)
// output: 110

calculatePercent(100,-10)
// output: 90
```

#### Defined in

[src/math.ts:46](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/math.ts#L46)

___

### percDiff

▸ **percDiff**(`start`, `end`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | start value |
| `end` | `number` | end value |

#### Returns

`number`

the percent difference

## Example
```ts
percDiff(100,90)
// output: -10

percDiff(90,100)
// output: 10
```

#### Defined in

[src/math.ts:27](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/math.ts#L27)

___

### round

▸ **round**(`n`, `positions?`): `number`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `n` | `number` | `undefined` | number to be rounded round |
| `positions` | `number` | `0` | decimal positions depth to round |

#### Returns

`number`

the rounded number

#### Defined in

[src/math.ts:7](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/math.ts#L7)
