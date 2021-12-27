[iggs-utils - v1.1.21](../README.md) / [Exports](../modules.md) / [http](../modules/http.md) / HttpRequestOptions

# Interface: HttpRequestOptions

[http](../modules/http.md).HttpRequestOptions

## Hierarchy

- `RequestOptions`

  ↳ **`HttpRequestOptions`**

## Table of contents

### Properties

- [\_defaultAgent](http.HttpRequestOptions.md#_defaultagent)
- [abort](http.HttpRequestOptions.md#abort)
- [agent](http.HttpRequestOptions.md#agent)
- [auth](http.HttpRequestOptions.md#auth)
- [createConnection](http.HttpRequestOptions.md#createconnection)
- [defaultPort](http.HttpRequestOptions.md#defaultport)
- [family](http.HttpRequestOptions.md#family)
- [headers](http.HttpRequestOptions.md#headers)
- [host](http.HttpRequestOptions.md#host)
- [hostname](http.HttpRequestOptions.md#hostname)
- [localAddress](http.HttpRequestOptions.md#localaddress)
- [maxHeaderSize](http.HttpRequestOptions.md#maxheadersize)
- [method](http.HttpRequestOptions.md#method)
- [path](http.HttpRequestOptions.md#path)
- [port](http.HttpRequestOptions.md#port)
- [protocol](http.HttpRequestOptions.md#protocol)
- [searchParams](http.HttpRequestOptions.md#searchparams)
- [setHost](http.HttpRequestOptions.md#sethost)
- [socketPath](http.HttpRequestOptions.md#socketpath)
- [timeout](http.HttpRequestOptions.md#timeout)
- [url](http.HttpRequestOptions.md#url)

## Properties

### \_defaultAgent

• `Optional` **\_defaultAgent**: `Agent`

#### Inherited from

RequestOptions.\_defaultAgent

#### Defined in

node_modules/@types/node/http.d.ts:134

___

### abort

• `Optional` **abort**: `AbortSignal`

#### Inherited from

RequestOptions.abort

#### Defined in

node_modules/@types/node/http.d.ts:116

___

### agent

• `Optional` **agent**: `boolean` \| `Agent`

#### Inherited from

RequestOptions.agent

#### Defined in

node_modules/@types/node/http.d.ts:133

___

### auth

• `Optional` **auth**: `string`

#### Inherited from

RequestOptions.auth

#### Defined in

node_modules/@types/node/http.d.ts:132

___

### createConnection

• `Optional` **createConnection**: (`options`: `ClientRequestArgs`, `oncreate`: (`err`: `Error`, `socket`: `Socket`) => `void`) => `Socket`

#### Type declaration

▸ (`options`, `oncreate`): `Socket`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ClientRequestArgs` |
| `oncreate` | (`err`: `Error`, `socket`: `Socket`) => `void` |

##### Returns

`Socket`

#### Inherited from

RequestOptions.createConnection

#### Defined in

node_modules/@types/node/http.d.ts:138

___

### defaultPort

• `Optional` **defaultPort**: `string` \| `number`

#### Inherited from

RequestOptions.defaultPort

#### Defined in

node_modules/@types/node/http.d.ts:122

___

### family

• `Optional` **family**: `number`

#### Inherited from

RequestOptions.family

#### Defined in

node_modules/@types/node/http.d.ts:120

___

### headers

• `Optional` **headers**: `OutgoingHttpHeaders`

#### Inherited from

RequestOptions.headers

#### Defined in

node_modules/@types/node/http.d.ts:131

___

### host

• `Optional` **host**: `string`

#### Inherited from

RequestOptions.host

#### Defined in

node_modules/@types/node/http.d.ts:118

___

### hostname

• `Optional` **hostname**: `string`

#### Inherited from

RequestOptions.hostname

#### Defined in

node_modules/@types/node/http.d.ts:119

___

### localAddress

• `Optional` **localAddress**: `string`

#### Inherited from

RequestOptions.localAddress

#### Defined in

node_modules/@types/node/http.d.ts:123

___

### maxHeaderSize

• `Optional` **maxHeaderSize**: `number`

**`default`** 8192

#### Inherited from

RequestOptions.maxHeaderSize

#### Defined in

node_modules/@types/node/http.d.ts:128

___

### method

• `Optional` **method**: `string`

#### Inherited from

RequestOptions.method

#### Defined in

node_modules/@types/node/http.d.ts:129

___

### path

• `Optional` **path**: `string`

#### Inherited from

RequestOptions.path

#### Defined in

node_modules/@types/node/http.d.ts:130

___

### port

• `Optional` **port**: `string` \| `number`

#### Inherited from

RequestOptions.port

#### Defined in

node_modules/@types/node/http.d.ts:121

___

### protocol

• `Optional` **protocol**: `string`

#### Inherited from

RequestOptions.protocol

#### Defined in

node_modules/@types/node/http.d.ts:117

___

### searchParams

• `Optional` **searchParams**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/http.ts:8](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/http.ts#L8)

___

### setHost

• `Optional` **setHost**: `boolean`

#### Inherited from

RequestOptions.setHost

#### Defined in

node_modules/@types/node/http.d.ts:136

___

### socketPath

• `Optional` **socketPath**: `string`

#### Inherited from

RequestOptions.socketPath

#### Defined in

node_modules/@types/node/http.d.ts:124

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

RequestOptions.timeout

#### Defined in

node_modules/@types/node/http.d.ts:135

___

### url

• `Optional` **url**: `string`

#### Defined in

[src/http.ts:7](https://github.com/alexrr2iggs/bundutils/blob/cefd848/src/http.ts#L7)
