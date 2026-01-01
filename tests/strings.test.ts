import assert from 'node:assert';
import { describe, it } from "node:test";
import { templateToString, spacedWords } from "@bitbeater/ecma-utils/strings";






describe('strings', () => {
    describe('parse template', () => {
        it('without expression', () => {
            const parsed = templateToString`test`;
            assert.equal(parsed, 'test');
        });

        it('without template', () => {
            const parsed = templateToString`${'test'}`;
            assert.equal(parsed, 'test');
        });

        it('with expression after', () => {
            const parsed = templateToString`test ${'after'}`;
            assert.equal(parsed, 'test after');
        });

        it('with expression before', () => {
            const parsed = templateToString`${'before'} test`;
            assert.equal(parsed, 'before test');
        });

        it('template between expression ', () => {
            const parsed = templateToString`${'before'} test ${'after'}`;
            assert.equal(parsed, 'before test after');
        });

        it('expression between template', () => {
            const parsed = templateToString`before ${'test'} after`;
            assert.equal(parsed, 'before test after');
        });

        it('multiple expressions', () => {
            const parsed = templateToString`before ${'test'} ${'after'}`;
            assert.equal(parsed, 'before test after');
        });

        it('only expressions', () => {
            const parsed = templateToString`${'before'} ${'test'} ${'after'}`;
            assert.equal(parsed, 'before test after');
        });
    });

    describe('spaced words', () => {


        it('simple sentence', () => {
            const result = spacedWords('Hello world');
            assert.deepEqual(result, [
                ['', 'Hello'],
                [' ', 'world'],
            ]);
        });

        it('with tabs and new lines', () => {
            const result = spacedWords('\t Hello \n world ');
            assert.deepEqual(result, [
                ['\t ', 'Hello'],
                [' \n ', 'world'],
                [' ', '']
            ]);
        });

        it('only whitespace', () => {
            const result = spacedWords('   \n\t  ');
            assert.deepEqual(result, [
                ['   \n\t  ', '']
            ]);
        });

        it('no whitespace', () => {
            const result = spacedWords('HelloWorld');
            assert.deepEqual(result, [
                ['', 'HelloWorld']
            ]);
        });
    });
});




