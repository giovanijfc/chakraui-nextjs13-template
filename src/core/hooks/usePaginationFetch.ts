import { useState } from 'react'

import type { PaginationProps } from '../components/Pagination'

export interface PaginationFetchParams {
  pageNumber: number
  itemsPerPage: number
}

export const usePaginationFetch = (): Omit<
  PaginationProps,
  'numberOfPages' | 'totalPages'
> => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1)

  return {
    currentPageNumber,
    isClientPagination: false,
    nextPage: () => setCurrentPageNumber(previousPage => previousPage + 1),
    previousPage: () =>
      setCurrentPageNumber(previousPage =>
        previousPage === 0 ? previousPage : previousPage - 1
      ),
    setSelectedPage: setCurrentPageNumber
  }
}
