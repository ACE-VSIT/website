import * as React from "react"
import Layout from "../components/Layout/index"
import Seo from "../components/SEO"
import { graphql } from "gatsby"
import MembersPage from "../components/members"

const members = ({ data }) => {
  const nav = data?.prismicLayout?.data?.body

  return (
    <Layout navbar={nav}>
      <Seo title="Members" />
      <MembersPage data={data} />
    </Layout>
  )
}

export default members

export const IndexQuery = graphql`
  query members {
    prismicLayout {
      ...navbarInfo
    }
    allPrismicMembers {
      nodes {
        ...memberInfo
      }
    }
  }
`
