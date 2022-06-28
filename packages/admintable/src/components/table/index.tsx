import './Dashboard.css'
import { cols } from '../../pages/Config'
import { IUser } from '../../utils/interfaces'
import { useTable, useSortBy } from 'react-table'
import { useAuth } from '../../context/AuthContext'
import { getTableData } from '../../utils/firebase'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'
import InputText from './components/inputs/InputText'
import { Table, Tbody, Td, Th, Thead } from './components/Elements'
import useUserInfo from '../../context/UserInfoContext'
import Updater from './components/updater/Updater'

const TableContainer = () => {
  const [data, setData] = useState<IUser[] | []>([])
  const { setUserInfo } = useUserInfo()

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
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, index) => {
              if (headerGroup.headers.length === index + 1) {
                return (
                  <>
                    <Th
                      {...column.getHeaderProps()}
                      onClick={() => (column as any).toggleSortBy()}
                    >
                      {column.render('Header')}
                      <span>
                        {(column as any).isSorted ? (
                          (column as any).isSortedDesc ? (
                            <CaretDownOutlined />
                          ) : (
                            <CaretUpOutlined />
                          )
                        ) : null}
                      </span>
                    </Th>
                    <Th {...column.getHeaderProps()} key={'updater'}>
                      Updater
                      <span></span>
                    </Th>
                  </>
                )
              }
              return (
                <Th
                  {...column.getHeaderProps()}
                  onClick={() => (column as any).toggleSortBy()}
                >
                  {column.render('Header')}
                  <span>
                    {(column as any).isSorted ? (
                      (column as any).isSortedDesc ? (
                        <CaretDownOutlined />
                      ) : (
                        <CaretUpOutlined />
                      )
                    ) : null}
                  </span>
                </Th>
              )
            })}
          </tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr
              onClick={() => setUserInfo!(row.values as IUser)}
              {...row.getRowProps()}
            >
              {row.cells.map((cell, index) => {
                if (row.cells.length === index + 1) {
                  return (
                    <>
                      <InputText customVal={cell.value}></InputText>
                      <Updater />
                    </>
                  )
                }
                if (cell.column.id === 'photoURL') {
                  return (
                    <Td>
                      <img
                        src={cell.value}
                        alt={cell.column.id}
                        width={75}
                        height={75}
                      />
                    </Td>
                  )
                }
                return (
                  <InputText
                    customVal={cell.value}
                    cellId={cell.column.id}
                    disableUpdates={cell.column.id === 'uid'}
                  />
                )
              })}
            </tr>
          )
        })}
      </Tbody>
    </Table>
  )
}

export default memo(TableContainer)
