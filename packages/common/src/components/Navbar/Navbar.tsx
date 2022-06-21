import React, { useState, useRef } from 'react'
import {
  NavbarBrandImg,
  NavbarList,
  NavbarListItem,
  NavbarSlider,
  NavbarSliderIcon,
  NavbarWrapper,
} from './NavbarElements'
import { useNavigate } from 'react-router-dom'
import { FlexCenter } from '../shared/sharedStyles'
import { INavbar } from '../../interfaces/INavbar'
import useIsMobile from '../../hooks/useIsMobile'

const Navbar: React.FC<INavbar> = ({ img, itemList }) => {
  const [toggleSlider, setToggleSlider] = useState(false)
  const sliderRef = useRef()
  const isMobile = useIsMobile()
  const navigate = useNavigate()

  const closeBtnStyles = {
    width: '5rem',
    height: '5rem',
    filter: 'opacity(0.75)',
    cursor: 'pointer',
    zIndex: 1005,
  }

  const toggleStyles = {
    display: toggleSlider ? 'flex' : 'none',
  }

  return (
    <NavbarWrapper>
      {img && (
        <NavbarBrandImg onClick={() => navigate('/')}>
          <img src={img} alt={img} width={50} height={50} />
        </NavbarBrandImg>
      )}
      <NavbarList>
        {itemList &&
          itemList.map((e, index) => {
            return (
              <div key={index}>
                <NavbarListItem href={e?.url} target={e?.target}>
                  {e.text}
                </NavbarListItem>
              </div>
            )
          })}
      </NavbarList>
      {isMobile && (
        <>
          {!toggleSlider ? (
            <NavbarSliderIcon onClick={() => setToggleSlider(!toggleSlider)} />
          ) : (
            <FlexCenter
              style={closeBtnStyles}
              onClick={() => setToggleSlider(!toggleSlider)}
            >
              <img
                src={'/assets/imgs/close.svg'}
                alt="Close"
                width={20}
                height={20}
              />
            </FlexCenter>
          )}
        </>
      )}
      <NavbarSlider ref={sliderRef.current} style={toggleStyles}>
        {itemList &&
          itemList.map((e, index) => {
            return (
              <div key={index}>
                <NavbarListItem href={e?.url} target={e?.target}>
                  {e.text}
                </NavbarListItem>
              </div>
            )
          })}
      </NavbarSlider>
    </NavbarWrapper>
  )
}

export default Navbar
