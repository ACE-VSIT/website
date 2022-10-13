import React, { useRef } from 'react'
import { FlexCenter, Heading } from '../../styles/sharedStyles'
import ImageGrid from './components/image-grid/ImageGrid'
import AnimateIn from '../animations/AnimateIn'
import { getImage } from 'gatsby-plugin-image'
import ImageSlider from './components/image-slider/ImageSlider'
import { useOutsideAlerter } from '@ace/common'

export default function GalleryPage ({ title, subTitle, imgArr }) {
  const [isSliderOpen, setIsSliderOpen] = React.useState(false)
  const [imageIndex, setImageIndex] = React.useState(0)
  const imageSliderRef = useRef()

  useOutsideAlerter(isSliderOpen && imageSliderRef, setIsSliderOpen)

  return (
    <>
      <Heading>{title}</Heading>
      <div ref={imageSliderRef}>
        <ImageSlider
          imagesArray={imgArr}
          isOpen={isSliderOpen}
          imageIndex={imageIndex}
        />
      </div>
      <FlexCenter
        style={{
          flexWrap: 'wrap',
          gap: '2rem',
          width: '80vw'
        }}
      >
        {imgArr.map((e, index) => {
          const image = getImage(e?.image)
          const tooltip = e?.event_title?.text
          return (
            <AnimateIn
              key={tooltip + index}
              onClick={() => setImageIndex(index)}
            >
              <ImageGrid
                id={index}
                key={index}
                image={image}
                tooltip={tooltip}
                userClick={() => setIsSliderOpen(!isSliderOpen)}
              />
            </AnimateIn>
          )
        })}
      </FlexCenter>
    </>
  )
}
