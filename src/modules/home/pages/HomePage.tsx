import { HStack, InputGroup, InputLeftElement, VStack } from '@chakra-ui-nextjs'
import { NextPage } from 'next'

import { Button } from '~/core/components/Button/Button'
import { Checkbox } from '~/core/components/Form/Checkbox/Checkbox'
import { FormControl } from '~/core/components/Form/FormControl/FormControl'
import { FormErrorMessage } from '~/core/components/Form/FormErrorMessage/FormErrorMessage'
import { FormHelperText } from '~/core/components/Form/FormHelperText/FormHelperText'
import { FormLabel } from '~/core/components/Form/FormLabel/FormLabel'
import { Input } from '~/core/components/Form/Input/Input'
import { Select } from '~/core/components/Form/Select/Select'
import { Icon } from '~/core/components/Icon'
import { Spinner } from '~/core/components/Spinner/Spinner'
import { Text } from '~/core/components/Text'

export const HomePage: NextPage = () => {
  return (
    <VStack spacing='large'>
      <HStack spacing='medium'>
        <Text fontSize='extraLarge' fontFamily='regular'>
          Text Regular
        </Text>
        <Text fontSize='extraLarge' fontFamily='medium'>
          Text Medium
        </Text>
        <Text fontSize='extraLarge' fontFamily='semibold'>
          Text Semibold
        </Text>
        <Text fontSize='extraLarge' fontFamily='bold'>
          Text Bold
        </Text>
      </HStack>

      <HStack spacing='medium' align='flex-end'>
        <Button>Button Primary</Button>
        <Button variant='ghost'>Button Ghost</Button>
        <Button variant='outline'>Button Outline</Button>
        <Button variant='outline' iconRightName='apple'>
          Button Outline
        </Button>
      </HStack>

      <VStack spacing='medium'>
        <HStack>
          <FormControl variant='floating'>
            <FormLabel>Floating</FormLabel>
            <Input paddingStart='extra' />
            <FormErrorMessage>Teste</FormErrorMessage>
          </FormControl>

          <FormControl variant='floating' isRequired>
            <FormLabel>Floating Required</FormLabel>
            <Input />
            <FormErrorMessage>Teste</FormErrorMessage>
          </FormControl>

          <FormControl variant='floating'>
            <FormLabel>Floating Helper Text</FormLabel>
            <Input />
            <FormHelperText>HELP TEXT</FormHelperText>
          </FormControl>

          <FormControl variant='floating' isInvalid>
            <FormLabel>Floating Invalid</FormLabel>
            <Input />
            <FormErrorMessage>Teste</FormErrorMessage>
          </FormControl>
        </HStack>

        <HStack>
          <Checkbox>Você deseja marcar?</Checkbox>
        </HStack>

        <HStack>
          <FormControl>
            <FormLabel>Teste</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <Icon name='apple' size={16} />
              </InputLeftElement>
              <Input placeholder='XxxXxxX' paddingStart='extra' />
            </InputGroup>
            <FormErrorMessage>Teste</FormErrorMessage>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Required</FormLabel>
            <Input placeholder='XxxXxxX' />
            <FormErrorMessage>Teste</FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel>Floating Helper Text</FormLabel>
            <Input placeholder='XxxXxxX' />
            <FormHelperText>HELP TEXT</FormHelperText>
          </FormControl>

          <FormControl isInvalid>
            <FormLabel>Invalid</FormLabel>
            <Input placeholder='XxxXxxX' />
            <FormErrorMessage>Teste</FormErrorMessage>
          </FormControl>
        </HStack>
      </VStack>

      <HStack w='50%'>
        <FormControl>
          <FormLabel>Empty</FormLabel>
          <Select options={[]} placeholder='Selecione um' />
          <FormErrorMessage>Teste</FormErrorMessage>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Required</FormLabel>
          <Select options={[]} placeholder='Selecione um' />
          <FormErrorMessage>Teste</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid>
          <FormLabel>Invalid</FormLabel>
          <Select
            options={[
              { label: 'OPÇÃO A', value: 1 },
              { label: 'OPÇÃO B', value: 2 }
            ]}
            placeholder='Selecione um'
          />
          <FormErrorMessage>Teste</FormErrorMessage>
        </FormControl>
      </HStack>

      <HStack spacing='extra'>
        <Spinner size='md' />
        <Spinner size='lg' />
        <Spinner size='xl' />
      </HStack>
    </VStack>
  )
}
