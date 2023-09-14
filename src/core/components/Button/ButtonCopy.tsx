import { useBreakpointValue } from '@chakra-ui-nextjs'
import type { FC } from 'react'

import { useCopyToClipboard } from '~/core/hooks/useCopy'

import { Icon } from '../Icon'
import type { ButtonProps } from './Button'
import { Button } from './Button'

export type ButtonCopyProps = {
  label?: string
  copiedLabel?: string
  copyValue: string
  showIcon?: boolean
} & ButtonProps

export const ButtonCopy: FC<ButtonCopyProps> = ({
  label,
  copiedLabel,
  copyValue,
  showIcon = true,
  ...props
}) => {
  const [copied, copy] = useCopyToClipboard()
  const sizeIcon = useBreakpointValue({ base: 20, md: 24 })

  return (
    <Button
      p={showIcon ? '0px' : undefined}
      variant='ghostPrimary'
      onClick={() => copy(copyValue)}
      {...props}
    >
      {copied ? copiedLabel ?? label : label}
      {showIcon && (
        <Icon
          ml={label ? 'small' : 'none'}
          name={copied ? 'check-outline-circle' : 'copy'}
          color={copied ? 'green' : 'primary'}
          size={sizeIcon}
        />
      )}
    </Button>
  )
}
