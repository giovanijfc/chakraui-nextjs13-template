import { Center } from '@chakra-ui-nextjs'
import { FC } from 'react'

import { Spinner } from '~/core/components/Spinner/Spinner'

export const PageLoading: FC = () => {
  return (
    <Center
      position='absolute'
      top='0px'
      left='0px'
      h='100vh'
      w='100vw'
      zIndex={999}
      bg='white'
    >
      <Spinner color='primary' height='60px' width='60px' thickness='5px' />
    </Center>
  )
}
