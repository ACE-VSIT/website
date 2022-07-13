import { IUser } from '../../interfaces/user.interface'
import { useAuth } from '../../contexts/AuthContext'
import { getTableData } from '../../utils/firebase'
import useTableFilters from '../../contexts/TableContext'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import TableComponent from './components/table/TableComponent'
import { columns as userColumns } from '../../configs/user-table-config'

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
