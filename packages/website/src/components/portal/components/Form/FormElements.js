import styled, { css } from 'styled-components'
import { FlexCenter } from '../../../../styles/sharedStyles'

export const FormWrapper = styled(FlexCenter)`
  flex-direction: row;
  width: 30rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100vw;
    padding: 0 5vw;
  }
`

export const Input = styled.input`
  text-align: center;
  text-decoration: none;
  border: 1px solid ${props => props.theme.font + '75'};
  color: ${props => props.theme.font};
  background: ${props => props.theme.font + 25};
  cursor: pointer;
  height: 60px;
  width: 100%;
  padding: 0 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 60px;
  transition: 0.375s all ease-in-out;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    background: ${props => props.theme.bg + 15};
  }

  ${({ halfWidth }) =>
    halfWidth &&
    css`
      width: calc(50% - 0.5rem);

      @media (max-width: 768px) {
        width: 100%;
      }
    `}

  @media (max-width: 768px) {
    &[type='date'] {
      padding-left: 35%;
    }
  }
`

export const Select = styled.select`
  text-align: center;
  text-decoration: none;
  border: 1px solid ${props => props.theme.font + '75'};
  color: ${props => props.theme.font};
  background: ${props => props.theme.font + 25};
  cursor: pointer;
  height: 60px;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 60px;
  padding: 0 0.5rem;
  transition: 0.375s all ease-in-out;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    background: ${props => props.theme.bg + 50};
  }

  ${({ halfWidth }) =>
    halfWidth &&
    css`
      width: calc(50% - 0.5rem);

      @media (max-width: 768px) {
        width: 100%;
      }
    `}
`

export const Option = styled.option`
  color: ${props => props.theme.font};
  background-color: ${props => props.theme.bg};
`
export const ErrorBox = styled.div`
  background: ${props => props.theme.active + 75};
  border: 1px solid ${props => props.theme.active};
  color: ${props => props.theme.font};
  width: 100%;
  font-size: 1rem;
  text-align: center;
  height: 60px;
  padding: 0 0.5rem;
  line-height: 60px;
  overflow: hidden;
  min-width: 12rem;

  ${({ success }) =>
    success &&
    css`
      background: ${props => props.theme.success};
      border: 1px solid ${props => props.theme.font};
    `}
`
