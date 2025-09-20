import React from 'react'
import {
  ProjectCardHeading,
  ProjectCardImageWrapper,
  ProjectCardInfo,
  ProjectCardTags,
  ProjectCardWrapper
} from './ProjectCardElements'
import { GatsbyImage } from 'gatsby-plugin-image'
import AnimateIn from '../../../animations/AnimateIn'

export default function ProjectCard ({
  type,
  content,
  img,
  title,
  link = null
}) {
  
  const CardContent = (
    <ProjectCardWrapper>
      <ProjectCardImageWrapper>
        <GatsbyImage
          image={img}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          alt={title || ''}
        />
      </ProjectCardImageWrapper>
      <ProjectCardHeading>{title}</ProjectCardHeading>
      <ProjectCardInfo>{content}</ProjectCardInfo>
      <ProjectCardTags>{type}</ProjectCardTags>
    </ProjectCardWrapper>
  )

  return (
    <AnimateIn duration={500} delay={250}>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          {CardContent}
        </a>
      ) : (
        CardContent
      )}
    </AnimateIn>
  )
}
