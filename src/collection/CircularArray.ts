export class CircularArray<T> {
	private array: T[];

	private currentIndex = 0;

	constructor(...items: T[]) {
		this.array = items || [];
	}

	get(index: number): T {
		this.currentIndex = ((index % this.array.length) + this.array.length) % this.array.length;
		return this.array[this.currentIndex];
	}

	left(): T {
		const retVal = this.get(this.currentIndex);
		this.currentIndex++;
		return retVal;
	}

	right(): T {
		const retVal = this.get(this.currentIndex);
		this.currentIndex--;
		return retVal;
	}

	peek(): T {
		return this.get(this.currentIndex);
	}
}
