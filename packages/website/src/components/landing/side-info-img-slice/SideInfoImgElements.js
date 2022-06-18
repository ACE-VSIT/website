import styled from 'styled-components'
import { FlexCenter, Heading } from '../../../styles/sharedStyles'

export const SliderInfoWrapper = styled(FlexCenter)`
  min-height: 100vh;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding: 5vh 0;
    flex-direction: column;
    min-height: 100%;
  }
`
export const SliderInfoTextWrapper = styled(FlexCenter)`
  width: calc(50vw - 5rem);
  flex-direction: column;
  padding: 0 5rem;
  height: calc(100vh - 6rem);
  gap: 2rem;
  * {
    overflow: hidden;
  }

  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
    padding: 0 calc(5vw + 0.5rem);
    gap: 1rem;
  }
`
export const SliderInfoHeading = styled(Heading)`
  font-size: 3rem;
  text-align: left;
  width: 100%;
  font-weight: 300;
  position: relative;

  &::before {
    content: '';
    width: 3rem;
    display: block;
    background: ${props => props.theme.font};
    height: 2px;
    margin-bottom: -0.5rem;
    background: linear-gradient(
      90deg,
      ${props => props.theme.active} 70%,
      ${props => props.theme.font} 70%
    );
  }
`
export const SliderInfoPara = styled.p`
  font-size: 1.25rem;
  text-align: left;
`
export const SliderImageWrapper = styled.div`
  width: calc(50vw - 5rem);
  height: calc(100vh - 5rem);
  position: absolute;
  left: 5rem;

  @media (max-width: 768px) {
    position: static;
    width: 100vw;
    height: 100vw;
    padding: 0;
  }
`
