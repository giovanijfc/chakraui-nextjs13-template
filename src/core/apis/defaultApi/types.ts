export interface PaginationResume {
  resume: {
    totalPages: number
    currentPage: number
    itemsPerPage: number
    totalItems: number
    hasNext: boolean
    hasPrev: boolean
  }
}
