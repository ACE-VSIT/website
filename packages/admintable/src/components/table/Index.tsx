import './Dashboard.css'
import { IUser } from '../../interfaces/user.interface'
import { useTable, useSortBy } from 'react-table'
import { useAuth } from '../../context/AuthContext'
import { getTableData } from '../../utils/firebase'
import useTableFilters from '../../context/TableContext'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import TableComponent from './components/table/TableComponent'
import { columns as userColumns } from '../../configs/user-table-config'

interface IResizeWidth {
  [key: string]: {
    width: number
  }
}

const TableContainer = () => {
  const { tableFilters } = useTableFilters()
  const [data, setData] = useState<IUser[] | []>([])
  const [unFiltered, setUnFiltered] = useState<IUser[] | []>([])

  const { user } = useAuth()

  const getData = useCallback(async () => {
    const data = await getTableData(user)
    setData(data ?? [])
    setUnFiltered(data ?? [])
  }, [user])

  const columns = useMemo(() => userColumns, [])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<any>({ columns, data }, useSortBy)

  const trimData = useCallback(
    (tableItemsLimit: number) => {
      setData(unFiltered.slice(0, tableItemsLimit))
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
    getData()
  }, [getData])

  return (
    <>
      <TableComponent headers={columns} data={data} /> 
    </>
  )
}

export default memo(TableContainer)
