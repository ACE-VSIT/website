import styled, { css } from 'styled-components'
import CloseOutlined from '@ant-design/icons/CloseOutlined'

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  overflow: hidden;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  padding: 0.5rem 0 0 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  ${({ topLine }) =>
    topLine &&
    css`
      &::before {
        content: '';
        width: 2.25rem;
        display: block;
        background: ${props => props.theme.font};
        height: 2px;
        margin-bottom: -0.5rem;
        background: linear-gradient(
          90deg,
          ${props => props.theme.active} 70%,
          ${props => props.theme.font} 70%
        );
      }

      @media (max-width: 768px) {
        margin-bottom: 0.2rem;
        font-size: 2rem;
        &::before {
          width: 1.5rem;
        }
      }
    `}
`

export const Close = styled(CloseOutlined)`
  transition: 0.5s all ease-in-out;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.font};
  height: 5rem;
  line-height: 5rem;
  padding: 0.25rem 0;
  top: 0%;
  right: 1.5rem;
  position: absolute;

  &:hover,
  &:focus {
    color: ${props => props.theme.active};
  }
  @media (max-width: 330px) {
    height: 4rem;
    font-size: 1.25rem;
    margin-left: 95%;
    line-height: 4rem;
  }
  ${({ cardCloseBtn }) =>
    cardCloseBtn &&
    css`
      @media (max-width: 768px) {
        right: 0;
        top: 0;
        line-height: 4rem;
        width: 2.75rem;
        margin-right: 0.5rem;
        height: 3rem;
        background: ${props => props.theme.bg};
      }
    `}
`
