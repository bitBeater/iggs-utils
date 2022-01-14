export declare class CircularArray<T> {
    private array;
    private currentIndex;
    constructor(...items: T[]);
    get(index: number): T;
    left(): T;
    right(): T;
    peek(): T;
}
//# sourceMappingURL=../../src/src/collection/CircularArray.d.ts.map