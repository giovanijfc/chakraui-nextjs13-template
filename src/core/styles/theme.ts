import type { ChakraTheme } from '@chakra-ui-nextjs'
import { extendTheme } from '@chakra-ui-nextjs'

import { components } from '../components'
import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { fonts } from './fonts'
import { fontSizes } from './fontSizes'
import { radii } from './radii'
import { shadows } from './shadows'
import { space } from './space'

const theme: Partial<ChakraTheme> = {
  fonts,
  fontSizes,
  radii,
  breakpoints: breakpoints as ChakraTheme['breakpoints'],
  colors,
  space,
  shadows,
  components
}

export default extendTheme(theme)
