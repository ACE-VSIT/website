import styled from 'styled-components'
import Button from 'remote/Button'
import { useRef, useState, useReducer, useEffect } from 'react'
import { TextInput } from '../inputs/InputText'
import { columns } from '../../../../configs/user-table-config'
import useOutsideTouch from 'remote/useOutsideTouch'
import { FilterType } from '../features/filter-data'
import useTableProps from '../../../../contexts/TableContext'
import { IUser } from '../../../../interfaces/user.interface'

function Toolbar() {
  const [show, setShow] = useState<boolean>(false)
  const filterMenuRef = useRef()

  const handleShowState = () => {
    setShow(curr => !curr)
  }

  useOutsideTouch(filterMenuRef, setShow)

  return (
    <ToolbarWrapper>
      <Button onClick={handleShowState} md value={'Filter'} />
      {show ? <FilterMenu filterRef={filterMenuRef} /> : null}
    </ToolbarWrapper>
  )
}

type ActionType = {
  type: string
  payload: string
}

function filterReducer(state: FilterType, action: ActionType): FilterType {
  switch (action.type) {
    case 'PROPERTY':
      return {
        ...state,
        property: action.payload,
      }
    case 'CONDITIONAL':
      return {
        ...state,
        conditional: action.payload,
      }
    case 'VALUE':
      return {
        ...state,
        value: action.payload,
      }
    default:
      return state
  }
}

function FilterMenu({ filterRef }: any) {
  const [filters, setFilters] = useState<FilterType[]>([])
  let initialFilter: FilterType = {
    property: columns[0].Header,
    conditional: 'equals',
    value: '',
  }

  const [filter, dispatch] = useReducer(filterReducer, initialFilter)
  const { tableData, setFilteredData, setLoading } = useTableProps()

  const handleFilterAppend = () => {
    setFilters([...filters, filter]) // setState async
  }

  useEffect(() => {
    setLoading!(true)
    let fd: IUser[] = tableData !== undefined ? [...tableData] : []
    for (let i = 0; i < filters.length; i++) {
      fd = fd?.filter(user => user.name.includes('Prabhat'))
    }
    if (fd !== undefined && setFilteredData !== undefined) {
      setFilteredData(fd)
    }
    setLoading!(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.length, setFilteredData, setLoading, tableData])

  const handleOnChangeFilter = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    type: string
  ) => {
    dispatch({ type: type, payload: e?.target?.value })
  }

  return (
    <FilterMenuWrapper ref={filterRef}>
      <Select
        value={filter.property}
        onChange={e => handleOnChangeFilter(e, 'PROPERTY')}
      >
        {columns.map((obj, idx) => (
          <option key={idx} value={obj.Header}>
            {obj.Header}
          </option>
        ))}
      </Select>
      <Select
        value={filter.conditional}
        onChange={e => handleOnChangeFilter(e, 'CONDITIONAL')}
      >
        <option value="equals">equals to</option>
        <option value="notequals">not equals to</option>
        <option value="includes">contains</option>
      </Select>

      <ValueInput onChange={e => handleOnChangeFilter(e, 'VALUE')} />
      <Button onClick={handleFilterAppend} sm value={'Add Filter'} />
    </FilterMenuWrapper>
  )
}

export default Toolbar

const ToolbarWrapper = styled('div')`
  display: flex;
  border: 1px solid ${props => props.theme.font};
  width: 100%;
  padding: 0.75rem;
  gap: 1rem;
`

const FilterMenuWrapper = styled('span')`
  gap: 1rem;
  left: 15rem;
  z-index: 999;
  display: flex;
  padding: 1rem;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.bg};
  border: 1px solid ${props => props.theme.font};
`

const ValueInput = styled(TextInput)`
  width: 10rem;
  height: 3rem;
  padding: 0.5rem;
  border: 1px solid black;
`

const Select = styled('select')`
  width: 10rem;
  height: 3rem;
  padding: 0.5rem;
  border: 1px solid black;
  background-color: white;
`
