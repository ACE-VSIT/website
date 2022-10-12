import React from 'react'
import Event from '../components/events/index'
import Layout from '../components/Layout/index'
import Seo from '../components/SEO'
import { getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { FlexCenter } from '../styles/sharedStyles'
import HeroSliceSecondary from '../components/hero-slice-secondary/HeroSliceSecondary'

export default function Events ({ data }) {
  // console.log(data)
  const nav = data?.prismicLayout?.data?.body
  const metaTitle = data?.prismicEventpage?.data?.meta_page_title?.text
  const metaDescription = data?.prismicEventpage?.data?.meta_page_subtitle?.text
  const metaKeywords =
    data?.prismicEventpage?.data?.meta_keywords?.text.split(',')
  const image = getImage(data?.prismicEventpage?.data?.background_image)
  // console.log(image)
  // console.log(metaKeywords)
  return (
    <>
      <Layout navbar={nav}>
        <Seo
          description={metaDescription}
          meta={metaKeywords}
          title={metaTitle}
        />
        <HeroSliceSecondary heading={'Our Events'} image={image} />
        <FlexCenter>
          {/* <Heading>Our Events</Heading> */}
          <Event data={data} />
        </FlexCenter>
      </Layout>
    </>
  )
}

export const eventInfo = graphql`
  query eventInfo {
    prismicLayout {
      ...navbarInfo
    }
    prismicEventpage {
      ...EventPage
    }
    allPrismicEventitem {
      edges {
        node {
          ...allEventitem
        }
      }
    }
  }
`
