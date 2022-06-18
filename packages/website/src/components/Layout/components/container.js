import styled from "styled-components"
import { FlexCenter } from "../../../styles/sharedStyles"

export const Container = styled(FlexCenter)`
  width: 100vw;
  min-height: 100vh;
  padding: 5rem 5rem 0 5rem;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 5rem 0 0 0;
  }
`
