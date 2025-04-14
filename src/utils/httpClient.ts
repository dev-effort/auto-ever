import { AxiosInstance, AxiosRequestConfig } from "axios";
import { SystemErrorHandler } from "./handleError";

class HttpClient {
  private _axiosInstance: AxiosInstance | null;
  private _systemHandler: SystemErrorHandler;

  constructor() {
    this._axiosInstance = null;
    this._systemHandler = {
      common: (err) => {
        console.error(err);
      },
      default: (err) => {
        console.error(err);
      },
      400: (err) => {
        console.error(err);
      },
      401: (err) => {
        console.error(err);
      },
      403: (err) => {
        console.error(err);
      },
    };
  }

  get axiosInstance() {
    return this._axiosInstance as AxiosInstance;
  }

  async get<T>(url: string, config?: AxiosRequestConfig) {
    const response = await this._axiosInstance!.get<T>(url, config);
    return response;
  }

  async post<T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ) {
    const response = await this._axiosInstance!.post<T>(url, data, config);
    return response;
  }

  async put<T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ) {
    const response = await this._axiosInstance!.put<T>(url, data, config);
    return response;
  }

  async patch<T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ) {
    const response = await this._axiosInstance!.patch<T>(url, data, config);
    return response;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig) {
    const response = await this._axiosInstance!.delete<T>(url, config);
    return response;
  }
}

export const API = new HttpClient();
