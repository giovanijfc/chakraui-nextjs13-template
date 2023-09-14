import type { FormErrorMessageProps } from '@chakra-ui-nextjs'
import { FormErrorMessage as ChakraFormErrorMessage } from '@chakra-ui-nextjs'
import type { FC } from 'react'

export const FormErrorMessage: FC<FormErrorMessageProps> = props => {
  return <ChakraFormErrorMessage {...props} />
}
