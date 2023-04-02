import { Button } from '@ace/common'
import { Link, navigate } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import AnimateIn from '../../animations/AnimateIn'
import {
  CardDate,
  CardHeading,
  CardInfo,
  HeroCardHighlight,
  HeroSectionBg,
  HeroSectionWrapper
} from './HeroSectionSliceElements'

const HeroSectionSlice = ({ date, mainImage, title, info, link, buttonName, buttonTarget = '_blank', showButton = false }) => {
  return (
    <HeroSectionWrapper>
      <AnimateIn enableScroll={true} duration={500} delay={300}>
        <HeroSectionBg>
          {mainImage && (
            <GatsbyImage image={mainImage} alt={'HeroSectionMainImg'} />
          )}
        </HeroSectionBg>
      </AnimateIn>
      <HeroCardHighlight onClick={() => !showButton && link && window.open(link)}>
        {date && (
          <AnimateIn duration={500} delay={400}>
            <CardDate>{date}</CardDate>
          </AnimateIn>
        )}
        <Link target={'_blank'} to={link}>
          {title && (
            <AnimateIn duration={500} delay={450}>
              <CardHeading>{title}</CardHeading>
            </AnimateIn>
          )}
        </Link>
        {info && (
          <AnimateIn duration={500} delay={500}>
            <CardInfo>{info}</CardInfo>
          </AnimateIn>
        )}
       {showButton && (<Button
          onClick={() => navigate(link)}
          value={buttonName}
          target={buttonTarget}
          style={{ marginRight: 'auto' }}
          md={
            true
          } /* Passing random string to avoid `Received `true` for a non-boolean attribute `md`.` */
        />)}
      </HeroCardHighlight>
    </HeroSectionWrapper>
  )
}

export default HeroSectionSlice
