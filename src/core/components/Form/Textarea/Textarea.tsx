import type { TextareaProps } from '@chakra-ui-nextjs'
import { Textarea as ChakraTextarea } from '@chakra-ui-nextjs'
import type { FC } from 'react'

export const Textarea: FC<TextareaProps> = props => (
  <ChakraTextarea {...props} />
)
