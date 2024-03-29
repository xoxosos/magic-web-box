import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import Cookies from 'react-cookies'
// 请求返回结果
export interface IResponse<T> {
  data: T | null
  code: number
  message: string
}

class Request {
  private instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)

    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // 在发送请求之前做些什么
        config.headers.saToken = Cookies.load('saToken')
        console.log('请求前拦截器：', config)
        return config
      },
      (error: unknown) => {
        // 对请求错误做些什么
        console.error('请求前捕获的错误：', error)
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        // 对响应数据做点什么
        console.log('响应后拦截器：', response)
        return response
      },
      (error: unknown) => {
        // 对响应错误做点什么
        console.error('响应后捕获的错误：', error)
        return Promise.reject(error)
      }
    )
  }

  public async get<T = object>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.get<T>(url, config)
    return response.data
  }

  public async post<T = object, R = object>(url: string, data: T, config?: AxiosRequestConfig): Promise<R> {
    const response = await this.instance.post<R>(url, data, config)
    return response.data
  }

  public async put<T = object>(url: string, data?: T, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.put<T>(url, data, config)
    return response.data
  }

  public async delete<T = object>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.delete<T>(url, config)
    return response.data
  }
}

const request = new Request({
  // 根据实际情况修改
  // baseURL: 'https://jsonplaceholder.typicode.com'
  baseURL: 'api'
})
export default request
