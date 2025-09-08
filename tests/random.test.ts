import assert from 'node:assert';
import { describe, it } from "node:test";


import { getRandom, getRandomInt, getRandomBool, getRandomSign, getRandomChar, getRandomString, getRandomDate } from "iggs-utils/random";


describe("Random", () => {
    it("getRandom", () => {
        for (let i = 0; i < 100; i++) {
            const num = getRandom(-5, 10);
            if (num < -5 || num > 10) {
                assert.fail(`getRandom(-5, 10) returned ${num}, which is out of range`);
            }
        }
    });
    it("getRandomInt", () => {
        for (let i = 0; i < 100; i++) {
            const num = getRandomInt(-5, 10);
            if (num < -5 || num > 10) {
                throw new Error(`getRandomInt(-5, 10) returned ${num}, which is out of range`);
            }
        }
    });
    it("getRandomBool", () => {
        for (let i = 0; i < 100; i++) {
            const bool = getRandomBool();
            if (typeof bool !== "boolean") {
                throw new Error(`getRandomBool() returned ${bool}, which is not a boolean`);
            }
        }
    });
    it("getRandomSign", () => {
        for (let i = 0; i < 100; i++) {
            const sign = getRandomSign();
            if (sign !== 1 && sign !== -1) {
                throw new Error(`getRandomSign() returned ${sign}, which is not a valid sign`);
            }
        }
    });
    it("getRandomChar", () => {
        for (let i = 0; i < 100; i++) {
            const char = getRandomChar();
            if (typeof char !== "string" || char.length !== 1) {
                throw new Error(`getRandomChar() returned ${char}, which is not a valid character`);
            }
        }
    });
    it("getRandomString", () => {
        for (let i = 0; i < 100; i++) {
            const str = getRandomString(5);
            if (typeof str !== "string" || str.length !== 5) {
                throw new Error(`getRandomString(5) returned ${str}, which is not a valid string`);
            }
        }
    });
    it("getRandomDate", () => {
        for (let i = 0; i < 100; i++) {
            const date = getRandomDate();
            if (!(date instanceof Date)) {
                throw new Error(`getRandomDate() returned ${date}, which is not a valid date`);
            }
            // is valid date
            if (isNaN(date.getTime())) {
                throw new Error(`getRandomDate() returned ${date}, which is not a valid date`);
            }
        }
    });
});
