import { getImage } from 'gatsby-plugin-image'
import React from 'react'
import { Heading } from '../../styles/sharedStyles'
import ProjectCard from '../projects/components/ProjectCard/ProjectCard'
import { CardWrapper, Wrapper } from './Elements'
import HeroSectionSlice from './hero-section-slice/HeroSectionSlice'

export default function MagazinePage ({ data }) {
  const date = data?.date
  const link = data?.link?.url
  const info = data?.info?.text
  const title = data?.title?.text
  const showButton = data?.show_button
  const buttonTarget = data?.button_target
  const buttonName = data?.button_name?.text
  const mainImage = getImage(data?.main_image)
  const listTitle = data?.list_title?.text ?? ''

  return (
    <>
      <HeroSectionSlice
        date={date}
        link={link}
        info={info}
        title={title}
        mainImage={mainImage}
        buttonName={buttonName}
        showButton={showButton}
        buttonTarget={buttonTarget}
      />
      <Wrapper>
        <Heading>{listTitle}</Heading>
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
