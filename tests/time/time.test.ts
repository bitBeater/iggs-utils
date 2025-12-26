
import assert from 'node:assert';
import test, { describe, it } from "node:test";

import { MAX_JS_DATE } from "@bitbeater/ecma-utils/time";


describe("time", () => {

    it("MAX_JS_DATE is valid date", () => {
        const maxDate = new Date(MAX_JS_DATE);
        const isValidDate = !isNaN(maxDate.getTime());
        assert.strictEqual(isValidDate, true);
    });

    it("MAX_JS_DATE + 1 is invalid date", () => {
        const maxDate = new Date(MAX_JS_DATE + 1);
        const isValidDate = !isNaN(maxDate.getTime());
        assert.strictEqual(isValidDate, false);
    });
});

