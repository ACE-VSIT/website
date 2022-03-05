import React, { useState } from "react"
import {
  NavbarBrandImg,
  NavbarList,
  NavbarListItem,
  NavbarSlider,
  NavSliderInfo,
  NavbarSliderIcon,
  NavbarWrapper,
  NavbarVertical,
  NavbarSocialHeading,
  NavbarSocialItem,
  NavabrSliderClose,
} from "./NavbarElements"
import RichText from "../../../rich-text/index"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"
import { useTrail, useSpring, animated } from "react-spring"

export default function Navbar({ img, sliderInfo, itemList, socialList }) {
  const [toggleSlider, setToggleSlider] = useState(false)
  const [awaitAnimate, setAwaitAnimate] = useState(false)
  const springConfig = { mass: 5, tension: 1500, friction: 200 }
  const brandImg = getImage(img)

  const navbarSliderAnimation = useSpring({
    opacity: toggleSlider ? 1 : 0,
    transform: toggleSlider ? `translateX(0)` : `translateX(100%)`,
  })

  const toggleStyles = {
    display: toggleSlider ? "flex" : "none",
  }

  const trailVertical = useTrail(itemList?.length ?? 1, {
    springConfig,
    opacity: 1,
    x: 0,
    height: 80,
    onRest: () => setAwaitAnimate(true),
    from: { opacity: 0, x: -20, height: 0 },
  })

  const trailMobile = useTrail(itemList?.length ?? 1, {
    springConfig,
    opacity: toggleSlider ? 1 : 0,
    x: toggleSlider ? 0 : -20,
    height: toggleSlider ? 80 : 0,
    from: { opacity: 0, x: -20, height: 0 },
  })

  const trailHorizontal = useTrail(socialList?.length ?? 1, {
    springConfig,
    opacity: awaitAnimate ? 1 : 0,
    y: awaitAnimate ? 0 : -20,
    height: awaitAnimate ? 80 : 0,
    from: { opacity: 0, y: -20, height: 0 },
  })

  return (
    <NavbarWrapper>
      {brandImg && (
        <NavbarBrandImg onClick={() => navigate("/")}>
          <GatsbyImage image={brandImg} alt="" />
        </NavbarBrandImg>
      )}
      <NavbarList>
        {itemList &&
          trailVertical.map(({ x, height, ...rest }, index) => {
            const link = itemList[index].navbar_link.url.replace(
              /(^\w+:|^)\/\//,
              ""
            )
            return (
              <animated.div
                key={index}
                style={{
                  ...rest,
                  transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
                }}
              >
                <NavbarListItem to={link} style={{ height }}>
                  {itemList[index].navbar_link_name.text}
                </NavbarListItem>
              </animated.div>
            )
          })}
      </NavbarList>
      <NavbarSliderIcon onClick={() => setToggleSlider(!toggleSlider)} />
      <NavbarSlider style={toggleStyles}>
        <NavabrSliderClose onClick={() => setToggleSlider(!toggleSlider)} />
        <animated.div style={navbarSliderAnimation}>
          <NavSliderInfo>
            <RichText richText={sliderInfo} />
          </NavSliderInfo>
        </animated.div>
        {itemList &&
          trailMobile.map(({ x, height, ...rest }, index) => {
            const link = itemList[index].navbar_link.url.replace(
              /(^\w+:|^)\/\//,
              ""
            )
            return (
              <animated.div
                key={index}
                style={{
                  ...rest,
                  transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
                }}
              >
                <NavbarListItem to={link} style={{ height }}>
                  {itemList[index].navbar_link_name.text}
                </NavbarListItem>
              </animated.div>
            )
          })}
      </NavbarSlider>
      <NavbarVertical left>
        <NavbarSocialHeading>{"Follow Us"}</NavbarSocialHeading>
        {socialList &&
          trailHorizontal.map(({ y, height, ...rest }, index) => {
            return (
              <animated.div
                style={{
                  ...rest,
                  transform: y.interpolate(
                    y => `translateY(${y}px) rotate(-90deg)`
                  ),
                }}
                key={index}
              >
                <NavbarSocialItem
                  href={socialList[index].navbar_social_link.url}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ height }}
                >
                  {socialList[index].navbar_social_item_name.text}
                </NavbarSocialItem>
              </animated.div>
            )
          })}
      </NavbarVertical>
      <NavbarVertical right />
    </NavbarWrapper>
  )
}
