import * as React from 'react'
import Seo from '../components/SEO'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProjectPage from '../components/projects'

const Projects = ({ data }) => {
  const nav = data?.prismicLayout?.data?.body
  let projList = data?.allPrismicProjects?.nodes

  return (
    <Layout navbar={nav}>
      <Seo title="Project" />
      <ProjectPage projectList={projList} />
    </Layout>
  )
}

export default Projects

export const ProjectQuery = graphql`
  query projectPage {
    prismicLayout {
      ...navbarInfo
    }
    allPrismicProjects {
      nodes {
        ...ProjectPage
      }
    }
  }
`
