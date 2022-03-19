import styled, { css } from "styled-components"
import RightSquareOutlined from "@ant-design/icons/RightSquareOutlined"
import { Heading, FlexCenter } from "../../../../styles/sharedStyles"
import { Link } from "gatsby"

export const FooterWrapper = styled(FlexCenter)`
  width: 100vw;
  position: relative;
  flex-wrap: wrap;
  flex-direction: row;
  height: max-content;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2rem 5rem;
  left: 5rem;

  @media (max-width: 768px) {
    height: 100%;
    left: 0;
    flex-direction: column;
    padding: 2rem calc(5vw + 0.5rem);
  }
`
export const FooterItemsWrapper = styled(FlexCenter)`
  width: calc(33vw - 10rem);
  height: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1.5rem;
  align-items: flex-start;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  ${({ mobileMb }) =>
    mobileMb &&
    css`
      @media (max-width: 768px) {
        margin-bottom: 5rem;
      }
    `}
`
export const FooterSubscribe = styled.input`
  border: none;
  padding: 0.25rem 0.5rem;
  width: calc(33vw - 13rem);
  font-size: 1.15rem;
  border-bottom: 2px solid ${props => props.theme.font + "50"};
  color: 2px solid ${props => props.theme.font};
  background: ${props => props.theme.bg};
  transition: 0.375s all ease-in-out;
  text-align: left;

  &:hover,
  &:focus {
    border-bottom: 2px solid ${props => props.theme.font};
    outline: none;
    color: 2px solid ${props => props.theme.font};
  }

  @media (max-width: 768px) {
    width: calc(100vw - 6rem);
  }
`
export const FooterSubscribeSendBtn = styled(RightSquareOutlined)`
  font-size: 2.25rem;
  color: ${props => props.theme.font + "50"};
  cursor: pointer;
  transition: 0.375s all ease-in-out;
  margin-bottom: -0.4rem;
  padding-left: 0.5rem;

  &:hover,
  &:focus {
    color: ${props => props.theme.font};
  }
`
export const FooterTitle = styled(Heading)`
  font-size: 3rem;
  width: 100%;
  font-weight: 300;

  &:first-letter {
    font-weight: 400;
  }

  ${({ subtitle }) =>
    subtitle &&
    css`
      font-weight: 400;
      font-size: 1.1rem;
      letter-spacing: 0.75px;

      &:first-letter {
        font-weight: 400;
        color: ${props => props.theme.font};
      }
    `}

  @media (max-width: 768px) {
    width: 100vw;
    padding-right: calc(0.5rem + 5vw);
  }
`
export const FooterLinks = styled(Link)`
  font-size: 1.15rem;
  color: ${props => props.theme.font};
  text-decoration: none;
  transition: 0.375s all ease-in-out;

  &:hover,
  &:focus {
    color: ${props => props.theme.active};
  }
`
export const FooterBottom = styled.div`
  position: absolute;
  width: 100vw;
  height: 5rem;
  background: ${props => props.theme.bg};
  border-top: 1px solid ${props => props.theme.font + "45"};
  display: flex;
  justify-content: center;
  align-items: center;
  left: -5rem;
  bottom: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    left: 0;
  }
`
