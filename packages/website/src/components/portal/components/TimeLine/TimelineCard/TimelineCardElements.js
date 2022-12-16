import styled from 'styled-components'
import { FlexCenter, Heading } from '../../../../../styles/sharedStyles'

// Component CSS
export const TimelinePoint = styled(FlexCenter)`
  width: 20px;
  height: 20px;
  background: ${props => props.theme.bg};
  transition: 0.375s all ease-in-out;
  border: 2px solid ${props => props.theme.font + 75};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  span {
    width: 10px;
    height: 10px;
    background: ${props => props.theme.bg};
    transition: 0.375s all ease-in-out;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`
export const TimelineCardWrapper = styled(FlexCenter)`
  gap: 0.5rem;
  cursor: pointer;
  padding: 1rem;
  max-width: 25rem;
  min-height: 10rem;
  flex-direction: column;
  transition: 0.375s all ease-in-out;
  border: 2px solid ${props => props.theme.font + 50};

  &:hover,
  &:focus {
    background: ${props => props.theme.font + 10};

    ${TimelinePoint} {
      span {
        background: ${props => props.theme.font + 75};
      }
    }
  }
`
export const Container = styled(FlexCenter)`
  width: 40rem;
  gap: 0.25rem;
  flex-direction: column;
  align-items: ${props => props.align && props.align};

  ${TimelineCardWrapper} {
    align-items: flex-start;
  }

  &:nth-of-type(odd) {
    align-items: flex-start;

    ${TimelineCardWrapper} {
      align-items: flex-end;
    }
  }

  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    padding: 0 2.5vw;
    align-items: center;
    margin: 0 !important;

    &:nth-of-type(n) {
      align-items: flex-end;
    }
  }
`
export const TimelineCardTitle = styled(Heading)`
  font-size: 1.5rem;
  font-weight: 300;
  width: 100%;
  overflow: scroll;
  text-align: ${props => props.align && props.align};

  @media (max-width: 768px) {
    text-align: start;
  }
`
export const TimelineCardInfo = styled.p`
  font-size: 1rem;
  font-weight: 300;
  width: 100%;
  text-align: ${props => props.align && props.align};

  @media (max-width: 768px) {
    text-align: start;
  }
`
export const TimelineDifficulty = styled.p`
  font-size: 1rem;
  font-weight: 400;
  padding: calc(30px - 1rem) 1rem;
  border: 2px solid ${props => props.theme.font + 50};
`
