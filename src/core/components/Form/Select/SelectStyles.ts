import type { ChakraStylesConfig } from 'chakra-react-select'

import { INPUT_HEIGHT } from '../Input/InputTheme'

export const chakraStyles = (isMulti?: boolean): ChakraStylesConfig => ({
  dropdownIndicator: provided => ({
    ...provided,
    background: 'transparent',
    justifyContent: 'center',
    w: '0px'
  }),
  container: provided => ({
    ...provided,
    height: `${INPUT_HEIGHT}px`,
    _focusVisible: {
      zIndex: 1,
      borderShadow: `0px 0px 0px 1px red`,
      borderColor: 'primary'
    }
  }),
  menu: provided => ({
    ...provided,
    zIndex: 3
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  option: (provided, state) => ({
    ...provided,
    mt: 'small',
    bg: state.isSelected ? 'primary' : 'white',
    _hover: {
      bg: state.isSelected ? 'primary' : 'gray.100'
    }
  }),
  downChevron: (provided, state) => ({
    ...provided,
    color: state.isFocused ? 'primary' : 'textDark'
  }),
  valueContainer: provided => ({
    ...provided,
    height: `${INPUT_HEIGHT}px`,
    width: '100%',
    paddingInlineEnd: 'none'
  }),
  placeholder: provided => ({
    ...provided,
    color: 'textMedium'
  }),
  multiValue: () => ({
    display: 'flex',
    verticalAlign: 'middle',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 'extraSmall',
    color: 'white',
    fontFamily: 'bold',
    mr: '4px',
    bg: 'primary',
    mt: '8px',
    px: '8px',
    py: '4px',
    borderRadius: 'medium'
  }),
  control: provided => ({
    ...provided,
    cursor: 'pointer',
    height: isMulti ? 'auto' : `${INPUT_HEIGHT}px`,
    minH: isMulti ? `${INPUT_HEIGHT}px` : 'auto',
    borderColor: 'gray.300',
    borderWidth: '1px',
    bg: 'white',
    _focus: {
      borderColor: 'primary',
      boxShadow: 'input'
    },
    _invalid: {
      borderColor: 'error.dark',
      boxShadow: 'inputInvalid'
    },
    _focusVisible: undefined
  })
})
