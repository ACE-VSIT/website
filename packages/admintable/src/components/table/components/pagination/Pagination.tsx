import React from 'react'
import styled from 'styled-components'
import useTableProps from '../../../../contexts/TableContext'
import { IPagination } from '../../../../interfaces/pagination.interface'
import SelectOption from '../inputs/SelectOption'

const Pagination: React.FC<IPagination> = () => {
  const { tableFilters, setTableFilters } = useTableProps()

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTableFilters!({
      listLength: parseInt(e.target.value),
    })
  }

  return (
    <PaginationWrapper>
      <p>Filter items to show on Page</p>
      <SelectOption
        showCustomValue={true}
        name={'paginationOption'}
        customOnChange={onSelectChange}
        customValue={tableFilters?.listLength}
        optionsValue={[5, 20, 40, 50, 60, 80, 100]}
        options={['5', '20', '40', '50', '60', '80', '100']}
      />
    </PaginationWrapper>
  )
}

export default Pagination

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 100%;
  gap: 1rem;

  p {
    font-size: 0.85rem;
    color: ${props => props.theme.font + 'DD'};
  }
`
