
import assert from 'node:assert';
import { describe, it, test } from "node:test";

import { Timer } from 'iggs-utils/time/timer';



describe("timer", () => {

    test("00: timer should execute call back after 1s", context => {
        context.mock.timers.enable({ apis: ['setTimeout'] });

        const cb = context.mock.fn();

        const timer = new Timer(1000, cb);
        timer.start();

        context.mock.timers.tick(1000);

        assert.strictEqual(cb.mock.callCount(), 1);
    });


    test("01: timer should stop and then restart", context => {
        context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });


        const cb = context.mock.fn();

        const timer = new Timer(1000, cb);

        timer.start();
        context.mock.timers.tick(500);

        timer.pause();
        context.mock.timers.tick(500);

        assert.strictEqual(cb.mock.callCount(), 0);

        timer.start();
        context.mock.timers.tick(250);

        assert.strictEqual(cb.mock.callCount(), 0);

        context.mock.timers.tick(250);

        assert.strictEqual(cb.mock.callCount(), 1);
    });
});


// test('mocks setTimeout to be executed synchronously without having to actually wait for it', (context) => {
//     const fn = context.mock.fn();
//     context.mock.timers.enable({ apis: ['setTimeout'] });

//     setTimeout(fn, 9999);
//     assert.strictEqual(fn.mock.callCount(), 0);

//     // Advance in time
//     context.mock.timers.tick(9999);

//     assert.strictEqual(fn.mock.callCount(), 1);
// });