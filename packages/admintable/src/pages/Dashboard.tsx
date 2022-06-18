import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { getTableData } from '../utils/firebase'
import { useAuth } from '../context/AuthContext'
import { Wrapper } from '../components/Index/IndexElements'
import './Dashboard.css'
import { cols } from './Config'
import { useSortBy, useTable } from 'react-table'
import { IUser } from '../utils/interfaces'

const Dashboard: React.FC = () => {
  const [data, setData] = useState<IUser[] | []>([])

  const { user } = useAuth()
  const getData = useCallback(async () => {
    const data = await getTableData(user)
    setData(data ?? [])
  }, [user])

  const columns = useMemo(() => cols, [])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<any>({ columns, data }, useSortBy)

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <Wrapper>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  if (cell.column.id === 'photoURL') {
                    return (
                      <td>
                        <img
                          src={cell.value}
                          alt={cell.column.id}
                          width={75}
                          height={75}
                        />
                      </td>
                    )
                  }
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </Wrapper>
  )
}

export default Dashboard
