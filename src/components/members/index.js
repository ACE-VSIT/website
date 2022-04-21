import * as React from "react"
import { getImage } from "gatsby-plugin-image"
import MemberCard from "./members-card/MemberCard"
import { FlexCenter, Heading } from "../../styles/sharedStyles"
import MembersSort from "./members-sort/MembersSort"
import Loading from "../animations/Loading"

export default function MembersPage({ data }) {
  const [members, setMembers] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [year, setYear] = React.useState(2022)

  // This is not the best approach, will think of something later
  const filterMembers = React.useCallback(
    year => {
      const filterYear = data.allPrismicMembers.nodes.filter(
        e =>
          parseInt(e.data.joining_year) <= parseInt(year) &&
          parseInt(e.data.ending_year) >= parseInt(year)
      )
      const dean = filterYear.filter(e =>
        e.data.member_position.text.includes("Dean")
      )
      const faculty = filterYear.filter(e =>
        e.data.member_position.text.includes("Faculty")
      )
      const presidents = filterYear.filter(
        e =>
          e.data.member_position.text === "President" &&
          e.data.ending_year === year
      )

      const vicepresidents = filterYear.filter(
        e =>
          e.data.member_position.text === "Vice President" &&
          e.data.ending_year === year
      )

      const coreMembers = filterYear.filter(
        e =>
          e.data.member_position.text.includes("Core") &&
          e.data.ending_year === year
      )
      const heads = filterYear.filter(
        e =>
          e.data.member_position.text.includes("Head") &&
          e.data.ending_year === year
      )
      const laterHeads = filterYear.filter(
        e =>
          e.data.ending_year !== year &&
          e.data.member_position.text !== "Member" &&
          !e.data.member_position.text.includes("Dean") &&
          !e.data.member_position.text.includes("Faculty")
      )
      const member = filterYear.filter(
        e => e.data.member_position.text === "Member"
      )
      const combineAll = dean.concat(
        faculty,
        presidents,
        vicepresidents,
        heads,
        coreMembers,
        laterHeads,
        member
      )

      setMembers(combineAll)
    },
    [data.allPrismicMembers.nodes]
  )

  React.useEffect(() => {
    setTimeout(() => {
      filterMembers(year)
      setLoading(false)
    }, 575)
  }, [year, filterMembers])

  return (
    <>
      <FlexCenter>
        <Heading>Our Members</Heading>
      </FlexCenter>
      <MembersSort startingYear={2017} setYear={e => setYear(e)} />
      {!loading ? (
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

            const forceShow =
              e.data.member_position.text.includes("Dean") |
              e.data.member_position.text.includes("Faculty")

            return (
              <div key={key}>
                <MemberCard
                  img={img}
                  name={e.data.member_name.text}
                  title={e.data.member_position.text}
                  social={socialLinks}
                  info={e.data.about_member.text}
                  joiningYear={e.data.joining_year}
                  selectedYear={year}
                  forceShowPosition={forceShow}
                  endingYear={e.data.ending_year}
                />
              </div>
            )
          })}
        </FlexCenter>
      ) : (
        <Loading />
      )}
    </>
  )
}
