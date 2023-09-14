'use client'

import type { InputProps as ChakraInputProps } from '@chakra-ui-nextjs'
import { Input as ChakraInput } from '@chakra-ui-nextjs'
import { forwardRef } from 'react'

import { FileInput } from './FileInput'

export type InputProps = {
  type?: 'default' | 'file' | 'password' | 'number'
  valueFile?: string | File
} & ChakraInputProps

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, valueFile, ...props }, ref) => {
    return (
      <>
        <ChakraInput type={type} ref={ref} {...props} />
        {type === 'file' && <FileInput value={valueFile} />}
      </>
    )
  }
)

Input.displayName = 'Input'
