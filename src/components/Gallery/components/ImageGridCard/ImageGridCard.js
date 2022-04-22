import React, { useRef } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Close } from "../../../../styles/sharedStyles"
import { ImageElement } from "../ImageGrid/ImageGridElements"
import { ImageGridCardContainer } from "./ImageGridCardElements"
import useOutsideAlerter from "../../../../hooks/useOutsideTouch"

export default function ImageGridCard({ image, setState }) {
  const imageRef = useRef()
  useOutsideAlerter(imageRef, setState)

  return (
    <ImageGridCardContainer ref={imageRef}>
      <Close cardCloseBtn onClick={() => setState(false)} />
      <ImageElement>
        <GatsbyImage image={image} alt={""} />
      </ImageElement>
    </ImageGridCardContainer>
  )
}
