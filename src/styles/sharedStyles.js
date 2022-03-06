import styled from "styled-components"

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap:
  width: 100%;
  height: 100%;
  gap: 1rem;

  @media (max-width: 768px) {
      flex-direction: column;
  }
`
export const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  padding: 0.5rem 0 0 0;
`