import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/SEO"
import Layout from "../components/Layout/index"
import Head from "../components/achievements/achievements-table-slice/Head"
import Table from "../components/achievements/achievements-table-slice/Table"
import { getImage } from "gatsby-plugin-image"
import HeroSliceSecondary from "../components/hero-slice-secondary/HeroSliceSecondary"
import { FlexCenter } from "../styles/sharedStyles"

const driverData = [
  {
    number: 44,
    name: "Lewis Hamilton",
    team: "Mercedes",
    country: "United Kingdom",
    dob: "07/01/1985",
    placeOfBirth: "Stevenage, England",
  },
  {
    number: 44,
    name: "Lewis Hamilton",
    team: "Mercedes",
    country: "United Kingdom",
    dob: "07/01/1985",
    placeOfBirth: "Stevenage, England",
  },
]
const AchievementsPage = ({ data }) => {
  const nav = data?.prismicLayout?.data?.body

  // Data to be shown in table
  const achievementsData = data?.prismicAchievements?.data?.body

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
          headingColumns={[
            "Date",
            "Winner Name",
            "Position",
            "Event Name",
            "College Name",
          ]}
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
