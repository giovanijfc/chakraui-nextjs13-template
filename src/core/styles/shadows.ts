import type { ChakraTheme } from '@chakra-ui-nextjs'

import { colors } from './colors'

export const shadows: ChakraTheme['shadows'] = {
  inputInvalid: `0px 0px 0px 1px ${colors.error.dark}`,
  input: `0px 0px 0px 1px ${colors.primary}`
}
