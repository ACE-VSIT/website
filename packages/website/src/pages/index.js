import * as React from 'react'
import Layout from '../components/Layout/index'
import Seo from '../components/SEO'
import { graphql } from 'gatsby'
import HomePage from '../components/landing/index'

const IndexPage = ({ data }) => {
  const nav = data?.prismicLayout?.data?.body

  return (
    <Layout navbar={nav}>
      <Seo title="Home" />
      <HomePage data={data} />
    </Layout>
  )
}

export default IndexPage

export const IndexQuery = graphql`
  query indexPage {
    prismicLayout {
      ...navbarInfo
    }
    prismicHomepage {
      ...landingInfo
    }
    allPrismicMembers(filter: { data: { is_core: { eq: true } } }) {
      nodes {
        ...memberInfo
      }
    }
  }
`
