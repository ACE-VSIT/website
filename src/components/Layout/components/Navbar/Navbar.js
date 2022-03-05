import React, { useState } from "react"
import {
  // NavbarBrand,
  NavbarBrandImg,
  NavbarList,
  NavbarListItem,
  NavbarSlider,
  NavbarSliderIcon,
  NavbarWrapper,
  NavbarVertical,
  NavbarSocialHeading,
  NavbarSocialItem,
} from "./NavbarElements"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Navbar({ data }) {
  const [toggleSlider, setToggleSlider] = useState(false)
  const brandImg = getImage(data[0]?.primary?.navbar_logo)
  const sliderInfo = data[0]?.primary?.navbar_slider_info.html
  const itemList = data[1]?.items
  const socialList = data[2]?.items

  return (
    <NavbarWrapper>
      {/* {brandName && !brandImg && <NavbarBrand>{brandName}</NavbarBrand>} */}
      {brandImg && (
        <NavbarBrandImg>
          <GatsbyImage image={brandImg} alt="" />
        </NavbarBrandImg>
      )}
      <NavbarList>
        {itemList &&
          itemList.map((element, key) => {
            const link = element.navbar_link.url.replace(/(^\w+:|^)\/\//, "")
            return (
              <NavbarListItem to={link} key={key}>
                {element.navbar_link_name.text}
              </NavbarListItem>
            )
          })}
      </NavbarList>
      <NavbarSliderIcon onClick={() => setToggleSlider(!toggleSlider)} />
      {toggleSlider && (
        <NavbarSlider dangerouslySetInnerHTML={{ __html: sliderInfo }} />
      )}
      <NavbarVertical left>
        <NavbarSocialHeading>{"Follow Us"}</NavbarSocialHeading>
        {socialList &&
          socialList.map((element, key) => {
            return (
              <NavbarSocialItem
                href={element.navbar_social_link.url}
                target={"_blank"}
                rel={"noreferrer"}
                key={key}
              >
                {element.navbar_social_item_name.text}
              </NavbarSocialItem>
            )
          })}
      </NavbarVertical>
      <NavbarVertical right />
    </NavbarWrapper>
  )
}
