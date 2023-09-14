import type { ComponentStyleConfig } from '@chakra-ui-nextjs'

export const TEXT_AREA_HEIGHT = 80

export const TextareaTheme: ComponentStyleConfig = {
  defaultProps: {
    variant: 'default'
  },

  variants: {
    default: {
      borderColor: 'textDark',
      borderWidth: '1px',
      fontSize: 'medium',
      _placeholder: { color: 'gray.400' },
      _focus: {
        borderColor: 'primary',
        boxShadow: 'input'
      },
      _invalid: {
        borderColor: 'error.dark',
        boxShadow: 'inputInvalid'
      }
    }
  }
}
