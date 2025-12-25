
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

    test("02: on start cb", context => {
        context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });


        const onStartCb = context.mock.fn();

        const timer = new Timer(1000);

        timer.onStart = onStartCb;

        assert.strictEqual(onStartCb.mock.callCount(), 0);


        timer.start();
        assert.strictEqual(onStartCb.mock.callCount(), 1);

        context.mock.timers.tick(500);
        assert.strictEqual(onStartCb.mock.callCount(), 1);

        timer.pause();
        context.mock.timers.tick(500);
        assert.strictEqual(onStartCb.mock.callCount(), 1);


        timer.start();
        assert.strictEqual(onStartCb.mock.callCount(), 2);
        context.mock.timers.tick(500);

        assert.strictEqual(onStartCb.mock.callCount(), 2);
    });

    test("03: on pause cb", context => {
        context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });


        const onPause = context.mock.fn();

        const timer = new Timer(1000);

        timer.onPause = onPause;

        assert.strictEqual(onPause.mock.callCount(), 0);


        timer.start();
        assert.strictEqual(onPause.mock.callCount(), 0);

        context.mock.timers.tick(500);
        assert.strictEqual(onPause.mock.callCount(), 0);

        timer.pause();
        context.mock.timers.tick(500);
        assert.strictEqual(onPause.mock.callCount(), 1);


        timer.start();
        assert.strictEqual(onPause.mock.callCount(), 1);
        context.mock.timers.tick(500);

        assert.strictEqual(onPause.mock.callCount(), 1);
    });

    test("04: on start, pause, complete cb", context => {
        context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });


        const onPause = context.mock.fn();
        const onStart = context.mock.fn();
        const onComplete = context.mock.fn();

        const timer = new Timer(1000);

        timer.onStart = onStart;
        timer.onPause = onPause;
        timer.onComplete = onComplete;

        assert.strictEqual(onStart.mock.callCount(), 0);
        assert.strictEqual(onPause.mock.callCount(), 0);
        assert.strictEqual(onComplete.mock.callCount(), 0);


        timer.start();
        context.mock.timers.tick(500);
        assert.strictEqual(onStart.mock.callCount(), 1);
        assert.strictEqual(onPause.mock.callCount(), 0);
        assert.strictEqual(onComplete.mock.callCount(), 0);

        timer.pause();
        context.mock.timers.tick(500);
        assert.strictEqual(onStart.mock.callCount(), 1);
        assert.strictEqual(onPause.mock.callCount(), 1);
        assert.strictEqual(onComplete.mock.callCount(), 0);

        timer.start();
        context.mock.timers.tick(500);
        assert.strictEqual(onStart.mock.callCount(), 2);
        assert.strictEqual(onPause.mock.callCount(), 1);
        assert.strictEqual(onComplete.mock.callCount(), 1);
    });

    test("05: elapsedTime() before running", context => {
        context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
        const timer = new Timer(1000);
        context.mock.timers.tick(100);
        assert.strictEqual(timer.elapsedTime(), 0);
    });

    test("06: elapsedTime() while running", context => {
        context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });

        const timer = new Timer(1000);
        timer.start();
        context.mock.timers.tick(100);
        assert.strictEqual(timer.elapsedTime(), 100);
    });

    test("07: elapsedTime() while paused", context => {
        context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });

        const timer = new Timer(1000);
        timer.start();
        context.mock.timers.tick(100);
        assert.strictEqual(timer.elapsedTime(), 100);
        timer.pause();
        context.mock.timers.tick(100);
        assert.strictEqual(timer.elapsedTime(), 100);

    });

    test("08: elapsedTime() after complete", context => {
        context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });

        const timer = new Timer(1000);
        context.mock.timers.tick(2000);


        timer.start();
        context.mock.timers.tick(2000);
        assert.strictEqual(timer.elapsedTime(), 1000);
    });


    test("09: totalElapsedTime() before running", context => {
        context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });

        const timer = new Timer(1000);
        context.mock.timers.tick(100);

        assert.strictEqual(timer.totalElapsedTime(), 0);
    });

    test("10: totalElapsedTime() while running", context => {
        context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });

        const timer = new Timer(1000);
        context.mock.timers.tick(100);

        timer.start();
        context.mock.timers.tick(100);

        assert.strictEqual(timer.totalElapsedTime(), 100);

    });

    test("11: totalElapsedTime() while paused", context => {
        context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
        context.mock.timers.setTime(0);

        const timer = new Timer(1000);
        context.mock.timers.tick(100);

        timer.start();
        context.mock.timers.tick(100);

        assert.strictEqual(timer.totalElapsedTime(), 100);

        timer.pause();
        context.mock.timers.tick(100);

        assert.strictEqual(timer.totalElapsedTime(), 200);

    });

    test("12: totalElapsedTime() after complete", context => {
        context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });

        const timer = new Timer(1000);
        context.mock.timers.tick(100);

        timer.start();
        context.mock.timers.tick(2000);

        assert.strictEqual(timer.totalElapsedTime(), 2000);

    });

    test("12.1: totalElapsedTime() after complete", context => {
        context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
        context.mock.timers.setTime(0);

        const timer = new Timer(1000);
        context.mock.timers.tick(100);

        timer.start();
        context.mock.timers.tick(500);

        timer.pause();
        context.mock.timers.tick(500);

        timer.start();
        context.mock.timers.tick(500);
        context.mock.timers.tick(500);

        assert.strictEqual(timer.totalElapsedTime(), 1500);
    });


    test("13: remainingTime() before running", context => {
        context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
        const timer = new Timer(1000);
        context.mock.timers.tick(100);

        assert.strictEqual(timer.remainingTime(), 1000);
    });

    test("14: remainingTime() while running", context => {
        context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });

        const timer = new Timer(1000);
        context.mock.timers.tick(100);

        timer.start();
        context.mock.timers.tick(200);

        assert.strictEqual(timer.remainingTime(), 800);
    });

    test("15: remainingTime() while paused", context => {
        context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });

        const timer = new Timer(1000);
        context.mock.timers.tick(100);

        timer.start();
        context.mock.timers.tick(200);

        assert.strictEqual(timer.remainingTime(), 800);

        timer.pause();
        context.mock.timers.tick(200);

        assert.strictEqual(timer.remainingTime(), 800);

    });

    test("16: remainingTime() after complete", context => {
        context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });

        const timer = new Timer(1000);

        timer.start();
        context.mock.timers.tick(2000);

        assert.strictEqual(timer.remainingTime(), 0);
    });

    test("17: status after created", context => {
        context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
        const timer = new Timer(1);

        assert.strictEqual(timer.started, false);
        assert.strictEqual(timer.running, false);
        assert.strictEqual(timer.paused, false);
        assert.strictEqual(timer.completed, false);
    });

    test("18: status after started", context => {
        context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
        const timer = new Timer(1);
        timer.start();

        assert.strictEqual(timer.started, true);
        assert.strictEqual(timer.running, true);
        assert.strictEqual(timer.paused, false);
        assert.strictEqual(timer.completed, false);
    });

    test("19: status after pause", context => {
        context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });

        const timer = new Timer(1);
        timer.start();
        timer.pause();

        assert.strictEqual(timer.started, true);
        assert.strictEqual(timer.running, false);
        assert.strictEqual(timer.paused, true);
        assert.strictEqual(timer.completed, false);
    });

    test("20: status after complete", context => {
        context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });

        const timer = new Timer(1000);
        timer.start();
        context.mock.timers.tick(1000);

        assert.strictEqual(timer.started, true);
        assert.strictEqual(timer.running, false);
        assert.strictEqual(timer.paused, false);
        assert.strictEqual(timer.completed, true);
    });


    test("21: status after paused without start", context => {
        context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });

        const timer = new Timer(1);
        timer.pause();


        assert.strictEqual(timer.started, false);
        assert.strictEqual(timer.running, false);
        assert.strictEqual(timer.paused, false);
        assert.strictEqual(timer.completed, false);
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