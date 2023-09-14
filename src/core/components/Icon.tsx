'use client'

import type { BoxProps } from '@chakra-ui-nextjs'
import { Box } from '@chakra-ui-nextjs'
import IcomoonReact from 'icomoon-react'
import type { FC } from 'react'

import iconSet from '../assets/icons.json'

export type IconProps = {
  color?: string
  size?: number
  name: string
} & BoxProps

export const Icon: FC<IconProps> = ({
  color = 'black',
  size = 20,
  name,
  ...props
}) => {
  return (
    <Box
      as={IcomoonReact}
      {...props}
      iconSet={iconSet}
      fill={color}
      size={size}
      w={`${size}px`}
      h={`${size}px`}
      icon={name}
    />
  )
}
