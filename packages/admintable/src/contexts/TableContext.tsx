import create from 'zustand'
import { ITableFilter } from '../interfaces/table.interface'
import { IUser } from '../interfaces/user.interface'

type TableStoreType = {
  tableData?: IUser[]
  setTableData?: (userData: IUser[]) => void
  tableFilters?: ITableFilter
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
    tableFilters: useStore(state => state.tableFilters),
    setTableFilters: useStore(state => state.setTableFilters),
    clearTableFilters: useStore(state => state.clearTableFilters),
  }
}

export default useTableProps
