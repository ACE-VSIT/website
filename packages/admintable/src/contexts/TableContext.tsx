import create from 'zustand'
import { ITableFilter } from '../interfaces/table.interface'
import { IUser } from '../interfaces/user.interface'

type TableStoreType = {
  tableData?: IUser[]
  setTableData?: (userData: IUser[]) => void
  filteredData?: IUser[]
  setFilteredData?: (userData: IUser[]) => void
  tableFilters?: ITableFilter
  loading?: boolean
  setLoading?: (state: boolean) => void 
  setTableFilters?: (userFilters: ITableFilter) => void
  clearTableFilters?: () => void
}

const useStore = create<TableStoreType>(
  set => ({
    setTableData: (userData: IUser[]) => {
      set(state => ({
        ...state,
        tableData: userData,
      }))
    },
    setFilteredData: (userData: IUser[]) => {
      set(state => ({
        ...state,
        filteredData: userData,
      }))
    },
    setLoading: (isLoading: boolean) => {
      set(state => ({
        ...state,
        loading: isLoading,
      }))
    },
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

const useTableProps = () => {
  return {
    tableData: useStore(state => state.tableData),
    setTableData: useStore(state => state.setTableData),
    filteredData: useStore(state => state.filteredData),
    setFilteredData: useStore(state => state.setFilteredData),
    loading: useStore(state => state.loading),
    setLoading: useStore(state => state.setLoading),
    tableFilters: useStore(state => state.tableFilters),
    setTableFilters: useStore(state => state.setTableFilters),
    clearTableFilters: useStore(state => state.clearTableFilters),
  }
}

export default useTableProps
