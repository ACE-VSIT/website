import styled, { css } from 'styled-components'

export const ImageElement = styled.div`
  transition: 0.375s all ease-in-out;
  object-fit: cover;
  width: 100%;
  height: 100%;
  overflow: hidden;
  * {
    width: 100%;
    height: 100%;
  }
`

export const ImageContainer = styled.div`
  width: 25rem;
  height: 25rem;
  cursor: pointer;
  overflow: hidden;
  text-align: center;
  transition: 0.375s all ease-in-out;
  background-color: ${props => props.theme.font + 50};

  ${({ open }) =>
    open &&
    css`
      width: 80vw;
      height: 60vh;

      @media (max-width: 768px) {
        width: 25rem;
        height: 25rem;
      }
    `}

  &:hover,
  &:focus {
    ${ImageElement} {
      transform: scale(1.15);
    }
  }

  @media (max-width: 768px) {
    width: 80vw;
    height: auto;
  }
`
