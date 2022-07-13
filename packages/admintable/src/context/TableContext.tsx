import create from 'zustand'
import { ITableFilter } from '../interfaces/table.interface'

const useStore = create<{
  tableFilters?: ITableFilter
  setTableFilters?: (userFilters: ITableFilter) => void
  clearTableFilters?: () => void
}>(set => ({
  tableFilters: {
    listLength: 0,
  },
  setTableFilters: (userFilters: ITableFilter) => {
    set(state => ({
      ...state,
      tableFilters: userFilters,
    }))
  },
  clearTableFilters: () => set(state => ({ ...state, userFilters: undefined })),
}))

const useTableFilters = () => {
  return {
    tableFilters: useStore(state => state.tableFilters),
    setTableFilters: useStore(state => state.setTableFilters),
    clearTableFilters: useStore(state => state.clearTableFilters),
  }
}
export default useTableFilters
