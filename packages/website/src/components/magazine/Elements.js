import styled from 'styled-components'
import { FlexCenter } from '../../styles/sharedStyles'

export const Wrapper = styled(FlexCenter)`
  padding: 5rem 0 2rem 0;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0;
  }
`
export const CardWrapper = styled(FlexCenter)`
  padding: 1rem 0;
  flex-wrap: wrap;
  justify-content: center;
  width: calc(100vw - 20vw);

  @media (max-width: 768px) {
    width: 100vw;
    padding: 0;
  }
`
