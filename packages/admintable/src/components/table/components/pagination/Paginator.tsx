import styled, { DefaultTheme, StyledComponent } from 'styled-components'
import React, { useState } from 'react'
import { IPaginator } from '../../interfaces/IPaginator'

const Paginator: React.FC<IPaginator> = ({
  length,
  onNextPage,
  currentPage,
  onPreviousPage,
  pagesOffset = 4,
}) => {
  /* 
    active will return active Index of the paginator
    active page will be page + 1
  */
  const [active, setActive] = useState(currentPage ?? 0)

  const handlePrev = () => {
    if (active !== 0) {
      setActive(prev => prev - 1)
      onPreviousPage && onPreviousPage()
    }
  }

  const handleNext = () => {
    if (active !== length - 1) {
      setActive(prev => prev + 1)
      onNextPage && onNextPage()
    }
  }

  return (
    <PaginatorWrapper>
      <PaginatorBlocks
        text={true}
        disabled={active !== 0}
        onClick={() => handlePrev()}
      >
        Prev
      </PaginatorBlocks>
      {length !== 0 &&
        Array(length)
          ?.fill(0)
          ?.slice(
            length - pagesOffset <= active ? length - pagesOffset : active,
            length - pagesOffset <= active ? length : active + pagesOffset
          )
          .map((e, index) => {
            const isLastOfIndexes = length - pagesOffset <= active
            const currentPage = isLastOfIndexes ? active : active + index
            return (
              <PaginatorBlocks
                key={index}
                active={
                  !isLastOfIndexes
                    ? currentPage === active
                    : length - pagesOffset + index === active
                }
              >
                {!isLastOfIndexes
                  ? currentPage + 1
                  : length - pagesOffset + index + 1}
              </PaginatorBlocks>
            )
          })}
      <PaginatorBlocks
        text={true}
        disabled={active === length - 1}
        onClick={() => handleNext()}
      >
        Next
      </PaginatorBlocks>
    </PaginatorWrapper>
  )
}

export default Paginator

export const PaginatorWrapper = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
`
export const PaginatorBlocks: StyledComponent<
  'div',
  DefaultTheme,
  { text?: boolean; active?: boolean; disabled?: boolean },
  never
> = styled(PaginatorWrapper)<{
  text?: boolean
  active?: boolean
  disabled?: boolean
}>`
  height: 3rem;
  cursor: pointer;
  transition: 0.375s all;
  justify-content: center;
  width: ${props => (props.text ? '4.5rem' : '3rem')};
  background-color: ${props =>
    props.active ? props.theme.font + '25' : props.theme.bg};
  border: 1px solid
    ${props => (props.active ? props.theme.font : props.theme.font + '75')};

  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.font};
    background-color: ${props => props.theme.font + '25'};
  }
`
