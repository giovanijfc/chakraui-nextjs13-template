import { createStandaloneToast } from '@chakra-ui-nextjs'

import theme from '../styles/theme'

const { toast } = createStandaloneToast({ theme })

export const useToast = () => {
  return toast
}
