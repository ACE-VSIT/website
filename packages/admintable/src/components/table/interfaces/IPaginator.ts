export interface IPaginator {
  length: number
  currentPage?: number
  pagesOffset?: number
  onNextPage?: () => void
  onPreviousPage?: () => void
}
