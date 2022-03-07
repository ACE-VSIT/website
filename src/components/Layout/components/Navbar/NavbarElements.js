import styled, { css } from "styled-components"
import AlignRightOutlined from "@ant-design/icons/AlignRightOutlined"
import CloseOutlined from "@ant-design/icons/CloseOutlined"
import { FlexCenter } from "../../../../styles/sharedStyles"
import { Link } from "gatsby"

export const NavbarWrapper = styled(FlexCenter)`
  justify-content: space-between;
  height: 5rem;
  overflow: visible;
  gap: 0;
  border-bottom: 1px solid ${props => props.theme.font + "25"};
  position: fixed;
  width: 100%;
  z-index: 1000;
  background: ${props => props.theme.bg};

  * {
    overflow: visible;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (max-width: 330px) {
    height: 4rem;
  }
`

export const NavbarBrandImg = styled.div`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  padding: 1rem;
  opacity: 0.85;
  transition: 0.5s all ease-in-out;
  border-right: 1px solid ${props => props.theme.font + "25"};

  &:hover,
  &:focus {
    opacity: 1;
  }

  @media (max-width: 330px) {
    height: 4rem;
    width: 4rem;
  }
`
export const NavbarListItem = styled(Link)`
  cursor: pointer;
  margin-bottom: -1px;
  font-size: 1.05rem;
  letter-spacing: -0.1mm;
  transition: 0.5s all ease-in-out;
  height: 5rem;
  line-height: 5rem;
  width: 100%;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  color: ${props => props.theme.font};
  font-weight: 500;
`
export const NavbarList = styled(FlexCenter)`
  gap: 0.5rem;

  div {
    border: 1px solid transparent;

    &:hover,
    &:focus {
      ${NavbarListItem} {
        color: ${props => props.theme.active};
      }

      border-bottom: 1.5px solid ${props => props.theme.font};
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`
export const NavbarSliderIcon = styled(AlignRightOutlined)`
  transform: rotateX(180deg);
  transition: 0.5s all ease-in-out;
  font-size: 1.25rem;
  width: 5rem;
  cursor: pointer;
  color: ${props => props.theme.font};
  height: 5rem;
  line-height: 5rem;
  border-left: 1px solid ${props => props.theme.font + "25"};

  &:hover,
  &:focus {
    color: ${props => props.theme.active};
  }

  @media (max-width: 330px) {
    height: 4rem;
    line-height: 4rem;
    width: 4rem;
  }
`
export const NavbarSlider = styled(FlexCenter)`
  position: absolute;
  top: 0%;
  right: 0%;
  width: 25vw;
  height: 100vh;
  z-index: 1000;
  padding: 0 1.5rem;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  background: ${props => props.theme.bg};
  border-left: 1.5px solid ${props => props.theme.font + "25"};

  ${NavbarListItem} {
    display: none;
  }

  @media (max-width: 768px) {
    min-width: 100vw;
    max-width: 100vw;

    ${NavbarListItem} {
      display: block;
      border-bottom: 0;
    }
  }
`

export const NavSliderInfo = styled(FlexCenter)`
  flex-direction: column;
  gap: 1rem;

  img {
    width: 10rem;
    height: 10rem;
    filter: ${props => (props.isDarkTheme ? "invert(1)" : "")};
  }

  h5,
  h5 > strong {
    font-size: 1.15rem;
    width: inherit;
    text-align: center;
  }

  p {
    font-size: 1rem;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavabarSliderClose = styled(CloseOutlined)`
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
`

export const NavbarVertical = styled(FlexCenter)`
  position: fixed;
  top: 5rem;
  width: 5rem;
  height: calc(100vh - 5rem);
  z-index: 10;
  padding: 1rem;
  flex-direction: column-reverse;
  justify-content: space-evenly;

  ${({ left }) =>
    left &&
    css`
      left: 0%;
      border-right: 1px solid ${props => props.theme.font + "25"};
    `}

  ${({ right }) =>
    right &&
    css`
      right: 0%;
      border-left: 1px solid ${props => props.theme.font + "25"};
    `}

  @media (max-width: 768px) {
    display: none;
  }
`
export const NavbarSocialHeading = styled.h1`
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.5mm;
  font-weight: 500;
  transform: rotate(-90deg);
  white-space: nowrap;
`
export const NavbarSocialItem = styled.a`
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.5mm;
  font-weight: 500;
  transform: rotate(-90deg);
  white-space: nowrap;
  text-decoration: none;
  transition: 0.5s all ease-in;
  color: ${props => props.theme.font};

  &:hover,
  &:focus {
    color: ${props => props.theme.active};
  }
`
export const NavbarSliderThemeIcon = styled(FlexCenter)`
  position: absolute;
  left: 0.5rem;
  top: 0%;
  padding: 0.25rem 0;
  cursor: pointer;
  width: 5rem;
  height: 5rem;

  > * {
    border-radius: 50%;
    border: 1px solid ${props => props.theme.font + "50"};
  }
`
