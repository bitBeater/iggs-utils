[iggs-utils - v1.1.21](../README.md) / [Exports](../modules.md) / http

# Namespace: http

## Table of contents

### Interfaces

- [HttpRequestOptions](../interfaces/http.HttpRequestOptions.md)
- [httpResponse](../interfaces/http.httpResponse.md)

### Functions

- [cookiesToObj](http.md#cookiestoobj)
- [httpRequest](http.md#httprequest)
- [objToCookies](http.md#objtocookies)

## Functions

### cookiesToObj

▸ **cookiesToObj**(`cookiesStr`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cookiesStr` | `string` |

#### Returns

`object`

#### Defined in

[src/http.ts:83](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/http.ts#L83)

___

### httpRequest

▸ **httpRequest**(`reqOpts`, `body?`): `Promise`<[`httpResponse`](../interfaces/http.httpResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reqOpts` | `string` \| `URL` \| [`HttpRequestOptions`](../interfaces/http.HttpRequestOptions.md) |
| `body?` | `any` |

#### Returns

`Promise`<[`httpResponse`](../interfaces/http.httpResponse.md)\>

#### Defined in

[src/http.ts:16](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/http.ts#L16)

___

### objToCookies

▸ **objToCookies**(`obj`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`string`

#### Defined in

[src/http.ts:72](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/http.ts#L72)
