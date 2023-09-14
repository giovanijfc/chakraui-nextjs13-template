import { useEffect, useState } from 'react'

interface Options {
  itemsPerPage: number
}

export const usePaginationClient = <T>(
  data?: T[],
  options: Options = {
    itemsPerPage: 3
  }
) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0)
  const [pages, setPage] = useState<T[][]>([])

  useEffect(() => {
    if (data === undefined || data === null) return

    setCurrentPageNumber(0)
    const { itemsPerPage } = options
    const updatePages = []

    for (let pos = 0; data.length > pos; pos += itemsPerPage) {
      const isLastPage = pos + itemsPerPage >= data.length

      if (isLastPage) {
        updatePages.push(data.slice(pos, data.length))
      } else {
        updatePages.push(data.slice(pos, pos + itemsPerPage))
      }
    }

    setPage(updatePages)
  }, [data, options.itemsPerPage])

  const nextPage = () => {
    if (currentPageNumber === pages.length - 1) return

    setCurrentPageNumber(prevCurrentPageNumber => prevCurrentPageNumber + 1)
  }

  const previousPage = () => {
    if (currentPageNumber === 0) return

    setCurrentPageNumber(prevCurrentPageNumber => prevCurrentPageNumber - 1)
  }

  const setSelectedPage = (pageNumber: number) => {
    if (pageNumber === currentPageNumber) return

    setCurrentPageNumber(pageNumber)
  }

  return {
    currentPage: pages[currentPageNumber],
    currentPageNumber,
    totalPages: pages.length - 1,
    nextPage,
    previousPage,
    setSelectedPage
  }
}
