import * as React from "react"
import Seo from "../components/SEO"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const Projects = ({ data }) => {
  const nav = data?.prismicLayout?.data?.body

  return (
    <Layout navbar={nav}>
      <Seo title="Project" />
    </Layout>
  )
}

export default Projects

export const ProjectQuery = graphql`
  query projectPage {
    prismicLayout {
      ...navbarInfo
    }
  }
`
