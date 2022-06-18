import styled from "styled-components"
import { FlexCenter } from "../../styles/sharedStyles"

export const FooterWrapper = styled(FlexCenter)`
  min-height: 15rem;
  padding: 0 calc(10rem + 0.5rem);
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 2rem calc(5vw + 0.5rem);
    gap: 1rem;
    align-items: flex-start;
  }
`
export const FooterSummary = styled.p`
  font-size: 1.15rem;
  text-align: center;

  @media (max-width: 768px) {
    text-align: left;
  }
`
