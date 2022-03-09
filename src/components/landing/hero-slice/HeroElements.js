import styled from "styled-components"
import { FlexCenter } from "../../../styles/sharedStyles"

export const HeroWrapper = styled(FlexCenter)`
  min-height: 100vh;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding: 5vh 0;
    flex-direction: column;
    min-height: 100%;

    #hero-img {
      display: none;
    }
  }
`
export const HeroInfoWrapper = styled(FlexCenter)`
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
export const HeroTitle = styled.h1`
  text-align: left;
  font-size: 4rem;
  color: ${props => props.theme.font};
  font-weight: 300;

  &::before {
    content: "";
    width: 4rem;
    display: block;
    background: ${props => props.theme.font};
    height: 2px;
    margin-bottom: -1rem;
    background: linear-gradient(
      90deg,
      ${props => props.theme.active} 70%,
      ${props => props.theme.font} 70%
    );
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
    &::before {
      width: 3.5rem;
    }
  }

  @media (max-width: 320px) {
    font-size: 3rem;
    &::before {
      width: 3rem;
      margin: 0;
    }
  }
`
export const HeroInfo = styled.p`
  text-align: left;
  font-size: 1.25rem;
  color: ${props => props.theme.font};
  font-weight: 400;
`
