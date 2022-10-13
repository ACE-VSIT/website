import React from 'react'
import {
  SliderInfoWrapper,
  SliderInfoTextWrapper,
  SliderInfoHeading,
  SliderInfoPara,
  SliderImageWrapper
} from './SideInfoImgElements'
import { GatsbyImage } from 'gatsby-plugin-image'
import AnimateIn from '../../animations/AnimateIn'

export default function SideInfoImg ({ img, title, subtitle }) {
  const imgStyles = {
    width: '100%',
    height: '100%',
    filter: 'brightness(85%)'
  }

  return (
    <SliderInfoWrapper>
      {img && (
        <SliderImageWrapper>
          <GatsbyImage image={img} alt={''} style={imgStyles} />
        </SliderImageWrapper>
      )}
      <SliderInfoTextWrapper>
        <AnimateIn duration={500} delay={250}>
          {title && <SliderInfoHeading>{title}</SliderInfoHeading>}
        </AnimateIn>
        <AnimateIn duration={500} delay={250}>
          {subtitle && <SliderInfoPara>{subtitle}</SliderInfoPara>}
        </AnimateIn>
      </SliderInfoTextWrapper>
    </SliderInfoWrapper>
  )
}
