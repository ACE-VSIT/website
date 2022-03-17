import * as React from "react"
import Layout from "../components/Layout/index"
import Seo from "../components/SEO"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import MemberCard from "../components/members/MemberCard"
import { FlexCenter, Heading } from "../styles/sharedStyles"

const MembersPage = ({ data }) => {
  const nav = data?.prismicLayout?.data?.body
  const [presidents, setPresidents] = React.useState([])
  const [heads, setHeads] = React.useState([])
  const [coreMembers, setCoreMembers] = React.useState([])
  const [members, setMembers] = React.useState([])

  //Not the best way, but just trying to make it work as needed
  React.useEffect(() => {
    setPresidents([
      data.allPrismicMembers.nodes
        .filter(e => e.data.member_position.text.includes("President"))
        .reverse(),
    ])
    setHeads([
      data.allPrismicMembers.nodes.filter(e =>
        e.data.member_position.text.includes("Head")
      ),
    ])
    setCoreMembers([
      data.allPrismicMembers.nodes.filter(e =>
        e.data.member_position.text.includes("Core")
      ),
    ])
  }, [data.allPrismicMembers.nodes])

  React.useEffect(() => {
    if (presidents.length > 0 && heads.length > 0 && coreMembers.length > 0) {
      const member = data.allPrismicMembers.nodes.filter(e =>
        e.data.member_position.text === "Member"
      )
      const combineAll = presidents[0].concat(
        heads[0],
        coreMembers[0],
        member
      )
      setMembers(combineAll)
    }
  }, [presidents, heads, coreMembers, data.allPrismicMembers.nodes])

  return (
    <Layout navbar={nav}>
      <Seo title="Members" />
      <FlexCenter>
        <Heading>Our Members</Heading>
      </FlexCenter>
      <FlexCenter style={{ flexWrap: "wrap" }}>
        {members?.map((e, key) => {
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
