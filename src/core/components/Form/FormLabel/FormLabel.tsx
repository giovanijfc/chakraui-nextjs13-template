import {
  FormLabel as ChakraFormLabel,
  FormLabelProps as ChakraFormLabelProps
} from '@chakra-ui-nextjs'
import type { FC } from 'react'

export const FormLabel: FC<ChakraFormLabelProps> = props => {
  return <ChakraFormLabel {...props} />
}
