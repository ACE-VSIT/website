import styled, { css } from "styled-components"

export const ButtonWrapper = styled.button`
  text-align: center;
  text-decoration: none;
  line-height: 80px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
  border: 1px solid ${props => props.theme.font + "75"};
  color: ${props => props.theme.font};
  background: ${props => props.theme.font + 25};
  cursor: pointer;
  font-size: 1.15rem;
  padding: 0 1rem;
  width: 100%;
  height: 60px;
  line-height: 60px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: ${props => props.theme.font};
    background-color: ${props => props.theme.font + "25"};
    transform: translateX(-100%);
    transition: 0.375s all ease-in-out;
  }

  &:hover:before {
    transform: translateX(0);
  }

  ${({ primary }) =>
    primary &&
    css`
      font-size: 1rem;
      padding: 0;
      color: ${props => props.theme.font};
      border-color: ${props => props.theme.active};
      background-color: ${props => props.theme.active + 75};
    `}

  ${({ sm }) =>
    sm &&
    css`
      width: 100%;
      height: 50px;
      max-width: 150px;
      line-height: 50px;
    `}
`
