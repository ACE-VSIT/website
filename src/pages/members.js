import * as React from "react"
import Layout from "../components/Layout/index"
import Seo from "../components/SEO"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import MemberCard from "../components/members/MemberCard"
import { FlexCenter, Heading } from "../styles/sharedStyles"

const MembersPage = ({ data }) => {
  const nav = data?.prismicLayout?.data?.body

  return (
    <Layout navbar={nav}>
      <Seo title="Members" />
      <FlexCenter>
        <Heading>Our Members</Heading>
      </FlexCenter>
      <FlexCenter style={{ flexWrap: "wrap" }}>
        {data.allPrismicMembers.nodes.map((e, key) => {
          const img = getImage(e.data.member_image)
          // Filters all key values which matches "link" and stores it in socialLinksI
          const socialLinks = Object.keys(e.data)
            .filter(links => links.includes("link"))
            .reduce((obj, key) => {
              obj[key] = e.data[key]
              return obj
            }, {})

          return (
            <div key={key}>
              <MemberCard
                img={img}
                name={e.data.member_name.text}
                title={e.data.member_position.text}
                social={socialLinks}
                info={e.data.about_member.text}
                joiningYear={e.data.joining_year}
              />
            </div>
          )
        })}
      </FlexCenter>
    </Layout>
  )
}

export default MembersPage

export const IndexQuery = graphql`
  query membersPage {
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
