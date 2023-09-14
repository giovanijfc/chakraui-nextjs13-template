'use client'

import type { FormControlProps as ChakraFormControlProps } from '@chakra-ui-nextjs'
import { FormControl as ChakraFormControl } from '@chakra-ui-nextjs'
import type { FC } from 'react'

export const FormControl: FC<ChakraFormControlProps> = props => {
  return <ChakraFormControl {...props} />
}
