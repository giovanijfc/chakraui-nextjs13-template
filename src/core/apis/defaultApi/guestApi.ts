import axios from 'axios'

import { API_TIMEOUT_TIME } from '~/core/utils/createSerializedApiError'

import { interceptors } from './interceptors'

export const guestApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: API_TIMEOUT_TIME
})

guestApi.interceptors.response.use(undefined, interceptors.onErrorResponse)
