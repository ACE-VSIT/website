import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useContext } from 'react'
import ReactTooltip from 'react-tooltip'
import { ThemeContext } from '../../../../context/ThemeContext'
import { ImageContainer, ImageElement } from './ImageGridElements'

export default function ImageGrid ({ image, tooltip, id, userClick, alt = '' }) {
  const { isDarkTheme } = useContext(ThemeContext)

  return (
    <>
      <ImageContainer
        data-tip={tooltip}
        data-for={`tooltip-${id}`}
        data-place="top"
      >
        <ImageElement onClick={() => userClick()}>
          <GatsbyImage image={image} alt={alt} />
        </ImageElement>
        <ReactTooltip
          id={`tooltip-${id}`}
          type={isDarkTheme ? 'dark' : 'light'}
        />
      </ImageContainer>
    </>
  )
}
