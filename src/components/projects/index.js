import React from "react"
import ProjectCard from "./components/ProjectCard"
import { FlexCenter, Heading } from "../../styles/sharedStyles"
import { getImage } from "gatsby-plugin-image"

export default function ProjectPage({ projectList }) {
  const cardWrapperStyles = {
    flexWrap: "wrap",
    padding: "2rem 0",
  }

  return (
    <>
      <Heading>Our Projects</Heading>
      <FlexCenter style={cardWrapperStyles}>
        {projectList.map((e, index) => {
          const content = e?.data?.content?.text
          const img = getImage(e?.data?.image)
          const title = e?.data?.title?.text
          const type = e?.data?.project_type

          return (
            <div key={index}>
              <ProjectCard
                type={type}
                content={content}
                img={img}
                title={title}
              />
            </div>
          )
        })}
      </FlexCenter>
    </>
  )
}
