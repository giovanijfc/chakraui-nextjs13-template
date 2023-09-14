import type { TextProps } from '@chakra-ui-nextjs'
import { FormHelperText as ChakraFormHelperText } from '@chakra-ui-nextjs'
import type { FC } from 'react'

export const FormHelperText: FC<TextProps> = props => {
  return <ChakraFormHelperText {...props} fontSize='11px' />
}
