import * as React from "react"
import Layout from "../components/Layout/index"
import Seo from "../components/SEO"
import { graphql } from "gatsby"

const MagazinePage = ({ data }) => {
  const nav = data?.prismicLayout?.data?.body

  return (
    <Layout navbar={nav}>
      <Seo title="Magazine" />
      <div>Magazine</div>
    </Layout>
  )
}

export default MagazinePage

export const MagazineQuery = graphql`
  query magazinePage {
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
