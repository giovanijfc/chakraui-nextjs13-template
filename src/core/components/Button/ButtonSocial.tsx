import type { FC } from 'react'

import { Button } from './Button'

interface Props {
  social: 'facebook' | 'google' | 'apple'
  onClick?: () => void
  label?: string
  mRight?: boolean
  isLoading?: boolean
}

export const ButtonSocial: FC<Props> = ({
  social,
  mRight,
  label,
  isLoading,
  onClick
}) => {
  const defaultProps = {
    flex: '1',
    iconPosition: 'left' as const,
    onClick
  }

  return (
    <Button
      {...defaultProps}
      marginRight={mRight ? 'medium' : undefined}
      variant={social}
      iconLeftName={social}
      isLoading={isLoading}
      textTransform={'capitalize'}
    >
      {label ?? social}
    </Button>
  )
}
