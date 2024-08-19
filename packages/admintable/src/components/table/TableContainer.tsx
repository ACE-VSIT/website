import { memo, useCallback, useEffect, useMemo } from 'react'
import { columns as userColumns } from '../../configs/user-table-config'
import { useAuth } from '../../contexts/AuthContext'
import useTableProps from '../../contexts/TableContext'
import { IUser } from '../../interfaces/user.interface'
import { getTableData } from '../../utils/firebase'
import TableComponent from './TableComponent'
import Pagination from './components/pagination/Pagination'
import Toolbar from './components/toolbar/Toolbar'

const TableContainer = () => {
  const {
    tableFilters,
    tableData,
    setTableData,
    currentData = [],
    setCurrentData,
  } = useTableProps()
  const { user } = useAuth()

  const pullData = useCallback(
    async (fromServer: boolean = false) => {
      const data = await getTableData(user, fromServer)
      data?.sort((a: IUser, b: IUser) => a.name.localeCompare(b.name) || 0)
      setCurrentData(data || [])
      setTableData!(data || [])
    },
    [setCurrentData, setTableData, user]
  )

  const columns = useMemo(() => userColumns, [])

  const trimData = useCallback(
    (tableItemsLimit: number | '*') => {
      if (typeof tableItemsLimit === 'number')
        setCurrentData(tableData!.slice(0, tableItemsLimit))
      else if (tableItemsLimit === '*') setCurrentData(tableData!)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tableFilters?.listLength]
  )

  useEffect(() => {
    if (tableFilters?.listLength) {
      trimData(tableFilters.listLength)
    }
  }, [tableFilters?.listLength, trimData])

  useEffect(() => {
    pullData(false)
  }, [pullData])

  return (
    <>
      <Toolbar reFetchUserDataWithoutCache={() => pullData(true)} />
      <TableComponent headers={columns} data={currentData as IUser[]} />
      {/* <Pagination /> */}
    </>
  )
}

export default memo(TableContainer)
