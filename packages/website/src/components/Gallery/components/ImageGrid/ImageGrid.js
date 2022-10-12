import React, { useContext } from 'react'
import ReactTooltip from 'react-tooltip'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ThemeContext } from '../../../../context/ThemeContext'
import { ImageContainer, ImageElement } from './ImageGridElements'

export default function ImageGrid ({ image, tooltip, id }) {
  const { isDarkTheme } = useContext(ThemeContext)

  return (
    <>
      <ImageContainer
        data-tip={tooltip}
        data-for={`tooltip-${id}`}
        data-place="top"
      >
        <ImageElement>
          <GatsbyImage image={image} alt={''} />
        </ImageElement>
        <ReactTooltip
          id={`tooltip-${id}`}
          type={isDarkTheme ? 'dark' : 'light'}
        />
      </ImageContainer>
    </>
  )
}
