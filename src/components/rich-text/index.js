import React from "react"
import { PrismicRichText } from "@prismicio/react"

const RichText = ({ richText }) => {
  richText ? <PrismicRichText field={richText} /> : null
}

export default RichText
