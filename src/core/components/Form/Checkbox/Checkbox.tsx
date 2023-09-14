'use client'

import type { CheckboxProps as ChakraCheckboxProps } from '@chakra-ui-nextjs'
import { Checkbox as ChakraCheckbox } from '@chakra-ui-nextjs'
import type { FC } from 'react'

export const Checkbox: FC<ChakraCheckboxProps> = props => {
  return <ChakraCheckbox {...props} />
}
