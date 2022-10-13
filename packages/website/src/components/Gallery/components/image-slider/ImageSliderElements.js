import styled, { keyframes } from 'styled-components'

const ImageSliderContainerKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const ImageSliderContainer = styled.div`
  top: 50%;
  left: 50%;
  height: 60vh;
  z-index: 9999;
  display: flex;
  position: fixed;
  width: max-content;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 0 50vmax rgba(0, 0, 0, 0.5);
  border: 0.25rem solid ${props => props.theme.bg};

  animation: ${ImageSliderContainerKeyframes} 0.187s linear;

  @media (max-width: 768px) {
    display: none;
  }
`
