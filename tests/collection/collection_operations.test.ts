import assert from 'node:assert';
import test, { describe, it } from 'node:test';
import { pickRandomElements, takeRandomElements } from 'iggs-utils/collection';


describe('collection/CollectionOperations', () => {

    describe('pickRandomElement', async () => {
        it('should pick the right amount', async () => {
            const arr = [1, 2, 3, 4, 5];
            const elementsToPick = 3;

            const picked = pickRandomElements(arr, elementsToPick);

            assert.strictEqual(picked.length, elementsToPick);
        });

        it('should pick elements from array', async () => {
            const originalArray = [1, 2, 3, 4, 5];

            const pickedElements = pickRandomElements(originalArray, 3);

            for (const pickedElement of pickedElements)
                if (!originalArray.includes(pickedElement))
                    assert.fail(`Picked element ${pickedElement} is not in the original array`);

        });

        it('should not affect original', async () => {
            const arr = [1, 2, 3, 4, 5];
            const originalClone = [...arr];

            pickRandomElements(arr, 3);

            assert.deepStrictEqual(arr, originalClone);
        });

        it('should pick a element once', async () => {
            const arr = [];
            for (let i = 0; i < 100; i++) arr.push(i);

            const pickeds = pickRandomElements(arr, arr.length);

            for (const picked of pickeds)
                if (pickeds.filter(e => e === picked).length > 1)
                    assert.fail(`Element ${picked} was picked more than once`);

        });
    });

    describe('takeRandomElement', async () => {
        it('should tale the right amount', async () => {
            const arr = [1, 2, 3, 4, 5];
            const elementsToTake = 3;

            const takedElements = takeRandomElements(arr, elementsToTake);

            assert.strictEqual(takedElements.length, elementsToTake);
        });

        it('should take elements from array', async () => {
            const originalArray = [1, 2, 3, 4, 5];

            const takedElements = takeRandomElements(originalArray, 3);

            for (const pickedElement of takedElements)
                if (originalArray.includes(pickedElement))
                    assert.fail(`Tacken element ${pickedElement} is still in the original array`);

        });

        it('should remove taken from original', async () => {
            const arr = [1, 2, 3, 4, 5];
            const originalClone = [...arr];

            const takenElements = takeRandomElements(arr, 3);

            assert.equal(arr.length, originalClone.length - takenElements.length);

            for (const takenElement of takenElements)
                if (arr.includes(takenElement))
                    assert.fail(`Taken element ${takenElement} is still in the original array`);
        });

        it('should take a element once', async () => {
            const arr = [];
            for (let i = 0; i < 100; i++) arr.push(i);


            const takedElements = takeRandomElements(arr, arr.length);

            for (const takedElement of takedElements)
                if (takedElements.filter(e => e === takedElement).length > 1)
                    assert.fail(`Element ${takedElement} was taken more than once`);
        });
    });
});