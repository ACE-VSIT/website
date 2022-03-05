import * as React from "react"
import Layout from "../components/Layout/index"
import Seo from "../components/SEO"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const nav = data?.prismicLayout?.data?.body

  return (
    <Layout navbar={nav}>
      <Seo title="Home" />
    </Layout>
  )
}

export default IndexPage

export const IndexQuery = graphql`
  query indexPage {
    prismicLayout {
      ...navbarInfo
    }
  }
`
