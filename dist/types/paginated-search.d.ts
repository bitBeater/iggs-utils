export interface PaginatedSearch<T> {
	page?: number;
	pageSize?: number;
	orderFields?: string[];
	orderDirection?: 'ASC' | 'DESC';
	search?: T;
}
export interface PaginatedResult<T> {
	page?: number;
	pageSize?: number;
	totalCount?: number;
	items?: T[];
}
//# sourceMappingURL=paginated-search.d.ts.map
