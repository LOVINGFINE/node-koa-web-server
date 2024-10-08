/// <reference types="vite/client" />

interface PagedRes<T> {
  list: T[];
  pageNum: number;
  pageSize: number;
  totalCount: number;
  totalPage: number;
}

interface QueryPaged {
  page: number;
  size: number;
}

interface PagedState<T> {
  records: T[];
  page: number;
  size: number;
  total: number;
}
