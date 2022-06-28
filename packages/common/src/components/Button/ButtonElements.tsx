import styled, { css } from 'styled-components'
import { IButtonComponents } from '../../interfaces/IButton'

export const ButtonComponent = styled.button<IButtonComponents>`
  text-align: center;
  text-decoration: none;
  line-height: 80px;
  position: relative;
  display: block;
  overflow: hidden !important;
  width: 100%;
  height: 80px;
  max-width: 250px;
  border: 1px solid ${props => props.theme.font + '75'};
  color: ${props => props.theme.font};
  background: ${props => props.theme.font + 25};
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: ${props => props.theme.font};
    background-color: ${props => props.theme.font + '25'};
    transform: translateX(-100%);
    transition: 0.375s all ease-in-out;
  }

  &:hover:before {
    transform: translateX(0);
  }

  ${({ sm }) =>
    sm &&
    css`
      width: 100%;
      height: 50px;
      max-width: 150px;
      line-height: 50px;
    `}

  ${({ md }) =>
    md &&
    css`
      width: 100%;
      height: 60px;
      max-width: 180px;
      line-height: 60px;
    `}

    ${({ lg }) =>
    lg &&
    css`
      width: 100%;
      height: 90px;
      max-width: 250px;
      line-height: 90px;
    `}
`

export const ButtonWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`
