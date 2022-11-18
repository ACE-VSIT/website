import { IUser } from '../../interfaces/user.interface'
import { useAuth } from '../../contexts/AuthContext'
import { getTableData } from '../../utils/firebase'
import useTableProps from '../../contexts/TableContext'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import TableComponent from './TableComponent'
import { columns as userColumns } from '../../configs/user-table-config'
import Toolbar from './components/toolbar/Toolbar'

const TableContainer = () => {
  const { tableFilters, tableData, setTableData } = useTableProps()
  const [currentData, setCurrentData] = useState<IUser[]>([])

  const { user } = useAuth()

  const pullData = useCallback(
    async (fromServer: boolean = false) => {
      const data = await getTableData(user, fromServer)
      setCurrentData(data ?? [])
      setTableData!(data ?? [])
    },
    [setTableData, user]
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
      <TableComponent headers={columns} data={currentData} />
    </>
  )
}

export default memo(TableContainer)
