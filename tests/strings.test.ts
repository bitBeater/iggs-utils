import assert from 'node:assert';
import { describe, it } from "node:test";
import { templateToString, spacedWords, splitRuns } from "@bitbeater/ecma-utils/strings";






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

    describe('split runs', () => {


        it('0: no match delimiter', () => {

            const result = splitRuns('Hello world', c => false);
            assert.deepEqual(result, [
                ['', 'Hello world']
            ]);

        });


        it('1: midle delimiter', () => {

            const isDelim = (ch: string) => ch === ' ' || ch === '-' || ch === '!';

            const result = splitRuns('hello world', isDelim);

            assert.deepEqual(result,
                [
                    ["", "hello"],
                    [" ", "world"],
                ]
            );
        });


        it('2: trailing delimiter', () => {

            const isDelim = (ch: string) => ch === ' ' || ch === '-' || ch === '!';

            const result = splitRuns('hello world!', isDelim);

            assert.deepEqual(result,
                [
                    ["", "hello"],
                    [" ", "world"],
                    ["!", ""]
                ]
            );
        });

        it('3: leading delimiter', () => {

            const isDelim = (ch: string) => ch === ' ' || ch === '-' || ch === '!';

            const result = splitRuns('- hello world!', isDelim);

            assert.deepEqual(result,
                [
                    ["- ", "hello"],
                    [" ", "world"],
                    ["!", ""]
                ]
            );
        });

    });
});




