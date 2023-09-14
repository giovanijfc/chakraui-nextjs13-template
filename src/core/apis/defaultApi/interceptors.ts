import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import Nookies from 'nookies'

import {
  createSerializedApiError,
  SerializedApiError
} from '~/core/utils/createSerializedApiError'
import { logout } from '~/core/utils/logout'

const addTokenInterceptor = (req: InternalAxiosRequestConfig) => {
  const accessToken = Nookies.get(null).accessToken

  req.headers.Authorization = `Bearer ${accessToken}`

  return req
}

const onSuccessResponse = (req: AxiosResponse) => {
  return req
}

const onErrorResponseAuthenticated = (
  error: AxiosError<SerializedApiError>
) => {
  if (error?.response?.status === 401) {
    logout()
  }

  return Promise.reject(createSerializedApiError(error))
}

const onErrorResponse = (error: AxiosError<SerializedApiError>) => {
  return Promise.reject(createSerializedApiError(error))
}

export const interceptors = {
  addTokenInterceptor,
  onSuccessResponse,
  onErrorResponseAuthenticated,
  onErrorResponse
}
