import {
  Button,
  Flex,
  FlexProps,
  HStack,
  Text,
  useBreakpointValue
} from '@chakra-ui-nextjs'
import { type FC } from 'react'

export interface PaginationProps {
  numberOfPages: number
  currentPageNumber: number
  isClientPagination?: boolean
  nextPage: () => void
  previousPage: () => void
  setSelectedPage: (pageNumber: number) => void
}

export const Pagination: FC<PaginationProps & FlexProps> = ({
  numberOfPages,
  currentPageNumber,
  isClientPagination = true,
  nextPage,
  previousPage,
  setSelectedPage,
  ...props
}) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true }) ?? true

  if (numberOfPages === 0) return null

  const isDisablePrevious = isClientPagination
    ? currentPageNumber === 0
    : currentPageNumber === 1
  const isDisableNext = currentPageNumber === numberOfPages

  const firstPage = isClientPagination ? 0 : 1
  const numberOfPagesHandler = isClientPagination
    ? numberOfPages + 1
    : numberOfPages
  const currentPageHandler = isClientPagination
    ? currentPageNumber + 1
    : currentPageNumber

  return (
    <Flex flex='1' justify='space-between' align='flex-end' {...props}>
      <HStack spacing='0px'>
        {isDesktop && (
          <Button
            variant='ghost'
            onClick={() => setSelectedPage(firstPage)}
            isDisabled={isDisablePrevious}
          >
            {'1 <<'}
          </Button>
        )}
        <Text fontSize='medium' fontFamily='semibold' color='textDark'>
          {isDesktop ? 'Página' : 'Pág.'} {currentPageHandler}
          {isDesktop ? ' de ' : '/'}
          {numberOfPagesHandler}
        </Text>
        {isDesktop && (
          <Button
            variant='ghost'
            onClick={() => setSelectedPage(numberOfPages)}
            isDisabled={isDisableNext}
          >
            {'>>'} {numberOfPagesHandler}
          </Button>
        )}
      </HStack>

      <HStack spacing='medium'>
        <Button
          variant='ghost'
          onClick={previousPage}
          isDisabled={isDisablePrevious}
        >
          Anterior
        </Button>
        <Button variant='ghost' onClick={nextPage} isDisabled={isDisableNext}>
          Próximo
        </Button>
      </HStack>
    </Flex>
  )
}
