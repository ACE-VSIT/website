import React from 'react'
import {
  HeroSliceBgWrapper,
  HeroSliceHeading,
} from './HeroSliceSecondaryElements'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function HeroSliceSecondary({ image, heading }) {
  return (
    <>
      <HeroSliceBgWrapper>
        <GatsbyImage
          image={image}
          alt={heading}
          style={{ width: '100%', height: '100%' }}
        />
      </HeroSliceBgWrapper>
      <HeroSliceHeading>{heading}</HeroSliceHeading>
    </>
  )
}
