import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/Layout/index"
import Head from '../components/achievements/achievements-table-slice/Head'
import Table from '../components/achievements/achievements-table-slice/Table'
const driverData=[
  {
    number: 44,
    name: 'Lewis Hamilton',
    team: 'Mercedes',
    country: 'United Kingdom',
    dob: '07/01/1985',
    placeOfBirth: 'Stevenage, England'
  },
  {
    number: 44,
    name: 'Lewis Hamilton',
    team: 'Mercedes',
    country: 'United Kingdom',
    dob: '07/01/1985',
    placeOfBirth: 'Stevenage, England'
  }
]
const AchievementsPage = ({data}) => {
  const nav = data?.prismicLayout?.data?.body
  return (
    <>
    <Layout navbar={nav}>
    <Head title="Dynamic" />
    <Table
      tableData={driverData}
      headingColumns={['#',"Name","Team","Country","Date of Birth","place of birth"]}
      title="F1 driver"
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
  }
`