import * as React from "react"
import Seo from "../components/SEO"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const Events = ({ data }) => {
  const nav = data?.prismicLayout?.data?.body

  return (
    <Layout navbar={nav}>
      <Seo title="Events" />
    </Layout>
  )
}

export default Events

export const ProjectQuery = graphql`
  query eventsPage {
    prismicLayout {
      ...navbarInfo
    }
  }
`
