import React from "react"
import {
  CardDate,
  CardHeading,
  CardInfo,
  HeroCardHighlight,
  HeroSectionBg,
  HeroSectionWrapper,
} from "./HeroSectionSliceElements"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import AnimateIn from "../../animations/AnimateIn"

const HeroSectionSlice = ({ date, mainImage, title, info, link }) => {
  return (
    <HeroSectionWrapper>
      <AnimateIn enableScroll={true} duration={500} delay={650}>
        <HeroSectionBg>
          {mainImage && (
            <GatsbyImage image={mainImage} alt={"HeroSectionMainImg"} />
          )}
        </HeroSectionBg>
      </AnimateIn>
      <HeroCardHighlight onClick={() => link && window.open(link)}>
        {date && (
          <AnimateIn duration={500} delay={850}>
            <CardDate>{date}</CardDate>
          </AnimateIn>
        )}
        <Link target={"_blank"} to={link}>
          {title && (
            <AnimateIn duration={500} delay={950}>
              <CardHeading>{title}</CardHeading>
            </AnimateIn>
          )}
        </Link>
        {info && (
          <AnimateIn duration={500} delay={1000}>
            <CardInfo>{info}</CardInfo>
          </AnimateIn>
        )}
      </HeroCardHighlight>
    </HeroSectionWrapper>
  )
}

export default HeroSectionSlice
