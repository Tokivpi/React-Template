import axios from "axios";

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
interface HYInstanceInterceptors<T = AxiosResponse, D=AxiosRequestConfig> {
  requestInterceptor?: (res: D) => D
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYInstanceInterceptors<T>
}

class KORequest {
  instance: AxiosInstance;

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config);
    // 实例的拦截器
    // 针对特定的fjRequest实例添加拦截器
    this.instance.interceptors.request.use(
      // config.interceptors?.requestInterceptor,
      config.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseInterceptorCatch
    );
  }

  request<T = any>(config: HYRequestConfig<T>) {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config);
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          resolve(res);
        })
        .catch((err: any) => {
          if (config.interceptors?.responseInterceptorCatch) {
            err = config.interceptors.responseInterceptorCatch(err);
          }
          reject(err);
        });
    });
  }

  get<T = any>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: "GET" });
  }

  post<T = any>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: "POST" });
  }

  delete<T = any>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: "DELETE" });
  }

  patch<T = any>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: "PATCH" });
  }
}

export default KORequest;
