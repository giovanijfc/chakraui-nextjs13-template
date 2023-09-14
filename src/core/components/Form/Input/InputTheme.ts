import { inputAnatomy } from '@chakra-ui/anatomy'
import type { ComponentStyleConfig } from '@chakra-ui-nextjs'

import { InputProps } from './Input'

export const INPUT_HEIGHT = 37

export const InputTheme: ComponentStyleConfig = {
  parts: inputAnatomy.keys,
  defaultProps: {
    variant: 'default'
  },

  baseStyle: (props: InputProps) => {
    if (props.type === 'file') {
      return {
        field: {
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: 'auto',
          height: '100%',
          opacity: '0',
          bg: 'red',
          zIndex: 2
        }
      }
    }

    return {
      field: {
        h: `${INPUT_HEIGHT}px`,
        fontSize: 'medium',
        borderColor: 'gray.300',
        borderWidth: '1px',
        _placeholder: { color: 'gray.400' },
        _focus: {
          borderColor: 'primary',
          boxShadow: 'input'
        },
        _invalid: {
          borderColor: 'error.dark',
          boxShadow: 'inputInvalid'
        },
        _disabled: {
          bg: 'gray.50',
          color: 'gray.700'
        }
      }
    }
  }
}
