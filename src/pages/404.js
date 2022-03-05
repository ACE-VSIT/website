import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/index"
import Seo from "../components/SEO"
import { FlexCenter } from "../styles/sharedStyles"

const NotFoundPage = ({ data }) => {
  const nav = data?.prismicLayout?.data?.body

  return (
    <Layout navbar={nav}>
      <Seo title="404: Not found" />
      <FlexCenter style={{ height: "calc(100vh - 5rem)", textAlign: "center" }}>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </FlexCenter>
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
