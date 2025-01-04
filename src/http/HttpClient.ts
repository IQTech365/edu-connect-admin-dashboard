import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import { IError } from '../types';
// import { getAuthToken } from '../utils/storage';

declare module 'axios' {
  interface AxiosResponse<T> extends Promise<T>{}
}

export abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(baseUrl: string) {
    this.instance = axios.create({baseURL: baseUrl, timeout: 6000});
    this._initializeRequestInterceptor();
    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(this._handleResponse, this._handleError);
  }

  private _initializeRequestInterceptor = () => {
    //@ts-ignore
    this.instance.interceptors.request.use(this._handleRequest, this._handleError)
  }

  private _handleRequest = async (config: AxiosRequestConfig):Promise<AxiosRequestConfig> => {
    const authToken =  '';//await getAuthToken();
    console.log('authToken-', authToken);
    
    if(authToken && config.headers) {
      config.headers['token'] = authToken;
    }
    if(config.data instanceof FormData && config.headers) {
      config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
  } 

  private _handleResponse = ({data}: AxiosResponse) => {
    return data
  }; 

  private _handleError = (err: any) => {
    const error:IError = {
      code: err?.response?.status,
      message: err?.response?.data || "Something went wrong",
    }
    return Promise.reject(error);
  };
}
