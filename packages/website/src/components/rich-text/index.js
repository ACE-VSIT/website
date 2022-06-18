import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const RichText = ({ richText }) => {
  return richText ? <PrismicRichText field={richText} /> : null
}

export default RichText
