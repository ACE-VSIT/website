import styled from 'styled-components'
import { Heading, FlexCenter } from '../../../styles/sharedStyles'

export const EventsCardWrapper = styled.div`
  width: 21rem;
  gap: 0.25rem;
  height: 16rem;
  background: ${props => props.theme.bg};
  padding: 1rem;
  cursor: pointer;
  padding: 1rem;
  border: 1px solid ${props => props.theme.font + 75};

  @media (max-width: 768px) {
    width: 80vw;
    height: max-content;
  }
`

export const ImageWrapper = styled.img`
  width: 100%;
  height: 60%;
`
export const EventDetailContainer = styled(FlexCenter)`
  justify-content: space-around;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 0.5rem);
  flex-wrap: wrap;
  gap: 0;
`

export const DateWrapper = styled.div`
  margin-top: 5%;
  display: inline-flex;
  float: right;
`
export const Date = styled.p`
  padding: 0 10px;
  font-size: 0.8rem;
`

export const EventName = styled(Heading)`
  font-size: 1.25rem;
  font-weight: 400;
  margin: 1% 0 0 0;
  letter-spacing: 0.25px;
  white-space: normal;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`
export const EventDescription = styled.p`
  margin-top: 5%;
  font-size: 1rem;
  height: 9.5rem;
  max-height: 5.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 2%;
  }
`

export const WrapperBody = styled.div`
  margin-top: 25rem;
  margin-bottom: 5%;
`
export const Container = styled(FlexCenter)`
  flex-wrap: wrap;
  width: calc(100vw - 12.5rem);
  gap: 2rem;

  @media (max-width: 768px) {
    width: 100vw;
  }
`
