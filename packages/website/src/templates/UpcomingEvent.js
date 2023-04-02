import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/Layout/index'
import MagazinePage from '../components/magazine'
import Seo from '../components/SEO'

const UpcomingEvent = ({ data }) => {
  const nav = data?.prismicLayout?.data?.body
  console.log(data?.prismicUpcomingEventPage?.data)
  return (
    <Layout navbar={nav}>
      <Seo title="Technical Day" />
      <MagazinePage data={data?.prismicUpcomingEventPage?.data} />
    </Layout>
  )
}

export default UpcomingEvent

export const UpcomingEventQuery = graphql`
  query UpcomingEventPage($name: String) {
    prismicLayout {
      ...navbarInfo
    }
    prismicUpcomingEventPage(data: {title: {text: {eq: $name}}}) {
      data {
        title {
          text
        }
        link: registration_link {
          url
        }
        main_image: hero_section_image {
          gatsbyImageData(placeholder: BLURRED)
        }
        info {
          text
        }
        date(formatString: "DD / MM / YYYY")
        body1: body {
          ... on PrismicUpcomingEventPageDataBodyMagazineCard {
            items {
              magazine_image {
                gatsbyImageData(placeholder: BLURRED)
              }
              magazine_info {
                text
              }
              magazine_title {
                text
              }
              release_date(formatString: "DD / MM / YYYY")
              magazine_link {
                url
              }
            }
          } 
        }
      }
    }
  }
`
