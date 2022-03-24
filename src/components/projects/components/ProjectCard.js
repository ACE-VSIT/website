import React from "react"
import {
  ProjectCardHeading,
  ProjectCardImageWrapper,
  ProjectCardInfo,
  ProjectCardTags,
  ProjectCardWrapper,
} from "./ProjectCardElements"
import { GatsbyImage } from "gatsby-plugin-image"

export default function ProjectCard({ type, content, img, title }) {
  return (
    <ProjectCardWrapper>
      <ProjectCardImageWrapper>
        <GatsbyImage
          image={img}
          style={{ width: "100%", height: "100%", objectFit: "s" }}
          alt={""}
        />
      </ProjectCardImageWrapper>
      <ProjectCardHeading>{title}</ProjectCardHeading>
      <ProjectCardInfo>{content}</ProjectCardInfo>
      <ProjectCardTags>{type}</ProjectCardTags>
    </ProjectCardWrapper>
  )
}
