import styled, { css } from "styled-components"
import AlignRightOutlined from "@ant-design/icons/AlignRightOutlined"
import { FlexCenter } from "../../../../styles/sharedStyles"
import { Link } from "gatsby"

export const NavbarWrapper = styled(FlexCenter)`
  justify-content: space-between;
  height: 5rem;
  overflow: visible;
  border-bottom: 1px solid ${props => props.theme.font + "25"};

  * {
    overflow: visible;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
export const NavbarBrand = styled.div`
  font-weight: 800;
  cursor: pointer;
  font-size: 1.75rem;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s all ease-in-out;
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
  border-right: 1px solid ${props => props.theme.font + "25"};

  &:hover,
  &:focus {
    color: ${props => props.theme.active};
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
`
export const NavbarList = styled(FlexCenter)`
  gap: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`
export const NavbarListItem = styled(Link)`
  cursor: pointer;
  margin-bottom: -1px;
  font-size: 1.05rem;
  letter-spacing: -0.1mm;
  border: 1px solid transparent;
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

  &:hover,
  &:focus {
    color: ${props => props.theme.active};
    border-bottom: 1.5px solid ${props => props.theme.font};
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
`
export const NavbarSlider = styled.section`
  position: absolute;
  top: 5rem;
  right: 0%;
  max-width: 25vw;
  height: calc(100vh - 5rem);
  z-index: 1000;
  padding: 1rem;
  overflow: hidden;
  text-align: right;
  background: ${props => props.theme.bg};
  border-left: 1.5px solid ${props => props.theme.font + "50"};

  * {
    text-align: right:
  }
`
export const NavbarVertical = styled(FlexCenter)`
  position: absolute;
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
  transition: .5s all ease-in;
  color: ${props => props.theme.font};

  &:hover,
  &:focus {
    color: ${props => props.theme.active};
  }
`
