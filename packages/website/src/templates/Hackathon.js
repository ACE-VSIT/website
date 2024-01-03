import * as React from 'react'
import Layout from '../components/Layout/index'
import Seo from '../components/SEO'
import { graphql } from 'gatsby'
import GalleryPage from '../components/Gallery'

const Gallery = ({ data }) => {
  const nav = data?.prismicLayout?.data?.body
  const title = data?.prismicHackathon?.data?.title?.text
  const imgArr = data?.prismicHackathon?.data?.body[0]?.items

  return (
    <Layout navbar={nav}>
      <Seo title="Gallery" />
      <GalleryPage title={title} imgArr={imgArr} />
    </Layout>
  )
}

export default Gallery

export const GalleryQuery = graphql`
  query GalleryPage($name: String) {
    prismicLayout {
      ...navbarInfo
    }
    prismicHackathon(data: {url: {text: {eq: $name}}}) {
      data {
        body {
          ... on PrismicHackathonDataBodyGallery {
            items {
              event_title {
                text
              }
              image {
                gatsbyImageData(placeholder: BLURRED)
                url
              }
            }
          }
        }
        title {
          text
        }
      }
    }
  }
`
