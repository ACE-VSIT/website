import * as React from "react"
import Layout from "../components/Layout/index"
import Seo from "../components/SEO"
import { graphql } from "gatsby"
import RichText from "../components/rich-text"
import { NonEssentialWrapper } from "../views/non-essential/NonEssentialElements"
import { Heading } from "../styles/sharedStyles"

const NonEssential = ({ data }) => {
  const nav = data?.prismicLayout?.data?.body
  const richText = data?.prismicNonEssential?.data?.page_info?.richText
  const title = data?.prismicNonEssential?.data?.page_title?.text

  return (
    <Layout navbar={nav}>
      <Seo title={title} />
      <Heading>{title}</Heading>
      <NonEssentialWrapper>
        <RichText richText={richText} />
      </NonEssentialWrapper>
    </Layout>
  )
}

export default NonEssential

export const NonEssentialQuery = graphql`
  query NonEssentialPage($name: String) {
    prismicLayout {
      ...navbarInfo
    }
    prismicNonEssential(data: { page_title: { text: { eq: $name } } }) {
      data {
        page_title {
          text
        }
        page_info {
          richText
        }
      }
    }
  }
`
