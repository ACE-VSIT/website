import styled from "styled-components"
import { Heading, FlexCenter } from "../../../styles/sharedStyles"

export const ProjectCardWrapper = styled(FlexCenter)`
  flex-direction: column;
  width: 350px;
  gap: 0.25rem;
  max-height: 650px;
  justify-content: flex-start;
  border: 1px solid ${props => props.theme.font + "50"};
  padding: 10px;
  transition: 0s all ease-in-out;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
  position: relative;
`
export const ProjectCardHeading = styled(Heading)`
  font-size: 1.5rem;
`
export const ProjectCardInfo = styled(Heading)`
  font-size: 1rem;
  text-align: center;
  padding: 0 0 0.25rem 0;
`
export const ProjectCardImageWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 300px;
  object-fit: cover;
`
export const ProjectCardTags = styled.p`
  position: absolute;
  top: 280px;
  right: 0;
  text-align: right;
  width: max-content;
  height: max-content;
  padding: 0.5rem;
  font-size: 0.9rem;
  background: ${props => props.theme.bg};
`