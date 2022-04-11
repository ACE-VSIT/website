import styled from "styled-components"
import { FlexCenter, Heading } from "../../../styles/sharedStyles"

export const HeroSectionWrapper = styled(FlexCenter)`
  flex-direction: row;
  justify-content: flex-end;
  padding-left: 5vw;

  @media (max-width: 768px) {
    padding: 0;
    gap: 0;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100vh;
  }
`
export const HeroSectionBg = styled.div`
  overflow: scroll;
  * {
    width: 60vw;
    object-fit: cover;
    height: 95vh;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    * {
      width: 100vw;
      height: 50vh;
    }
  }
`
export const HeroCardHighlight = styled(FlexCenter)`
  position: absolute;
  top: 55%;
  left: calc(35% + 2px);
  transform: translate(-50%, -50%);
  width: 40rem;
  height: 25rem;
  overflow: hidden;
  background: ${props => props.theme.secondary};
  gap: 0.15rem;
  cursor: pointer;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1.5rem 3rem;
  gap: 1rem;

  * {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 90vw;
    height: max-content;
    position: absolute;
    top: 65%;
    left: 50%;
    padding: 1.5rem 2.5rem;
    gap: 0.5rem;
  }
`
export const CardDate = styled.p`
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
`
export const CardHeading = styled(Heading)`
  font-size: 2.5rem;
  transition: 0.375s all ease-in-out;
  color: ${props => props.theme.font};

  &:hover,
  &:focus {
    color: ${props => props.theme.active};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`
export const CardInfo = styled.p`
  font-size: 0.95rem;
  font-weight: 400;
  letter-spacing: 1px;
`
