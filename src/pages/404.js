import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/index"
import Seo from "../components/SEO"
import NotFound from "../components/404"

const NotFoundPage = ({ data }) => {
  const nav = data?.prismicLayout?.data?.body

  return (
    <Layout navbar={nav}>
      <Seo title="404: Not found" />
      <NotFound />
    </Layout>
  )
}

export default NotFoundPage

export const NotFoundQuery = graphql`
  query notFoundPage {
    prismicLayout {
      ...navbarInfo
    }
  }
`
