import { IUser } from '../../interfaces/user.interface'
import { useAuth } from '../../contexts/AuthContext'
import { getTableData } from '../../utils/firebase'
import useTableProps from '../../contexts/TableContext'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import TableComponent from './TableComponent'
import { columns as userColumns } from '../../configs/user-table-config'
import Toolbar from './components/toolbar/Toolbar'

const TableContainer = () => {
  const { tableFilters, tableData, setTableData, filteredData } = useTableProps()
  const [currentData, setCurrentData] = useState<IUser[]>([])

  const { user } = useAuth()

  const pullData = useCallback(async () => {
    const data = await getTableData(user)
    setCurrentData(data ?? [])
    setTableData!(data ?? [])
  }, [user])

  const columns = useMemo(() => userColumns, [])

  const trimData = useCallback(
    (tableItemsLimit: number) => {
      setCurrentData(tableData!.slice(0, tableItemsLimit))
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
    pullData()
  }, [pullData])

  useEffect(() => {
    if(filteredData?.length !== 0 && filteredData !== undefined) {
      console.log(filteredData)
      setCurrentData([...filteredData])
    }
  }, [JSON.stringify(filteredData)])


  return (
    <>
      <Toolbar/>
      <TableComponent headers={columns} data={currentData} /> 
    </>
  )
}

export default memo(TableContainer)
