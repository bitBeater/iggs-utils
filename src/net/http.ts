import { parseIntOrZero } from '../math';
import { delay } from '../promises';

export function cookieStringToObject(cookie: string): { [key: string]: string } {
	const cookies: { [key: string]: string } = {};
	const parts = cookie.split(';');
	for (const part of parts) {
		const equlIndex = part.indexOf('=');
		const [key, value] = [part.slice(0, equlIndex), part.slice(equlIndex + 1)];
		cookies[key.trim()] = value.trim();
	}
	return cookies;
}

export function cookieObjectToString(cookie: { [key: string]: string }): string {
	const parts: string[] = [];
	for (const key in cookie) {
		parts.push(`${key}=${cookie[key]}`);
	}
	return parts.join('; ');
}

export function cookieArrayToString(cookies: [string, string]): string {
	const parts: string[] = [];
	for (const cookie of cookies) {
		parts.push(`${cookie[0]}=${cookie[1]}`);
	}
	return parts.join('; ');
}

export interface HttpRetryOptions {
	retryCount?: number;
	retryDelay?: number;
	maxRetries?: number;
	onRetry?: (error: Error, request: Request | string | URL, response?: Response, retry?: HttpRetryOptions) => void;
}
export interface HttpOptions {
	retry?: HttpRetryOptions;
}

class HttpError extends Error {
	constructor(public response: Response) {
		super(response.statusText);
	}
}

export function http(req: Request | string | URL, init?: RequestInit, options?: HttpOptions): Promise<Response> {
	// @ts-ignore
	return fetch(req, init)
		.then((response: Response) => {
			if (response.ok) return response;
			throw new HttpError(response);
		})
		.catch((error: HttpError) => {
			if (parseIntOrZero(options?.retry?.retryCount) >= parseIntOrZero(options?.retry?.maxRetries) - 1) throw error;

			options.retry.retryCount = parseIntOrZero(options?.retry?.retryCount);
			options.retry.retryCount++;
			options?.retry?.onRetry?.(error, req, error?.response, options?.retry);
			return delay(parseIntOrZero(options?.retry?.retryDelay)).then(() => http(req, init, options));
		});
}
