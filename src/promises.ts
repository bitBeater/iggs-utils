export function of<T>(data?: T): Promise<T> {
	return Promise.resolve(data);
}

export function delay(ms: number): Promise<void> {
	return new Promise((resolve, _reject) => {
		setTimeout(resolve, ms);
	});
}
