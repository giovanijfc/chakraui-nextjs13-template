import { QueryClientConfig } from '@tanstack/react-query'

const ONE_MINUTE_TIMEMILLIS = 60 * 1000

export const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      staleTime: ONE_MINUTE_TIMEMILLIS,
      retry: false,
      refetchOnWindowFocus: false
    }
  }
}
