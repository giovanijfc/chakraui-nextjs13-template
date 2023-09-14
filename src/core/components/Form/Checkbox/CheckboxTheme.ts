import { checkboxAnatomy } from '@chakra-ui/anatomy'
import type { ComponentMultiStyleConfig } from '@chakra-ui-nextjs'

export const CheckboxTheme: ComponentMultiStyleConfig = {
  parts: checkboxAnatomy.keys,

  variants: {
    success: {
      label: {
        fontSize: '14px !important',
        fontFamily: 'regular',
        color: 'gray.100'
      },
      control: {
        '&[data-checked]:hover': {
          bg: 'green',
          borderColor: 'green',
          opacity: 0.9,
          color: 'white'
        },
        '&[data-checked]': {
          bg: 'green',
          borderColor: 'green'
        }
      }
    }
  },
  baseStyle: {
    label: {
      fontSize: '14px !important',
      fontFamily: 'medium',
      color: 'gray.600'
    },
    control: {
      bg: 'white',
      fontSize: '20px',
      width: '24px',
      minHeight: '24px',
      borderWidth: '2px',
      borderColor: 'gray.200',
      borderRadius: '3px',
      '&[data-checked]': {
        bg: 'primary',
        borderColor: 'primary'
      },
      '&[data-checked]:hover': {
        bg: 'primary',
        borderColor: 'primary',
        opacity: 0.8
      },
      '&[data-checked][data-hover]': {
        bg: 'primary',
        borderColor: 'primary',
        opacity: 0.8
      },
      '&[data-checked][data-disabled]': {
        bg: 'gray.400',
        borderColor: 'gray.400',
        color: 'white'
      },
      '&[data-disabled]': {
        bg: 'gray.200',
        borderColor: 'gray.200'
      },
      _focusVisible: {
        boxShadow: 'none'
      }
    }
  }
}
