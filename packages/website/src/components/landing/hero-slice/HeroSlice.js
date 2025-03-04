import React, { useState, useEffect } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  HeroWrapper,
  HeroInfoWrapper,
  HeroTitle,
  HeroInfo,
} from './HeroElements'
// import Button from '../../button/Button'
import AnimateIn from '../../animations/AnimateIn'
import { Button } from '@ace/common'
import { navigate } from 'gatsby'

export default function HeroSection({ data }) {
  const [hero, setHero] = useState(null)

  useEffect(() => {
    const title = data?.primary?.hero_text?.text
    const subTitle = data?.primary?.hero_subtitle?.text
    const heroBtn = data?.primary?.hero_button
    const heroBtnTitle = data?.primary?.hero_button_title?.text
    const heroBtnLink = data?.primary?.hero_button_link?.url
    const heroBtnTarget = data?.primary?.hero_button_link?.target
    const imgAlt = data?.items[0]?.hero_image_alt_text?.text
    const img = getImage(data?.items[0]?.hero_image)

    setHero({
      title,
      subTitle,
      heroBtn,
      heroBtnLink,
      heroBtnTitle,
      heroBtnTarget,
      imgAlt,
      img,
    })
  }, [data])

  return (
    <>
      {hero && (
        <HeroWrapper>
          <div id={'hero-img'}>
            <GatsbyImage
              image={hero.img}
              style={{
                width: 'calc(50vw - 5rem)',
                height: 'calc(100vh - 5rem)',
                filter: 'brightness(85%)',
                position: 'absolute',
                right: '5rem',
              }}
              alt={hero?.imgAlt}
            />
          </div>
          <HeroInfoWrapper>
            <AnimateIn duration={500} delay={250}>
              {hero?.title && <HeroTitle>{hero?.title}</HeroTitle>}
            </AnimateIn>
            <AnimateIn duration={500} delay={200}>
              {hero?.subTitle && <HeroInfo>{hero?.subTitle}</HeroInfo>}
            </AnimateIn>
            {hero?.heroBtn && (
              <Button
                onClick={() => navigate(hero?.heroBtnLink)}
                value={hero?.heroBtnTitle}
                target={hero?.heroBtnTarget ?? '_self'}
                style={{ marginRight: 'auto' }}
                md={
                  true
                }
              />
            )}
            {/* <Button 
              value='HackVSIT 6.0 is Here'
              style={{ marginRight: 'auto' }}
              onClick={()=> {navigate("https://hack-vsit.tech/")}}
            /> */}
          </HeroInfoWrapper>
        </HeroWrapper>
      )}
    </>
  )
}

/* New Commit */
