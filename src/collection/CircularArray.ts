/**
 * A circular array implementation that allows for wrapping around the ends.
 * @example
 * ```ts
 * import { collection } from 'iggs-utils';
 * 
 * const circularArray = new collection.CircularArray<string>(monday, tuesday, wednesday, thursday, friday, saturday, sunday);
 * 
 * // accessing elements by position
 * circularArray.get()   // monday
 * circularArray.get(0)  // monday
 * circularArray.get(1)  // tuesday
 * circularArray.get(2)  // wednesday
 * circularArray.get(-1) // sunday
 * circularArray.get(7)  // monday
 * circularArray.get(-7) // monday
 * 
 * // navigating the circular array
 * circularArray.next()       // tuesday
 * circularArray.next()       // wednesday
 * circularArray.next()       // thursday
 * circularArray.next(10)     // sunday
 * circularArray.get()        // sunday
 * circularArray.previous()   // saturday
 * circularArray.previous()   // friday
 * circularArray.previous()   // thursday
 * circularArray.previous(10) // monday
 * circularArray.get()        // monday
 *
 * // working with positions
 * circularArray.setIndex(2)     // wednesday
 * circularArray.setPosition(10) // thursday
 * circularArray.getIndex()      // 3
 * circularArray.getPosition()   // 10
 * ```
 */
export class CircularArray<T> {
	private array: T[];

	private currentIndex = 0;
	private currentPosition = 0;

	constructor(...items: T[]) {
		this.array = items || [];
	}

	/**
	 * Moves the current position forward by the specified number of steps (1 by default).
	 * @param steps The number of steps to move forward (default is 1).
	 * @returns The value at the new current position.
	 */
	next(steps: number = 1): T {
		this.currentPosition += steps;
		this.currentIndex = this.positionToIndex(this.currentPosition);
		return this.get();
	}

	/**
	 * Moves the current position backward by the specified number of steps (1 by default).
	 * @param steps The number of steps to move backward (default is 1).
	 * @returns The value at the new current position.
	 */
	previous(steps: number = 1): T {
		this.currentPosition -= steps;
		this.currentIndex = this.positionToIndex(this.currentPosition);
		return this.get();
	}

	/**
	 * Returns the element at the specified position in the circular array.
	 * @param position The position to peek at (defaults to the current position).
	 * @returns The value at the specified position.
	 */
	get(position?: number): T {
		const index = position !== undefined ? this.positionToIndex(position) : this.currentIndex;
		return this.array[index];
	}

	/**
	 * Returns the current index in the circular array.
	 * @returns The current index.
	 */
	getIndex(): number {
		return this.currentIndex;
	}

	/**
	 * Returns the current index in the circular array.
	 * @returns The current index.
	 */
	getPosition(): number {
		return this.currentPosition;
	}

	/**
	 * Returns the size of the circular array.
	 * @returns The size of the circular array.
	 */
	getSize(): number {
		return this.array.length;
	}

	/**
	 * Returns a shallow copy of the circular array as a regular array.
	 * @returns A regular array containing the elements of the circular array.
	 */
	toArray(): T[] {
		return this.array.slice();
	}

	/**
	 * Set the current position in the circular array.
	 * @param position The position to set.
	 */
	setPosition(position: number): T {
		this.currentPosition = position;
		this.currentIndex = this.positionToIndex(position);
		return this.get();
	}

	/**
	 * Set the current index in the circular array.
	 * Also updates the current position at the index value.
	 * @param index The index to set.
	 */
	setIndex(index: number): T {
		if (index < 0 || index >= this.array.length) throw new Error(`CircularArray.setIndex(): Index out of bounds: ${index}. Accepted range is 0 to ${this.array.length - 1}`);
		this.currentIndex = index;
		this.currentPosition = index;
		return this.get();
	}

	/**
	 * it converts a given position to a valid index within the array bounds.
	 * @param position can be negative or greater than the array length
	 * @returns a valid index within the array bounds
	 */
	private positionToIndex(position: number): number {
		return ((position % this.array.length) + this.array.length) % this.array.length;
	}
}
