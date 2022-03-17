import * as React from "react"
import { getImage } from "gatsby-plugin-image"
import MemberCard from "./members-card/MemberCard"
import { FlexCenter, Heading } from "../../styles/sharedStyles"
import MembersSort from "./members-sort/MembersSort"

export default function MembersPage({ data }) {
  const [members, setMembers] = React.useState([])
  const [year, setYear] = React.useState(null)

  // This is not the best approach, will think of something later
  const resetSort = React.useCallback(() => {
    const coreMembers = data.allPrismicMembers.nodes.filter(e =>
      e.data.member_position.text.includes("Core")
    )
    const heads = data.allPrismicMembers.nodes.filter(e =>
      e.data.member_position.text.includes("Head")
    )
    const presidents = data.allPrismicMembers.nodes
      .filter(e => e.data.member_position.text.includes("President"))
      .reverse()

    if (presidents.length > 0 && heads.length > 0 && coreMembers.length > 0) {
      const member = data.allPrismicMembers.nodes.filter(
        e => e.data.member_position.text === "Member"
      )
      const combineAll = presidents.concat(heads, coreMembers, member)
      setMembers(combineAll)
    }
  }, [data.allPrismicMembers.nodes])

  React.useEffect(() => {
    if (year !== "Select Year") {
      const filterYear = data.allPrismicMembers.nodes.filter(
        e => parseInt(e.data.joining_year) === parseInt(year)
      )
      const presidents = filterYear
        .filter(e => e.data.member_position.text.includes("President"))
        .reverse()
      const coreMembers = filterYear.filter(e =>
        e.data.member_position.text.includes("Core")
      )
      const heads = filterYear.filter(e =>
        e.data.member_position.text.includes("Head")
      )
      const member = filterYear.filter(
        e => e.data.member_position.text === "Member"
      )
      const combineAll = presidents.concat(heads, coreMembers, member)

      setMembers(combineAll)
    } else {
      resetSort()
    }
  }, [year, data.allPrismicMembers.nodes, resetSort])

  React.useEffect(() => {
    resetSort()
  }, [data.allPrismicMembers.nodes, resetSort])

  return (
    <>
      <FlexCenter>
        <Heading>Our Members</Heading>
      </FlexCenter>
      <MembersSort startingYear={2017} setYear={e => setYear(e)} />
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
    </>
  )
}
