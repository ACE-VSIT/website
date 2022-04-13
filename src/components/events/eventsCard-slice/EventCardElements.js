import styled, { css } from "styled-components"
import { Heading } from "../../../styles/sharedStyles"

export const EventsCardWrapper = styled.div`
  width: 17vw;
  gap: 0.25rem;
  background: ${props => props.theme.bg};
  cursor: pointer;

   @media (max-width: 768px) {
     width: 70vw;
     height: 10rem;
   }
`

export const ImageWrapper = styled.img`
  width: 100%;
  height: 60%;
`
export const EventDetailContainer = styled.div`
  /* display: flex; */
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
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`
export const EventDescription = styled.p`
  margin-top: 5%;
  font-size: 1rem;
  height: 9.5rem;
  max-height: 5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 2%;
  }
`

export const WrapperBody = styled.div`
  margin-top: 25rem;
  margin-bottom: 5%;
`