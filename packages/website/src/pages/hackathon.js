import { graphql, navigate } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import ImageGrid from '../components/Gallery/components/image-grid/ImageGrid'
import Layout from '../components/Layout/index'
import Seo from '../components/SEO'
import AnimateIn from '../components/animations/AnimateIn'
import { CenterText, FlexCenter, Heading } from '../styles/sharedStyles'

const Gallery = ({ data }) => {
  const nav = data?.prismicLayout?.data?.body
  const hackathon = data?.allPrismicHackathon?.nodes.reverse()
  return (
    <Layout navbar={nav}>
      <Seo title="Hackathon" />
      <Heading>Hackathons</Heading>
      <FlexCenter
        style={{
          flexWrap: 'wrap',
          gap: '2rem',
          marginTop: '2rem',
          width: '80vw'
        }}
      >
        {hackathon.map((e, index) => {
          const image = getImage(e?.data?.cover_image)
          console.log(image)
          const tooltip = e?.data?.title?.text
          const url = e?.data?.url?.text
          const alt = e?.data?.cover_image?.alt
          return (
            <AnimateIn
              key={tooltip + index}
            >
              <ImageGrid
                id={index}
                key={index}
                image={image}
                tooltip={tooltip}
                alt={alt}
                userClick={() => navigate(url) }
              />
              <CenterText>{tooltip}</CenterText>
            </AnimateIn>
          )
        })}
      </FlexCenter>
    </Layout>
  )
}

export default Gallery

export const GalleryQuery = graphql`
  query galleryPage {
    prismicLayout {
      ...navbarInfo
    }
      allPrismicHackathon {
        nodes {
          data {
            cover_image {
              gatsbyImageData(placeholder: BLURRED)
              alt
            }
            title {
              text
            }
            url {
              text
            }
          }
        }
      }
  }
    
`
