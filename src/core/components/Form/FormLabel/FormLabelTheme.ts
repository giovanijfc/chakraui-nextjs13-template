import type { ComponentStyleConfig } from '@chakra-ui-nextjs'

export const FormLabelTheme: ComponentStyleConfig = {
  baseStyle: {
    fontFamily: 'semibold',
    color: 'gray.900',
    fontSize: 'extraSmall',
    mb: '2px',
    _disabled: {
      opacity: 1,
      color: 'gray.700'
    }
  }
}
