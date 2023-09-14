import { formErrorAnatomy } from '@chakra-ui/anatomy'
import type { ComponentMultiStyleConfig } from '@chakra-ui-nextjs'

export const FormErrorMessageTheme: ComponentMultiStyleConfig = {
  parts: formErrorAnatomy.keys,
  baseStyle: {
    text: {
      fontFamily: 'medium',
      color: 'error.dark',
      fontSize: '11px',
      marginTop: '4px'
    }
  }
}
