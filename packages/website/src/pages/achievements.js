import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/SEO"
import Layout from "../components/Layout/index"
import Table from "../components/achievements/achievements-table-slice/Table"
import { getImage } from "gatsby-plugin-image"
import HeroSliceSecondary from "../components/hero-slice-secondary/HeroSliceSecondary"

const AchievementsPage = ({ data }) => {
  const nav = data?.prismicLayout?.data?.body

  // Data to be shown in table
  const achievementsData =
    data?.prismicAchievements?.data?.body?.[0].items.sort(function (a, b) {
      return parseInt(b.event_date) - parseInt(a.event_date)
    })

  /* achievementsData.map(({winner_name,college_name})=>{
    console.log(winner_name.document.data.member_name.text)
  }) */

  // const heroImage = getImage(data?.prismicAchievements?.data?.hero_image)
  const heroTitle = data?.prismicAchievements?.data?.title?.text
  const image = getImage(data?.prismicAchievements?.data?.hero_image)

  return (
    <>
      <Layout navbar={nav}>
        <Seo title={heroTitle} />
        {/* <Head title={heroTitle} /> */}
        <HeroSliceSecondary heading={heroTitle} image={image} />
        <Table
          tableData={achievementsData}
          // title="F1 driver"
        />
      </Layout>
    </>
  )
}

export default AchievementsPage
export const AchievementsQuery = graphql`
  query AchievementsPage {
    prismicLayout {
      ...navbarInfo
    }
    prismicAchievements {
      ...achievementsPage
    }
  }
`
