import React from "react"
import ProjectCard from "./components/ProjectCard"
import { FlexCenter } from "../../styles/sharedStyles"
import { getImage } from "gatsby-plugin-image"

export default function ProjectPage({ projectList }) {
  const cardWrapperStyles = {
    flexWrap: "wrap",
    padding: "2rem 0",
  }

  return (
    <>
      <FlexCenter style={cardWrapperStyles}>
        {projectList.map((e, key) => {
          console.log(e)
          const content = e?.data?.content?.text
          const img = getImage(e?.data?.image)
          const title = e?.data?.title?.text
          const type = e?.data?.project_type

          return (
            <ProjectCard
              type={type}
              content={content}
              img={img}
              title={title}
            />
          )
        })}
      </FlexCenter>
    </>
  )
}
