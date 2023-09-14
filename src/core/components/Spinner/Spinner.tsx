import type { SpinnerProps as ChakraSpinnerProps } from '@chakra-ui-nextjs'
import { Spinner as ChakraSpinner } from '@chakra-ui-nextjs'
import type { FC } from 'react'

export const Spinner: FC<ChakraSpinnerProps> = props => {
  return <ChakraSpinner speed='0.5s' size='xl' thickness='4px' {...props} />
}
