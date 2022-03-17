import React from "react"
import {
  SliderInfoWrapper,
  SliderInfoTextWrapper,
  SliderInfoHeading,
  SliderInfoPara,
  SliderImageWrapper
} from "./SideInfoImgElements"
import { GatsbyImage } from "gatsby-plugin-image"

export default function SideInfoImg({ img, title, subtitle }) {
  const imgStyles = {
    width: "100%",
    height: "100%",
    filter: "brightness(85%)"
  }

  return (
    <SliderInfoWrapper>
      {img && (
        <SliderImageWrapper>
          <GatsbyImage image={img} alt={""} style={imgStyles} />
        </SliderImageWrapper>
      )}
      <SliderInfoTextWrapper>
        {title && <SliderInfoHeading>{title}</SliderInfoHeading>}
        {subtitle && <SliderInfoPara>{subtitle}</SliderInfoPara>}
      </SliderInfoTextWrapper>
    </SliderInfoWrapper>
  )
}
