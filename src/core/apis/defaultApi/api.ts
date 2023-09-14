import axios from 'axios'

import { API_TIMEOUT_TIME } from '~/core/utils/createSerializedApiError'

import { interceptors } from './interceptors'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: API_TIMEOUT_TIME
})

api.interceptors.request.use(interceptors.addTokenInterceptor)
api.interceptors.response.use(
  interceptors.onSuccessResponse,
  interceptors.onErrorResponseAuthenticated
)
