import * as React from "react"
import Layout from "../components/Layout/index"
import Seo from "../components/SEO"
import { graphql } from "gatsby"
import PortalForm from "../components/portal"

const PortalPage = ({ data }) => {
  const nav = data?.prismicLayout?.data?.body

  return (
    <Layout navbar={nav}>
      <Seo title="Home" />
      <PortalForm />
    </Layout>
  )
}

export default PortalPage

export const PortalQuery = graphql`
  query portalPage {
    prismicLayout {
      ...navbarInfo
    }
  }
`
