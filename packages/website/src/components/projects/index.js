import React, { useState, useEffect } from 'react'
import ProjectCard from './components/ProjectCard/ProjectCard'
import { FlexCenter, Heading } from '../../styles/sharedStyles'
import { getImage } from 'gatsby-plugin-image'
import ProjectFilter from './components/ProjectFilter'

export default function ProjectPage ({ projectList }) {
  const [active, setActive] = useState(null)
  const [list, setList] = useState(projectList)

  useEffect(() => {
    if (active) {
      if (active === 'Default') {
        setList(projectList)
      } else {
        setList(projectList.filter(e => e?.data?.project_type === active))
      }
    }
  }, [active, projectList])

  const cardWrapperStyles = {
    flexWrap: 'wrap',
    padding: '2rem 0'
  }

  return (
    <>
      <Heading>Our Projects</Heading>
      <ProjectFilter
        categories={[
          'Default',
          'Web Development',
          'AR/VR Development',
          'App Development',
          'Graphics Designing',
          'Data Science',
          'Security'
        ]}
        setState={e => setActive(e)}
      />
      <FlexCenter style={cardWrapperStyles}>
        {list.length !== 0 ? (
          list.map((e, index) => {
            const content = e?.data?.content?.text
            const img = getImage(e?.data?.image)
            const title = e?.data?.title?.text
            const type = e?.data?.project_type
            const link = e?.data?.source_link?.url || null
          
            return (
              <div key={index}>
                <ProjectCard
                  type={type}
                  content={content}
                  img={img}
                  title={title}
                  link={link} 
                />
              </div>
            )
          })
        ) : (
          <div>No Results...</div>
        )}
      </FlexCenter>
    </>
  )
}
