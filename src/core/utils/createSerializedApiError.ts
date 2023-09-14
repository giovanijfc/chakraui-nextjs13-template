import type { AxiosError } from 'axios'

export interface SerializedApiError<T = null> {
  isSerializedApiError: boolean
  status: number
  data?: T
  message?: string
  error?: null
  timestamp: string | null
}

export const API_TIMEOUT_TIME = 60000

export function createSerializedApiError(
  error: AxiosError<SerializedApiError>
): SerializedApiError {
  const timestamp = error.response?.data?.timestamp ?? null

  if (isAxiosError(error)) {
    if (isTimeout(error)) {
      return {
        isSerializedApiError: true,
        status: 504,
        message: 'TIMEOUT_ERROR',
        timestamp
      }
    }

    const isNetworkError =
      (!!error.isAxiosError && !error.response) || error.response?.status === 0

    if (isNetworkError)
      return {
        isSerializedApiError: true,
        status: 500,
        message: 'NETWORK_ERROR',
        timestamp
      }

    const response = error.response?.data
    const message = response?.message

    return {
      isSerializedApiError: true,
      status: error.response?.status ?? 500,
      ...response,
      message,
      timestamp
    }
  }

  return {
    isSerializedApiError: true,
    status: 500,
    message: String(error),
    timestamp
  }
}

function isTimeout(e: AxiosError) {
  return e.message === `timeout of ${API_TIMEOUT_TIME}ms exceeded`
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isAxiosError(e: any): e is AxiosError<SerializedApiError> {
  return e.isAxiosError
}

export const isNetworkError = (e: SerializedApiError) =>
  e.message === 'NETWORK_ERROR'
