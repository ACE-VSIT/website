import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { FlexCenter } from '../../../styles/sharedStyles'

export default function MembersSort({ startingYear, setYear }) {
  const [optionYears, setOptionYears] = useState()
  const optionRef = useRef()

  const handleOptionChange = () => {
    setYear(optionRef.current.value)
  }

  useEffect(() => {
    // New Session updates in September, so if the current month is less than 8, then the year is same as current year, else it is next year
    let latestYear = new Date().getMonth() < 7 ? new Date().getFullYear() : new Date().getFullYear() + 1
    const yearArr = []
    while (startingYear <= latestYear) {
      yearArr.push(latestYear--)
    }
    setOptionYears(yearArr)
  }, [startingYear])

  return (
    <>
      <SortWrapper>
        <SortText>Filter by Year </SortText>
        <SortSelect ref={optionRef} onChange={handleOptionChange}>
          {optionYears?.map((e, key) => {
            return (
              <SortOption value={e} key={key}>
                {e}
              </SortOption>
            )
          })}
        </SortSelect>
      </SortWrapper>
    </>
  )
}

const SortWrapper = styled(FlexCenter)`
  width: 100%;
  justify-content: flex-end;
  padding: 0 calc(5vw + 0.5rem);
  gap: 0;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`
const SortText = styled.p`
  font-size: 1rem;
  letter-spacing: 0.5px;
  border: 1px solid ${props => props.theme.font + '75'};
  border-right: none;
  padding: 0.05rem 0 0.05rem 0.5rem;
`
const SortSelect = styled.select`
  width: 7rem;
  text-align: center;
  font-size: 1rem;
  border: 1px solid ${props => props.theme.font + '75'};
  background: ${props => props.theme.bg};
  border-left: none;
  color: ${props => props.theme.font};

  &:hover,
  &:focus {
    outline: none;
  }
`
const SortOption = styled.option``
