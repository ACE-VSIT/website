import React, { useState, useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  HeroWrapper,
  HeroInfoWrapper,
  HeroTitle,
  HeroInfo,
} from "./HeroElements"
import Button from "../../button/Button"

export default function HeroSection({ data }) {
  const [hero, setHero] = useState(null)

  useEffect(() => {
    const title = data?.primary?.hero_text?.text
    const subTitle = data?.primary?.hero_subtitle?.text
    const heroBtn = data?.primary?.hero_button
    const heroBtnLink = data?.primary?.hero_button_link?.url
    const imgAlt = data?.items[0]?.hero_image_alt_text?.text
    const img = getImage(data?.items[0]?.hero_image)

    setHero({ title, subTitle, heroBtn, heroBtnLink, imgAlt, img })
  }, [data])

  return (
    <>
      {hero && (
        <HeroWrapper>
          <div id={"hero-img"}>
            <GatsbyImage
              image={hero.img}
              style={{
                width: "calc(50vw - 5rem)",
                height: "calc(100vh - 5rem)",
                filter: "brightness(85%)",
                position: "absolute",
                right: "5rem",
              }}
              alt={hero?.imgAlt}
            />
          </div>
          <HeroInfoWrapper>
            {hero?.title && <HeroTitle>Where Imagination Meets Innovation</HeroTitle>}
            {hero?.subTitle && (
              <HeroInfo>
                ACE - Association of Computer Enthusiasts is the Technical
                Society of VSIT, Vivekananda Institute of Professional Studies
              </HeroInfo>
            )}
            {hero?.heroBtn && (
              <Button
                to={hero?.heroBtnLink}
                value={"Know More"}
                style={{ marginRight: "auto" }}
                md={
                  "md"
                } /* Passing random string to avoid `Received `true` for a non-boolean attribute `md`.` */
              />
            )}
          </HeroInfoWrapper>
        </HeroWrapper>
      )}
    </>
  )
}
