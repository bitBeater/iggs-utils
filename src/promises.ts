export function of<T>(data?: T): Promise<T> {
	return new Promise((resolve, _reject) => {
		resolve(data);
	});
}
