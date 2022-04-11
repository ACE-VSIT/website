import React from "react"
import {
  ProjectCardHeading,
  ProjectCardImageWrapper,
  ProjectCardInfo,
  ProjectCardTags,
  ProjectCardWrapper,
} from "./ProjectCardElements"
import { GatsbyImage } from "gatsby-plugin-image"
import AnimateIn from "../../animations/AnimateIn"

export default function ProjectCard({
  type,
  content,
  img,
  title,
  link = null,
}) {
  return (
    <AnimateIn duration={500} delay={250}>
      <ProjectCardWrapper onClick={() => link && window.open(link)}>
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
    </AnimateIn>
  )
}
