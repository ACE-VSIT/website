import React from "react"
import Event from "../components/events/index"
import Layout from "../components/Layout/index"
import Seo from "../components/SEO"
import { getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { FlexCenter, Heading } from "../styles/sharedStyles"

export default function Events({ data }) {
  const nav = data?.prismicLayout?.data?.body
  const metaTitle = data?.prismicEventpage?.data?.meta_page_title?.text
  const metaDescription = data?.prismicEventpage?.data?.meta_page_subtitle?.text
  const metaKeywords = data?.prismicEventpage?.data?.meta_keywords?.text.split(",")
  console.log(metaKeywords)
  return (
    <>
      <Layout navbar={nav}>
        <Seo
          description={metaDescription}
          meta={metaKeywords}
          title={metaTitle}
        />
        <FlexCenter>
          <Heading>Our Events</Heading>
        </FlexCenter>
        <Event data={data} />
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
