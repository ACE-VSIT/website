import React from "react"
import Event from "../components/events/index"
import Layout from "../components/Layout/index"
import Seo from "../components/SEO"
import { getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { FlexCenter, Heading } from "../styles/sharedStyles"

export default function Events({ data }) {
  const nav = data?.prismicLayout?.data?.body
  return (
    <>
      <Layout navbar={nav}>
        <Seo title={"Events"} />
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
