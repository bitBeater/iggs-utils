export declare function cookieStringToObject(cookie: string): {
    [key: string]: string;
};
export declare function cookieObjectToString(cookie: {
    [key: string]: string;
}): string;
export declare function cookieArrayToString(cookies: [string, string]): string;
export interface HttpRetryOptions {
    retryCount?: number;
    retryDelay?: number;
    maxRetries?: number;
    onRetry?: (error: Error, request: Request | string | URL, response?: Response, retry?: HttpRetryOptions) => void;
}
export interface HttpOptions {
    retry?: HttpRetryOptions;
}
export declare function http(req: Request | string | URL, init?: RequestInit, options?: HttpOptions): Promise<Response>;
//# sourceMappingURL=http.d.ts.map