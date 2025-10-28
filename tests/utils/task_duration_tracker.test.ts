import assert from 'node:assert';
import { describe, it } from 'node:test';
import { TaskDurationTracker } from 'iggs-utils/utils';
import { durationToMilliSeconds } from 'iggs-utils/time';



describe('TaskDurationTracker', () => {


    it('estimates as in example (1s per task)', (context) => {
        // setting clock mock
        context.mock.timers.enable({ apis: ['Date'] });



        const tracker = new TaskDurationTracker(5);

        assert.strictEqual(tracker.getCompletedTasks(), 0);
        assert.strictEqual(tracker.getRemainingTasks(), 5);
        // Elapsed total ms at start
        assert.strictEqual(Date.now() - tracker.getStartTime().getTime(), 0);

        for (let i = 1; i <= 5; i++) {
            context.mock.timers.tick(1000); // advance 1000ms

            tracker.recordTaskEnd();

            assert.strictEqual(tracker.getCompletedTasks(), i);
            assert.strictEqual(tracker.getRemainingTasks(), 5 - i);

            // Elapsed total ms since start
            assert.strictEqual(Date.now() - tracker.getStartTime().getTime(), i * 1000);

            // Expected finish time stays constant at T0 + 5000ms throughout
            assert.strictEqual(tracker.getExpectedFinishTime().getTime(), 5000);

            // Estimated remaining total ms
            const remainingMs = tracker.getExpectedFinishTime().getTime() - Date.now();
            assert.strictEqual(remainingMs, (5 - i) * 1000);
        }

        // At the end, remaining time should be 0 and finish time 5000
        assert.strictEqual(tracker.getExpectedFinishTime().getTime(), 5000);
        assert.strictEqual(tracker.getExpectedFinishTime().getTime() - Date.now(), 0);
    });

    it('computes mean time per task with non-uniform durations', (context) => {
        // setting clock mock
        context.mock.timers.enable({ apis: ['Date'] });
        const tracker = new TaskDurationTracker(5);

        // Task 1: 1000ms
        context.mock.timers.tick(1000);
        tracker.recordTaskEnd();
        // Mean = elapsed / completed = 1000 / 1
        assert.strictEqual(
            (Date.now() - tracker.getStartTime().getTime()) / tracker.getCompletedTasks(),
            1000
        );

        // Task 2: 2000ms (mean becomes 1500ms)
        context.mock.timers.tick(2000);
        tracker.recordTaskEnd();
        assert.strictEqual(
            Math.round((Date.now() - tracker.getStartTime().getTime()) / tracker.getCompletedTasks()),
            1500
        );

        // Remaining tasks: 3 -> estimated = 3 * 1500 = 4500ms
        const expectedRemaining = 4500;
        const remainingMs = tracker.getExpectedFinishTime().getTime() - Date.now();
        assert.strictEqual(remainingMs, expectedRemaining);

        // Expected finish = now + 4500ms
        const expectedFinish = Date.now() + expectedRemaining;
        assert.strictEqual(tracker.getExpectedFinishTime().getTime(), expectedFinish);
    });

    it('getElapsedTime + getEstimatedCompletionTime + getExpectedFinishTime (no tasks completed)', (context) => {
        context.mock.timers.enable({ apis: ['Date'] });
        const tracker = new TaskDurationTracker(3);

        // Initially zero elapsed
        assert.strictEqual(Date.now() - tracker.getStartTime().getTime(), 0);

        // Advance 1000ms with no completed tasks
        context.mock.timers.tick(1000);

        // getElapsedTime
        assert.strictEqual(durationToMilliSeconds(tracker.getElapsedTime()), 1000);

        // getEstimatedCompletionTime: mean=elapsed (no completed tasks), remaining=3 => 3 * 1000ms
        assert.strictEqual(durationToMilliSeconds(tracker.getEstimatedCompletionTime()), 3000);

        // getExpectedFinishTime: now + remaining
        assert.strictEqual(tracker.getExpectedFinishTime().getTime(), Date.now() + 3000);
    });

    it('getMeanTimePerTask (no intervals -> equals elapsed), then after a completion', (context) => {
        context.mock.timers.enable({ apis: ['Date'] });
        const tracker = new TaskDurationTracker(5);

        // No intervals yet: mean == elapsed
        context.mock.timers.tick(1200);
        assert.strictEqual(durationToMilliSeconds(tracker.getMeanTimePerTask()), 1200);

        // After first task completes at t=1200ms, mean = 1200
        tracker.recordTaskEnd();
        assert.strictEqual(durationToMilliSeconds(tracker.getMeanTimePerTask()), 1200);
    });

    it('addCompletedTask updates counts, start time, mean, and estimations', (context) => {
        context.mock.timers.enable({ apis: ['Date'] });
        const tracker = new TaskDurationTracker(2);

        // Manually add one completed interval [0, 200]
        const start = new Date(0);
        const end = new Date(200);
        tracker.addCompletedTask({ start, end });

        // getCompletedTasks / getRemainingTasks
        assert.strictEqual(tracker.getCompletedTasks(), 1);
        assert.strictEqual(tracker.getRemainingTasks(), 1);

        // getStartTime should be first interval start
        assert.strictEqual(tracker.getStartTime().getTime(), 0);

        // Move "now" forward to end time to keep elapsed coherent
        context.mock.timers.tick(200);

        // Mean time per task = 200ms
        assert.strictEqual(durationToMilliSeconds(tracker.getMeanTimePerTask()), 200);

        // getEstimatedCompletionTime: 1 remaining * 200ms
        assert.strictEqual(durationToMilliSeconds(tracker.getEstimatedCompletionTime()), 200);

        // getExpectedFinishTime: now + 200ms
        assert.strictEqual(tracker.getExpectedFinishTime().getTime(), Date.now() + 200);
    });

    it('recordTaskEnd chains intervals; mean reflects individual durations', (context) => {
        context.mock.timers.enable({ apis: ['Date'] });
        const tracker = new TaskDurationTracker(5);

        // First task takes 100ms
        context.mock.timers.tick(100);
        tracker.recordTaskEnd();

        // Second task takes 50ms (start = previous end implicitly)
        context.mock.timers.tick(50);
        tracker.recordTaskEnd();

        // getCompletedTasks / getRemainingTasks
        assert.strictEqual(tracker.getCompletedTasks(), 2);
        assert.strictEqual(tracker.getRemainingTasks(), 3);

        // Mean = (100 + 50) / 2 = 75ms
        assert.strictEqual(durationToMilliSeconds(tracker.getMeanTimePerTask()), 75);
    });
});




