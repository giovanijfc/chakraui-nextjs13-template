'use client'

import { HStack } from '@chakra-ui-nextjs'
import type { FC } from 'react'

import { Button } from '../../Button/Button'
import { Text } from '../../Text'

interface Props {
  value?: File | string
}

export const FileInput: FC<Props> = ({ value }) => {
  const isString = typeof value === 'string'

  let name = ''

  if (value) {
    if (isString) name = value
    else name = value.name
  }

  return (
    <HStack align='center' flex='1' wordBreak='break-word'>
      <Button
        w='auto'
        h='auto'
        minH='auto'
        px='8px'
        py='6px'
        fontSize='14px'
        color='dark.500'
        fontFamily='medium'
        bg='grey.100'
        borderColor='dark.500'
        borderWidth='1px'
        borderRadius='small'
      >
        Selecionar arquivo
      </Button>

      <Text flex='1' fontSize='14px' noOfLines={1}>
        {name || 'Nenhum arquivo escolhido'}
      </Text>
    </HStack>
  )
}
