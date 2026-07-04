import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { env } from '@/config/env';

/**
 * Standard API error interface for consistency.
 */
export interface ApiErrorResponse {
  message: string;
  statusCode?: number;
  errors?: Record<string, string[]>;
}

// 1. Create instance with default configs
export const apiClient: AxiosInstance = axios.create({
  baseURL: env.apiUrl,
  timeout: env.apiTimeout,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// 2. Request Interceptor
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // A standard place to inject authorization bearer tokens, etc.
    const token = localStorage.getItem('auth_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (env.isDev) {
      console.log(`[API Request] ${config.method?.toUpperCase()} -> ${config.url}`);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 3. Response Interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (env.isDev) {
      console.log(`[API Response] ${response.status} <- ${response.config.url}`);
    }
    return response;
  },
  (error) => {
    const formattedError: ApiErrorResponse = {
      message: 'An unexpected connection error occurred.',
    };

    if (error.response) {
      // Server returned a status code outside the 2xx range
      formattedError.statusCode = error.response.status;
      formattedError.message = error.response.data?.message || error.message;
      formattedError.errors = error.response.data?.errors;

      console.error(
        `[API Response Error] ${error.response.status} <- ${error.response.config.url}:`,
        formattedError
      );
    } else if (error.request) {
      // The request was made but no response was received
      formattedError.message = 'Network timeout, check your internet connectivity.';
      console.error('[API Network Error] No response received:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      formattedError.message = error.message;
      console.error('[API Configuration Error] Message:', error.message);
    }

    return Promise.reject(formattedError);
  }
);

export default apiClient;
