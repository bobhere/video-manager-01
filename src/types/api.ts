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

// 账号相关类型
export interface Account {
  id: string;
  name: string;
  platform: string;
  status: 'active' | 'inactive';
  followers: number;
  createTime: string;
}

// 内容相关类型
export interface Content {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  coverUrl: string;
  status: 'draft' | 'published' | 'withdrawn';
  publishTime: string;
  views: number;
  likes: number;
  comments: number;
}

// 评论相关类型
export interface Comment {
  id: string;
  content: string;
  user: {
    id: string;
    nickname: string;
    avatar: string;
  };
  createTime: string;
  status: 'pending' | 'replied' | 'hidden';
  reply?: string;
}

// 粉丝相关类型
export interface Fan {
  id: string;
  nickname: string;
  avatar: string;
  followTime: string;
  interactions: number;
  lastActive: string;
  level: 'normal' | 'active' | 'core';
}

// 素材相关类型
export interface Material {
  id: string;
  title: string;
  type: 'video' | 'image' | 'audio';
  url: string;
  size: number;
  duration?: number;
  tags: string[];
  createTime: string;
}