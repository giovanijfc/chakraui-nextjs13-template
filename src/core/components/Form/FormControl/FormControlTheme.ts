import { formAnatomy } from '@chakra-ui/anatomy'
import type { ComponentMultiStyleConfig } from '@chakra-ui-nextjs'

import { INPUT_HEIGHT } from '../Input/InputTheme'

const activeFloatingLabelStyles = {
  mx: 'small',
  px: 'small',
  color: 'gray.900',
  transform: `scale(0.85) translateY(${-INPUT_HEIGHT / 2}px)`
}

export const FormControlTheme: ComponentMultiStyleConfig = {
  parts: formAnatomy.keys,
  baseStyle: {
    container: {
      h: '96px',
      display: 'flex',
      flexDir: 'column'
    },
    helperText: {
      color: 'gray.600',
      marginTop: '4px'
    }
  },
  variants: {
    floating: {
      container: {
        h: '56px',
        _focusWithin: {
          label: {
            ...activeFloatingLabelStyles
          }
        },
        'input:not(:placeholder-shown) + label, .chakra-react-select--has-value + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
          {
            ...activeFloatingLabelStyles
          },
        label: {
          top: 0,
          left: 0,
          zIndex: 2,
          position: 'absolute',
          backgroundColor: 'white',
          pointerEvents: 'none',
          borderRadius: 'extra',
          mx: 'medium',
          px: '0px',
          mt: `${INPUT_HEIGHT / 5}px`,
          transformOrigin: 'left top',
          fontSize: '14px',
          color: 'textMedium'
        }
      }
    }
  }
}
