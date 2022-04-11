import * as React from "react"
import Layout from "../components/Layout/index"
import Seo from "../components/SEO"
import { graphql } from "gatsby"
import MagazinePage from "../components/magazine"

const Magazine = ({ data }) => {
  const nav = data?.prismicLayout?.data?.body

  return (
    <Layout navbar={nav}>
      <Seo title="Magazine" />
      <MagazinePage data={data?.prismicMagazine?.data} />
    </Layout>
  )
}

export default Magazine

export const MagazineQuery = graphql`
  query magazinePage {
    prismicLayout {
      ...navbarInfo
    }
    prismicMagazine {
      ...magazineInfo
    }
  }
`
