import * as React from "react"
import Layout from "../components/Layout/index"
import Seo from "../components/SEO"
import { graphql } from "gatsby"
import GalleryPage from "../components/Gallery"

const Gallery = ({ data }) => {
  const nav = data?.prismicLayout?.data?.body
  const title = data?.prismicGallery?.data?.title?.text
  const subTitle = data?.prismicGallery?.data?.subtitle?.text
  const imgArr = data?.prismicGallery?.data?.body[0]?.items

  return (
    <Layout navbar={nav}>
      <Seo title="Gallery" />
      <GalleryPage title={title} subTitle={subTitle} imgArr={imgArr} />
    </Layout>
  )
}

export default Gallery

export const GalleryQuery = graphql`
  query galleryPage {
    prismicLayout {
      ...navbarInfo
    }
    prismicGallery {
      data {
        title {
          text
        }
        subtitle {
          text
        }
        body {
          ... on PrismicGalleryDataBodyGallery {
            items {
              event_date(formatString: "DD-MM-YYYY")
              event_info {
                text
              }
              event_title {
                text
              }
              image {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`
