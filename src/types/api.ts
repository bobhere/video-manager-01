export interface ResponseData<T = any> {
  code: number;
  message: string;
  data: T;
}

export interface PageParams {
  page: number;
  pageSize: number;
  keyword?: string;
}

export interface PageResult<T> {
  list: T[];
  total: number;
  page: number;
  pageSize: number;
}