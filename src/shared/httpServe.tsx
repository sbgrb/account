import axios, {AxiosInstance, AxiosRequestConfig} from "axios";

class HttpServe {
    instance: AxiosInstance

    constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL
        })
    }

    get<R = unknown>(url: string, query?: Record<string, string>, config?: Omit<AxiosRequestConfig, 'params' | 'url' | 'method'>) {
        return this.instance.request<R>({
            ...config,
            url: url,
            params: query,
            method: 'get'
        })
    }

    post() {

    }

    patch() {

    }

    delete() {

    }
}

export const httpClient = new HttpServe('/api/x')

httpClient.instance.interceptors.request.use()
httpClient.instance.interceptors.response.use()
