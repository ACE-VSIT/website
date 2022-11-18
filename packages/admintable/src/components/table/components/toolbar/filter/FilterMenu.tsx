import styled from 'styled-components'
import Button from 'remote/Button'
import { useReducer } from 'react'
import { TextInput } from '../../inputs/InputText'
import { columns } from '../../../../../configs/user-table-config'
import { FilterType } from './Filter'

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

function FilterMenu({ filterRef, filters, setFilters }: any) {
  let initialFilter: FilterType = {
    property: columns[0].accessor,
    conditional: 'equals',
    value: '',
  }

  const [filter, dispatch] = useReducer(filterReducer, initialFilter)

  const handleFilterAppend = () => {
    setFilters([...filters, filter])
    console.log(filter)
  }
  const handleClearFilters = () => {
    setFilters([])
  }

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
          <option key={idx} value={obj.accessor}>
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
        <option value="includes">includes</option>
        <option value="notincludes">not includes</option>
      </Select>

      <ValueInput onChange={e => handleOnChangeFilter(e, 'VALUE')} />
      <Button onClick={handleFilterAppend} sm value={'Add Filter'} />
      <Button onClick={handleClearFilters} sm value={'Clear Filters'} />
    </FilterMenuWrapper>
  )
}

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
  border: 1px solid ${props => props.theme.font + 75};
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

export default FilterMenu
