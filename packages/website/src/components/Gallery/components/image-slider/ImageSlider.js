import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useReducer, useEffect } from 'react'
import { ImageElement } from '../image-grid/ImageGridElements'
import { ImageSliderContainer } from './ImageSliderElements'

// initial state
const initialState = { currentSlideIndex: 0, totalSlidesCount: 0 }

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'totalSlidesCount':
      return {
        ...state,
        totalSlidesCount: action.payload.totalSlidesCount,
        currentSlideIndex: action.payload.currentSlideIndex
      }
    default:
      throw new Error("action.type doesn't exist")
  }
}

const ImageSlider = ({ imagesArray, isOpen, imageIndex = 0 }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({
      type: 'totalSlidesCount',
      payload: {
        totalSlidesCount: imagesArray.length,
        currentSlideIndex: imageIndex
      }
    })
  }, [imagesArray, imageIndex])

  return (
    isOpen && (
      <>
        <ImageSliderContainer>
          <ImageElement>
            <GatsbyImage
              image={imagesArray[imageIndex]?.image?.gatsbyImageData}
              alt={imagesArray[state.currentSlideIndex]?.event_title?.text}
            />
          </ImageElement>
        </ImageSliderContainer>
      </>
    )
  )
}

export default ImageSlider
