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
