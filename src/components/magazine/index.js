import React from "react"
import { getImage } from "gatsby-plugin-image"
import HeroSectionSlice from "./hero-section-slice/HeroSectionSlice"

export default function MagazinePage({ data }) {
  const date = data?.date
  const mainImage = getImage(data?.main_image)
  const title = data?.title?.text
  const info = data?.info?.text
  const link = data?.link?.url

  return (
    <HeroSectionSlice
      date={date}
      mainImage={mainImage}
      title={title}
      info={info}
      link={link}
    />
  )
}
