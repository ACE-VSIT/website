import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import useTableProps from '../../../../contexts/TableContext'
import { IPagination } from '../../../../interfaces/pagination.interface'
import SelectOption from '../inputs/SelectOption'

const Pagination: React.FC<IPagination> = () => {
  const { tableData, tableFilters, setTableFilters } = useTableProps()
  console.log("tableFilters", tableFilters)
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target

    setTableFilters!({
      listLength: value !== '*' ? parseInt(e.target.value) : '*',
    })
    localStorage.setItem('ace-admintable-table-pagination', value)
  }

  const onLoadPagination = useCallback(() => {
    if (tableData?.length) {
      const savedTablePagination = localStorage.getItem(
        'ace-admintable-table-pagination'
      )

      savedTablePagination &&
        setTableFilters!({
          listLength:
            savedTablePagination !== '*' ? parseInt(savedTablePagination) : '*',
        })
    }
  }, [setTableFilters, tableData?.length])

  useEffect(() => {
    onLoadPagination()
  }, [onLoadPagination])

  return (
    <PaginationWrapper>
      <p>Limit items to show on Page</p>
      <SelectOption
        showCustomValue={true}
        name={'paginationOption'}
        customOnChange={onSelectChange}
        customValue={tableFilters?.listLength}
        optionsValue={[5, 20, 40, 50, 60, 80, 100, 200, '*']}
        options={['5', '20', '40', '50', '60', '80', '100', '200', 'MAX']}
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
