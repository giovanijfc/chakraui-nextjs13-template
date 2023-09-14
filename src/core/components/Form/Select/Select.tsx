'use client'

import { Box, VStack } from '@chakra-ui-nextjs'
import {
  chakraComponents,
  createFilter,
  Select as ChakraReactSelect
} from 'chakra-react-select'
import type { ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react'
import { forwardRef, useMemo, useState } from 'react'

import { Button } from '../../Button/Button'
import { Text } from '../../Text'
import { chakraStyles } from './SelectStyles'

export type SelectProps = {
  variant?: 'default' | 'floating'
  onChange?: (newValue: KeyValueSelect['value']) => void
  options: KeyValueSelect[]
  onBlur?: () => void
  withAddNewInFilter?: boolean
  withFilterInUppercase?: boolean
  onClickAdd?: (valueSearch: string) => void
  noOptionsMessageText?: string
} & Omit<
  ComponentPropsWithoutRef<typeof ChakraReactSelect>,
  'onChange' | 'options' | 'onBlur' | 'variant' | 'noOptionsMessage'
>

export interface KeyValueSelect {
  label: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
}

export const Select = forwardRef<
  ComponentPropsWithRef<typeof ChakraReactSelect>,
  SelectProps
>(
  (
    {
      value,
      variant = 'default',
      onChange,
      placeholder,
      withAddNewInFilter,
      withFilterInUppercase,
      onClickAdd,
      inputId,
      isMulti,
      options = [],
      noOptionsMessageText = 'Sem opções...',
      ...props
    },
    ref
  ) => {
    const [searchValue, setSearchValue] = useState('')

    const noOptionsMessage = () =>
      withAddNewInFilter && (searchValue || options.length === 0) ? (
        <VStack spacing='extraMedium'>
          <Text fontSize='medium'>{noOptionsMessageText}</Text>

          {!searchValue && (
            <Text color='primary' fontFamily='semibold'>
              Digite um valor para adicionar
            </Text>
          )}
        </VStack>
      ) : (
        <Text fontSize='medium'>{noOptionsMessageText}</Text>
      )

    const loadingMessage = () => <Text fontSize='medium'>Carregando...</Text>

    const selectedValue = useMemo(
      () =>
        isMulti && Array.isArray(value)
          ? options.filter(option => value.includes(option.value))
          : options?.find(option => option.value === value),
      [value, options]
    )

    const hasEqualOption = useMemo(() => {
      if (!withAddNewInFilter || !searchValue) return undefined

      return options.find(
        option =>
          option.label.trim().toLocaleUpperCase() ===
          searchValue.trim().toLocaleUpperCase()
      )
    }, [searchValue, options, withAddNewInFilter])

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const renderMenuList = ({ children, ...menuListProps }: any) => {
      return (
        <>
          <chakraComponents.MenuList {...menuListProps}>
            {children}
          </chakraComponents.MenuList>

          {!hasEqualOption && searchValue && withAddNewInFilter && (
            <chakraComponents.MenuList {...menuListProps}>
              <Box w='100%' bg='primary.100' borderRadius='medium'>
                <Button
                  w='100%'
                  variant='secondary'
                  iconRightName='add'
                  onClick={
                    onClickAdd ? () => onClickAdd(searchValue) : undefined
                  }
                >
                  Adicionar novo
                </Button>
              </Box>
            </chakraComponents.MenuList>
          )}
        </>
      )
    }

    return (
      <ChakraReactSelect
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        {...props}
        components={{
          MenuList: renderMenuList
        }}
        hideSelectedOptions={false}
        options={options}
        isMulti={isMulti}
        inputId={inputId}
        classNamePrefix='chakra-react-select'
        inputValue={searchValue}
        onInputChange={(val: string) =>
          setSearchValue(withFilterInUppercase ? val.toLocaleUpperCase() : val)
        }
        chakraStyles={{
          menu: provided => ({
            ...provided,
            zIndex: 3
          }),
          ...chakraStyles(isMulti)
        }}
        filterOption={createFilter({
          ignoreAccents: true,
          ignoreCase: true,
          matchFrom: withAddNewInFilter ? 'start' : 'any'
        })}
        value={selectedValue ?? ''}
        noOptionsMessage={noOptionsMessage}
        placeholder={variant === 'default' ? placeholder ?? 'Selecione' : ' '}
        onChange={newValue => {
          if (!onChange) return

          if (isMulti && Array.isArray(newValue)) {
            onChange(
              (newValue as KeyValueSelect[])?.map(val => val.value) ?? []
            )
          } else {
            onChange((newValue as KeyValueSelect)?.value ?? null)
          }

          props.onBlur?.()
        }}
        loadingMessage={loadingMessage}
      />
    )
  }
)

Select.displayName = 'Select'
