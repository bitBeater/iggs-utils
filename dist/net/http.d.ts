export interface HttpRetryOptions {
    retryCount?: number;
    retryDelay?: number;
    maxRetries?: number;
    onRetry?: (error: Error, request: Request | string | URL, response?: Response, retry?: HttpRetryOptions) => void;
}
export interface HttpOptions {
    retry?: HttpRetryOptions;
}
export type HttpRequest = Request | string | URL;
export declare function cookieStringToObject(cookie: string): {
    [key: string]: string;
};
export declare function cookieObjectToString(cookie: {
    [key: string]: string;
}): string;
export declare function cookieArrayToString(cookies: [string, string]): string;
export declare function http(req: HttpRequest, init?: RequestInit, options?: HttpOptions): Promise<Response>;
export declare function toURL(httpRequest: HttpRequest): URL;
//# sourceMappingURL=http.d.ts.map