import type { SerializedApiError } from './createSerializedApiError'
import { isNetworkError } from './createSerializedApiError'

interface ErrorMessages {
  whenIsTimeout?: string
  whenIsNetwork?: string
  whenIsInternalServerError?: string
}

enum ErrorStatus {
  TIMEOUT = 504,
  INTERNAL_SERVER_ERROR = 500
}

export const getRequestErrorMessage = (
  error: SerializedApiError,
  errorMessage?: ErrorMessages
) => {
  if (isNetworkError(error)) {
    return (
      errorMessage?.whenIsNetwork ??
      'Verifique sua conexão com a internet e tente novamente.'
    )
  }

  if (error.status === ErrorStatus.INTERNAL_SERVER_ERROR) {
    return (
      error?.message ??
      errorMessage?.whenIsInternalServerError ??
      'Tivemos um problema, tente novamente.'
    )
  }

  if (error.status === ErrorStatus.TIMEOUT) {
    return (
      errorMessage?.whenIsTimeout ??
      'Isso demorou mais do que deveria, tente novamente.'
    )
  }

  return error.message ?? 'Algo de errado aconteceu.'
}
