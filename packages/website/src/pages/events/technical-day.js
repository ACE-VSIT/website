import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/Layout/index'
import MagazinePage from '../../components/magazine'
import Seo from '../../components/SEO'

const TechnicalDay = ({ data }) => {
  const nav = data?.prismicLayout?.data?.body

  return (
    <Layout navbar={nav}>
      <Seo title="Technical Day" />
      <MagazinePage data={data?.prismicMagazine?.data} />
    </Layout>
  )
}

export default TechnicalDay

export const TechnicalDayQuery = graphql`
  query technicalDayPage {
    prismicLayout {
      ...navbarInfo
    }
    prismicMagazine {
      ...magazineInfo
    }
  }
`
