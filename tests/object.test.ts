import assert from 'node:assert';
import { describe, it } from "node:test";
import { isPlainObject } from "iggs-utils/object";





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


});
