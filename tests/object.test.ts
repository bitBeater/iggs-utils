import assert from 'node:assert';
import { describe, it } from "node:test";
import { isPlainObject, keysOf } from "@bitbeater/ecma-utils/object";





describe("object", () => {
    describe("isPlainObject", () => {

        it("object should be object", () => {
            assert.strictEqual(isPlainObject({}), true);
        });

        it("nested object should be object", () => {
            assert.strictEqual(isPlainObject({ a: 1, b: { c: 2 } }), true);
        });

        it("function shouldnt be object", () => {
            assert.strictEqual(isPlainObject(() => { }), false);
        });

        it("null shouldnt be object", () => {
            assert.strictEqual(isPlainObject(null), false);
        });

        it("undefined shouldnt be object", () => {
            assert.strictEqual(isPlainObject(undefined), false);
        });

        it("array shouldnt be object", () => {
            assert.strictEqual(isPlainObject([]), false);
        });

        it("date shouldnt be object", () => {
            assert.strictEqual(isPlainObject(new Date()), false);
        });

        it("string shouldnt be object", () => {
            assert.strictEqual(isPlainObject("hello"), false);
        });

        it("number shouldnt be object", () => {
            assert.strictEqual(isPlainObject(123), false);
        });

        it("boolean shouldnt be object", () => {
            assert.strictEqual(isPlainObject(true), false);
        });

        it("symbol shouldnt be object", () => {
            assert.strictEqual(isPlainObject(Symbol("sym")), false);
        });

        it("bigint shouldnt be object", () => {
            assert.strictEqual(isPlainObject(BigInt(123)), false);
        });

        it("Promise shouldnt be object", () => {
            assert.strictEqual(isPlainObject(Promise.resolve(123)), false);
        });
    });

    describe("keysOf", () => {
        it("object should return keys", () => {
            const obj = { a: 1, b: 2, c: 3 };
            const keys = keysOf(obj);
            assert.deepStrictEqual(keys, ['a', 'b', 'c']);
        });

        it("array should return indices", () => {
            const arr = [10, 20, 30];
            const keys = keysOf(arr);
            assert.deepStrictEqual(keys, ['0', '1', '2']);
        });

        it("nested object should return top-level keys", () => {
            const obj = { a: 1, b: { c: 2, d: 3 }, e: 4 };
            const keys = keysOf(obj);
            assert.deepStrictEqual(keys, ['a', 'b', 'e']);
        });

    });
});
