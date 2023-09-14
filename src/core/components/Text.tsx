'use client'

import type { TextProps as ChakraTextProps } from '@chakra-ui-nextjs'
import { Text as ChakraText } from '@chakra-ui-nextjs'
import type { FC } from 'react'

export type TextProps = ChakraTextProps

export const Text: FC<ChakraTextProps> = props => {
  return <ChakraText {...props} />
}

export const Title: FC<ChakraTextProps> = props => {
  return (
    <Text
      fontSize={{ base: 'extraMedium', lg: 'large' }}
      fontFamily='semibold'
      color='textDark'
      {...props}
    />
  )
}

export const Description: FC<ChakraTextProps> = props => {
  return (
    <Text color='textMedium' fontSize='14px' fontFamily='regular' {...props} />
  )
}
