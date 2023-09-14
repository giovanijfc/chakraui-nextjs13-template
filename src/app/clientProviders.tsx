'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { lazy, Suspense, useEffect, useState } from 'react'

import { queryClientConfig } from '~/core/constants/queryClientConfig'
import theme from '~/core/styles/theme'
import { LayoutProps } from '~/core/types/layoutTypings'

const ReactQueryDevtoolsProduction = lazy(() =>
  import('@tanstack/react-query-devtools/build/lib/index.prod.js').then(d => ({
    default: d.ReactQueryDevtools
  }))
)

export const ClientProviders = (props: LayoutProps) => {
  const [client] = useState(() => new QueryClient(queryClientConfig))

  const [showDevtools, setShowDevtools] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.toggleDevtools = () => setShowDevtools(old => !old)
  }, [])

  return (
    <QueryClientProvider client={client}>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          {props.children}

          <ReactQueryDevtools initialIsOpen={showDevtools} />
          {showDevtools && (
            <Suspense fallback>
              <ReactQueryDevtoolsProduction initialIsOpen={false} />
            </Suspense>
          )}
        </ChakraProvider>
      </CacheProvider>
    </QueryClientProvider>
  )
}
