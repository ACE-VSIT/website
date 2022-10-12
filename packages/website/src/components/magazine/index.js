import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import ProjectCard from '../projects/components/ProjectCard/ProjectCard'
import HeroSectionSlice from './hero-section-slice/HeroSectionSlice'
import { CardWrapper, Wrapper } from './Elements'
import { Heading } from '../../styles/sharedStyles'

export default function MagazinePage ({ data }) {
  const date = data?.date
  const mainImage = getImage(data?.main_image)
  const title = data?.title?.text
  const info = data?.info?.text
  const link = data?.link?.url

  return (
    <>
      <HeroSectionSlice
        date={date}
        mainImage={mainImage}
        title={title}
        info={info}
        link={link}
      />
      <Wrapper>
        <Heading>Previous Magazines</Heading>
        <CardWrapper>
          {data?.body1[0]?.items?.map((e, index) => {
            const magazineImage = getImage(e?.magazine_image)
            const title = e?.magazine_title?.text
            const info = e?.magazine_info?.text
            const releaseDate = e?.release_date
            const link = e?.magazine_link?.url

            return (
              <ProjectCard
                type={releaseDate}
                content={info}
                img={magazineImage}
                title={title}
                link={link}
                key={title + index}
              />
            )
          })}
        </CardWrapper>
      </Wrapper>
    </>
  )
}
