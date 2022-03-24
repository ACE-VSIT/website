import React from "react"
import {
  ProjectCardHeading,
  ProjectCardImageWrapper,
  ProjectCardInfo,
  ProjectCardTags,
  ProjectCardWrapper,
} from "./ProjectCardElements"

export default function ProjectCard() {
  return (
    <ProjectCardWrapper>
      <ProjectCardImageWrapper>
        <img
          src={`https://source.unsplash.com/random`}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "s" }}
        />
      </ProjectCardImageWrapper>
      <ProjectCardHeading>Heading Here</ProjectCardHeading>
      <ProjectCardInfo>
        Reprehenderit amet laboris irure tempor elit et veniam magna
        exercitation nulla. Velit duis est laborum reprehenderit consequat
        officia commodo qui consectetur labore. Amet nulla irure nulla non
        tempor ut dolore amet nulla id eu ipsum laboris aliquip. Id veniam
        officia commodo ea incididunt laborum consectetur in qui nostrud.
      </ProjectCardInfo>
      <ProjectCardTags>Naman Parashar</ProjectCardTags>
    </ProjectCardWrapper>
  )
}
