import styled from 'styled-components'
import { Heading } from '../../styles/sharedStyles'

export const HeroSliceBgWrapper = styled.div`
  width: calc(100vw - 10rem - 2px);
  height: 20rem;
  position: absolute;
  left: 5rem;
  top: 5rem;
  overflow: hidden;
  z-index: 100;
  filter: brightness(75%);

  @media (max-width: 768px) {
    width: 100vw;
    left: 0;
  }
`
export const HeroSliceHeading = styled(Heading)`
  position: absolute;
  top: calc(25rem / 2);
  left: 0;
  width: 100vw;
  z-index: 105;
  color: #ebf6fe;
  text-align: center;
`
