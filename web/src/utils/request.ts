import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig as AxiosReqConfig,
  AxiosRequestConfig,
} from 'axios';

function createRequest({ baseURL = '' }: CreateReqProp) {
  const axiosApp = axios.create({
    baseURL,
  });
  function before(config: AxiosReqConf) {
    if (config.headers) {
      const token = localStorage.getItem('token') || '';
    }
    return config;
  }

  function fail(error: AxiosResponse) {
    return Promise.reject(error);
  }

  axiosApp.interceptors.request.use(before, (e) => {
    return Promise.reject(e);
  });

  axiosApp.interceptors.response.use((response) => {
    if (response.config.responseType !== 'json') {
      return response.data.data;
    }
    return response.data;
  }, fail);

  return axiosApp as AxiosReqFn;
}

export interface AxiosReqConf extends AxiosReqConfig {}

export type AxiosReqFn = <T>(e: AxiosRequestConfig) => Promise<T>;

export interface CreateReqProp {
  baseURL?: string;
}

export default createRequest;
