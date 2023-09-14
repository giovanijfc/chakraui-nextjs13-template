'use client'

import type { ButtonProps as ChakraButtonProps } from '@chakra-ui-nextjs'
import { Button as ButtonChakra, useStyleConfig } from '@chakra-ui-nextjs'
import type { FC } from 'react'

import { Icon } from '../Icon'

export type ButtonProps = {
  iconLeftName?: string
  iconSize?: number
  iconRightName?: string
} & Omit<ChakraButtonProps, 'rightIcon' | 'leftIcon'>

export const Button: FC<ButtonProps> = ({
  variant,
  iconLeftName,
  iconRightName,
  iconSize,
  ...props
}) => {
  const styles = useStyleConfig('Button', {
    variant
  })

  const renderIcon = (iconName: string) => {
    return (
      <Icon
        name={iconName as string}
        size={iconSize}
        color={styles.color as string}
        _groupHover={{
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          fill: (styles as any)?._hover?.color
        }}
      />
    )
  }

  return (
    <ButtonChakra
      variant={variant}
      role='group'
      rightIcon={iconRightName ? renderIcon(iconRightName) : undefined}
      leftIcon={iconLeftName ? renderIcon(iconLeftName) : undefined}
      {...props}
      isLoading={props.isLoading}
      disabled={props.isDisabled || props.isLoading}
    />
  )
}
