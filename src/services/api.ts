import request from '../utils/request';
import { ResponseData, PageParams, PageResult } from '../types/api';

// 账号相关接口
export const accountApi = {
  getList: (params: PageParams) => 
    request.get<ResponseData<PageResult<any>>>('/accounts', { params }),
  
  create: (data: any) => 
    request.post<ResponseData>('/accounts', data),
  
  update: (id: string, data: any) => 
    request.put<ResponseData>(`/accounts/${id}`, data),
  
  delete: (id: string) => 
    request.delete<ResponseData>(`/accounts/${id}`)
};

// 内容相关接口
export const contentApi = {
  getList: (params: PageParams) => 
    request.get<ResponseData<PageResult<any>>>('/contents', { params }),
  
  publish: (id: string) => 
    request.post<ResponseData>(`/contents/${id}/publish`),
  
  withdraw: (id: string) => 
    request.post<ResponseData>(`/contents/${id}/withdraw`)
};

// 数据分析接口
export const analyticsApi = {
  getOverview: () => 
    request.get<ResponseData>('/analytics/overview'),
  
  getTrend: (type: string, period: string) => 
    request.get<ResponseData>('/analytics/trend', { params: { type, period } })
};

// 评论管理接口
export const commentApi = {
  getList: (params: PageParams) => 
    request.get<ResponseData<PageResult<any>>>('/comments', { params }),
  
  reply: (id: string, content: string) => 
    request.post<ResponseData>(`/comments/${id}/reply`, { content }),
  
  delete: (id: string) => 
    request.delete<ResponseData>(`/comments/${id}`)
};

// 粉丝管理接口
export const fansApi = {
  getList: (params: PageParams) => 
    request.get<ResponseData<PageResult<any>>>('/fans', { params }),
  
  getAnalytics: () => 
    request.get<ResponseData>('/fans/analytics'),
  
  getGrowthTrend: (period: string) => 
    request.get<ResponseData>('/fans/trend', { params: { period } })
};

// 素材库接口
export const materialApi = {
  getList: (params: PageParams & { type?: string }) => 
    request.get<ResponseData<PageResult<any>>>('/materials', { params }),
  
  upload: (data: FormData) => 
    request.post<ResponseData>('/materials/upload', data),
  
  delete: (id: string) => 
    request.delete<ResponseData>(`/materials/${id}`)
};