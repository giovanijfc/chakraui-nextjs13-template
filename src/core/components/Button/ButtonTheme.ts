import type { ButtonProps, ComponentStyleConfig } from '@chakra-ui-nextjs'

export const BUTTON_HEIGHT = 37

const defaultStyles: ButtonProps = {
  h: `${BUTTON_HEIGHT}px`,
  minH: `${BUTTON_HEIGHT}px`,
  maxH: `${BUTTON_HEIGHT}px`,
  color: 'white',
  fontWeight: 'medium',
  fontFamily: 'semibold',
  borderRadius: 'medium',
  borderWidth: '2px',
  borderStyle: 'solid',
  _hover: {
    opacity: '0.8'
  },
  _focus: undefined,
  _focusVisible: { boxShadow: 'none' }
}

const getDefaultVariantColors = (
  color: string,
  otherColors?: { bg?: string; textColor?: string }
): ButtonProps => {
  return {
    ...defaultStyles,
    borderColor: otherColors?.bg ?? color,
    bg: otherColors?.bg ?? color,
    color: otherColors?.textColor ?? 'white',
    _hover: {
      opacity: 0.8,
      _disabled: {
        bg: otherColors?.bg ?? color
      }
    }
  }
}

const getOutlineVariantColors = (
  color: string,
  otherColors?: { text: string; hover?: string }
): ButtonProps => {
  return {
    ...defaultStyles,
    bg: 'transparent',
    borderColor: color,
    color: otherColors?.text ?? color,
    _hover: {
      bg: otherColors?.hover,
      color: otherColors?.text ?? 'white',
      opacity: 0.8,
      _disabled: {
        color
      }
    }
  }
}

const getGhostVariantColors = (color: string): ButtonProps => {
  return {
    ...defaultStyles,
    paddingY: 'small',
    paddingX: 'medium',
    height: 'auto',
    minH: 'auto',
    maxH: 'auto',
    textUnderlineOffset: 4,
    color,
    bg: 'transparent',
    borderColor: 'transparent',
    shadow: 'none',
    _hover: {
      background: 'gray.100'
    }
  }
}

export const ButtonTheme: ComponentStyleConfig = {
  defaultProps: {
    variant: 'primary'
  },

  variants: {
    primary: getDefaultVariantColors('primary'),

    outline: getOutlineVariantColors('primary', {
      text: 'primary',
      hover: 'white'
    }),

    ghost: getGhostVariantColors('primary')
  }
}
