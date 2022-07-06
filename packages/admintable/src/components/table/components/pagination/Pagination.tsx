import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useTableFilters from '../../../../context/TableContext'
import { IPagination } from '../../interfaces/IPagination'
import SelectOption from '../inputs/SelectOption'
import Paginator from './Paginator'

const Pagination: React.FC<IPagination> = () => {
  const [totalPages, setTotalPages] = useState<number>()
  const [currentPage, setCurrentPage] = useState<number>(0)
  const { tableFilters, setTableFilters } = useTableFilters()

  const onNextPage = () => {
    if (currentPage < tableFilters?.pageLength!) {
      setTableFilters!({
        ...tableFilters!,
        currentPage: currentPage + 1,
      })
      setCurrentPage(prev => prev + 1)
    }
  }

  const onPrevPage = () => {
    if (currentPage > 0) {
      setTableFilters!({
        ...tableFilters!,
        currentPage: currentPage - 1,
      })
      setCurrentPage(prev => prev - 1)
    }
  }

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTableFilters!({
      ...tableFilters!,
      listLength: parseInt(e.target.value),
    })
  }

  useEffect(() => {
    if (tableFilters?.totalItems && tableFilters?.listLength) {
      setTotalPages(
        Math.ceil(tableFilters?.totalItems / tableFilters?.listLength!)
      )
      setCurrentPage(0)
    }
  }, [tableFilters?.listLength, tableFilters?.totalItems])

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
      {totalPages && (
        <Paginator
          pagesOffset={3}
          onNextPage={onNextPage}
          currentPage={currentPage}
          onPreviousPage={onPrevPage}
          length={totalPages}
        />
      )}
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
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  p {
    font-size: 0.85rem;
    color: ${props => props.theme.font + 'DD'};
  }
`
