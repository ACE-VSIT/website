import './Dashboard.css'
import { cols } from '../../pages/Config'
import { IUser } from '../../utils/interfaces'
import { useTable, useSortBy } from 'react-table'
import { useAuth } from '../../context/AuthContext'
import { getTableData } from '../../utils/firebase'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'
import InputText from './components/inputs/InputText'
import InputDate from './components/inputs/InputDate'
import { Table, Tbody, Td, Th, Thead } from './components/Elements'
import useUserInfo from '../../context/UserInfoContext'
import Updater from './components/updater/Updater'
import { Resizable } from 're-resizable'
import useTableFilters from '../../context/TableContext'
interface IResizeWidth {
  [key: string]: {
    width: number
  }
}

const TableContainer = () => {
  const { tableFilters } = useTableFilters()
  const { setUserInfo } = useUserInfo()
  const [data, setData] = useState<IUser[] | []>([])
  const [unFiltered, setUnFiltered] = useState<IUser[] | []>([])
  const [resizeWidth, setResizeWidth] = useState<IResizeWidth>()

  const { user } = useAuth()
  const getData = useCallback(async () => {
    const data = await getTableData(user)
    setData(data ?? [])
    setUnFiltered(data ?? [])
  }, [user])

  const defaultStyles = {
    width: 150,
    height: '100%',
  }

  const reSizeStyles = {
    width: '100%',
    height: '100%',
    padding: '1.25rem 1rem',
  }

  const columns = useMemo(() => cols, [])

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
                      resizeWidth={resizeWidth?.index?.width ?? 150}
                      onClick={() => (column as any).toggleSortBy()}
                    >
                      <Resizable
                        defaultSize={defaultStyles}
                        style={reSizeStyles}
                        onResizeStop={(e, direction, ref, d) => {
                          setResizeWidth({
                            ...resizeWidth,
                            [index]: {
                              width: d.width + 150,
                            },
                          })
                        }}
                        minWidth={150}
                      >
                        <span>{column.render('Header')}</span>
                        <span>
                          {(column as any).isSorted ? (
                            (column as any).isSortedDesc ? (
                              <CaretDownOutlined />
                            ) : (
                              <CaretUpOutlined />
                            )
                          ) : null}
                        </span>
                      </Resizable>
                    </Th>
                    <Th
                      {...column.getHeaderProps()}
                      resizeWidth={resizeWidth?.[index + 1]?.width ?? 150}
                      key="updater"
                    >
                      <Resizable
                        defaultSize={defaultStyles}
                        style={reSizeStyles}
                        onResizeStop={(e, direction, ref, d) => {
                          setResizeWidth({
                            ...resizeWidth,
                            [index + 1]: {
                              width: d.width + 150,
                            },
                          })
                        }}
                        minWidth={150}
                      >
                        <span>{'Updater'}</span>
                      </Resizable>
                    </Th>
                  </>
                )
              }
              return (
                <Th
                  {...column.getHeaderProps()}
                  resizeWidth={resizeWidth?.index?.width ?? 150}
                  onClick={() => (column as any).toggleSortBy()}
                >
                  <Resizable
                    defaultSize={defaultStyles}
                    minWidth={150}
                    style={reSizeStyles}
                    onResizeStop={(e, direction, ref, d) => {
                      setResizeWidth({
                        ...resizeWidth,
                        [index]: {
                          width: d.width + 150,
                        },
                      })
                    }}
                  >
                    <span>{column.render('Header')}</span>
                    <span>
                      {(column as any).isSorted ? (
                        (column as any).isSortedDesc ? (
                          <CaretDownOutlined />
                        ) : (
                          <CaretUpOutlined />
                        )
                      ) : null}
                    </span>
                  </Resizable>
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
                      <InputText
                        cellId={cell.column.id}
                        customVal={cell.value}
                      ></InputText>
                      <Updater />
                    </>
                  )
                }

                switch(cell.column.id) {
                  case 'photoURL':
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
                  
                  case 'personalDetails.dob':
                    return (
                      <InputDate
                        customVal={cell.value}
                        cellId={cell.column.id}
                      />

                    )
                  
                  default: 
                    return (
                      <InputText
                        customVal={cell.value}
                        cellId={cell.column.id}
                        disableUpdates={cell.column.id === 'uid'}
                      />
                    )
                }
              })}
            </tr>
          )
        })}
      </Tbody>
    </Table>
  )
}

export default memo(TableContainer)
