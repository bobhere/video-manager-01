import axios from 'axios';
import { message } from 'antd';

const request = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

request.interceptors.response.use(
  response => {
    const { data } = response;
    if (data.code !== 0) {
      message.error(data.message || '请求失败');
      return Promise.reject(data);
    }
    return data;
  },
  error => {
    message.error(error.message || '网络错误');
    return Promise.reject(error);
  }
);

export default request;