import React from "react"
import ProjectCard from "./components/ProjectCard"
import { FlexCenter } from "../../styles/sharedStyles"

export default function ProjectPage() {
  const check = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const cardWrapperStyles = {
    flexWrap: "wrap",
    padding: "2rem 0",
  }

  return (
    <>
      <FlexCenter style={cardWrapperStyles}>
        {check.map(() => {
          return <ProjectCard />
        })}
      </FlexCenter>
    </>
  )
}
