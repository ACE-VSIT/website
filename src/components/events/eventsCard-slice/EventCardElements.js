import styled, { css } from "styled-components"
import { Heading } from "../../../styles/sharedStyles"

export const EventsCardWrapper = styled.div`
  width: 20vw;
  height: 25rem;
  overflow: hidden;
  background: ${props => props.theme.bg};
  gap: 0.15rem;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    overflow: scroll;
    margin: 0.25rem 0 0 0;
  }
`

export const ImageWrapper = styled.img`
  width: 100%;
  height: 60%;
`
export const EventDetailContainer = styled.div`
  display: flex;
`

export const Date = styled.h4`
  padding: 5px;
  width: 30%;
  font-size: 1.25rem;
  text-align: center;
`

export const EventDetail = styled.div`
  padding-left: 10px;
`
export const EventName = styled(Heading)`
  font-size: 1.5rem;
  margin: 1% 0 0 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`
export const EventDescription = styled.p`
  margin-top: 5%;
  font-size: 1 rem;
  @media (max-width: 768px) {
    font-size: .5rem;
  }

`
