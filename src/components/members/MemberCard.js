import React from "react"
import {
  MemberCardWrapper,
  MemberImageWrapper,
  MemberName,
  MemberTitle,
} from "./MemberCardElements"
import { GatsbyImage } from "gatsby-plugin-image"

export default function MemberCard({ name, title, img }) {
  return (
    <MemberCardWrapper>
      <MemberImageWrapper>
        <GatsbyImage image={img} alt={""} />
      </MemberImageWrapper>
      {name && <MemberName>{name}</MemberName>}
      {title && <MemberTitle>{title}</MemberTitle>}
    </MemberCardWrapper>
  )
}
