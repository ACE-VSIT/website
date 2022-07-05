import React from 'react'
import styled from 'styled-components'
import useTableFilters from '../../../../context/TableContext'
import { IPagination } from '../../interfaces/IPagination'
import SelectOption from '../inputs/SelectOption'
import Paginator from './Paginator'

const Pagination: React.FC<IPagination> = () => {
  const { tableFilters, setTableFilters } = useTableFilters()

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTableFilters!({
      listLength: parseInt(e.target.value),
    })
  }

  return (
    <PaginationWrapper>
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
      <Paginator length={10} />
    </PaginationWrapper>
  )
}

export default Pagination

export const PaginationWrapper = styled.div`
  gap: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;

  p {
    font-size: 0.85rem;
    color: ${props => props.theme.font + 'DD'};
  }
`
