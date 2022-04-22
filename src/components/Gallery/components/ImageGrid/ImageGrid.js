import React, { useState, useRef } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
// import ImageGridCard from "../ImageGridCard/ImageGridCard"
import { ImageContainer, ImageElement } from "./ImageGridElements"
import useOutsideAlerter from "../../../../hooks/useOutsideTouch"

export default function ImageGrid({ image }) {
  // const [open, setOpen] = useState(false)
  // const imageRef = useRef()
  // useOutsideAlerter(imageRef, setOpen)

  return (
    <>
      <ImageContainer /**ref={imageRef} onClick={() => setOpen(true)} open={open} */ >
        <ImageElement>
          <GatsbyImage image={image} alt={""} />
        </ImageElement>
      </ImageContainer>
    </>
  )
}
