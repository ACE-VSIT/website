import { getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { FlexCenter, Heading } from '../../styles/sharedStyles'
import Loading from '../animations/Loading'
import MemberCard from './members-card/MemberCard'
import MembersSort from './members-sort/MembersSort'

export default function MembersPage({ data }) {
  const [members, setMembers] = React.useState([])
  const [faculty, setFaculty] = React.useState([])
  const [loadingMembers, setLoadingMembers] = React.useState(true)
  const [loadingFaculty, setLoadingFaculty] = React.useState(true)
  // New Session updates in September, so if the current month is less than 8, then the year is same as current year, else it is next year
  const [yearMembers, setYearMembers] = React.useState(new Date().getMonth() < 7 ? new Date().getFullYear() : new Date().getFullYear() + 1)
  const [yearFaculty, setYearFaculty] = React.useState(new Date().getMonth() < 7 ? new Date().getFullYear() : new Date().getFullYear() + 1)
  
  // This is not the best approach, will think of something later
  const filterMembers = React.useCallback(
    year => {
      const filterYear = data.allPrismicMembers.nodes.filter(
        e =>
          parseInt(e.data.joining_year) <= parseInt(year) &&
          parseInt(e.data.ending_year) >= parseInt(year)
      )
      const presidents = filterYear.filter(
        e =>
          e.data.member_position.text === 'President' &&
          parseInt(e.data.ending_year) === parseInt(year)
      )

      const vicepresidents = filterYear.filter(
        e =>
          e.data.member_position.text === 'Vice President' &&
          parseInt(e.data.ending_year) === parseInt(year)
      )
      const generalsecretary = filterYear.filter(
        e =>
          e.data.member_position.text.includes('Secretary') &&
          parseInt(e.data.ending_year) === parseInt(year)
      )
      const heads = filterYear.filter(
        e =>
          e.data.member_position.text.includes('Head') &&
          parseInt(e.data.ending_year) === parseInt(year)
      )
      const mentors = filterYear.filter(
        e =>
          e.data.member_position.text.includes('Mentor') &&
          parseInt(e.data.ending_year) === parseInt(year)
      )
      const coreMembers = filterYear.filter(
        e =>
          e.data.member_position.text.includes('Core') &&
          parseInt(e.data.ending_year) === parseInt(year)
      )
      const laterHeads = filterYear.filter(
        e =>
          parseInt(e.data.ending_year) !== parseInt(year) &&
          e.data.member_position.text !== 'Member' &&
          e.data.member_position.text !== 'Vice President' &&
          !e.data.member_position.text.includes('Head') &&
          !e.data.member_position.text.includes('Dean') &&
          !e.data.member_position.text.includes('Faculty')
      )
      const member = filterYear.filter(
        e => e.data.member_position.text === 'Member'
      )
      const combineAll = presidents.concat(
        vicepresidents,
        generalsecretary,
        heads,
        mentors,
        coreMembers,
        laterHeads,
        member
      )
      setMembers(combineAll)
    },
    [data.allPrismicMembers.nodes]
  )

  const filterFaculty = React.useCallback(
    year => {
      const filterYear = data.allPrismicMembers.nodes.filter(
        e =>
          parseInt(e.data.joining_year) <= parseInt(year) &&
          parseInt(e.data.ending_year) >= parseInt(year)
      )
      const dean = filterYear.filter(e =>
        e.data.member_position.text.includes('Dean')
      )
      const faculty = filterYear.filter(e =>
        e.data.member_position.text.includes('Faculty')
      )
      const facultyMembers = dean.concat(faculty)

      setFaculty(facultyMembers)
    },
    [data.allPrismicMembers.nodes]
  )

  React.useEffect(() => {
    setLoadingMembers(true)
    setTimeout(() => {
      filterMembers(yearMembers)
      setLoadingMembers(false)
    }, 500)
  }, [yearMembers, filterMembers])

  React.useEffect(() => {
    setLoadingFaculty(true)
    setTimeout(() => {
      filterFaculty(yearFaculty)
      setLoadingFaculty(false)
    }, 500)
  }, [yearFaculty, filterFaculty])

  return (
    <>
      <FlexCenter style={{ marginTop: '1rem' }}>
        <Heading>Faculty Coordinators</Heading>
      </FlexCenter>
      <MembersSort startingYear={2017} setYear={e => setYearFaculty(e)} />
      {!loadingFaculty ? (
        <FlexCenter style={{ flexWrap: 'wrap' }}>
          {faculty?.map((e, key) => {
            const img = getImage(e.data.member_image)
            // Filters all key values which matches "link" and stores it in socialLinksI
            const socialLinks = Object.keys(e.data)
              .filter(links => links.includes('link'))
              .reduce((obj, key) => {
                obj[key] = e.data[key]
                return obj
              }, {})

            const forceShow =
              e.data.member_position.text.includes('Dean') |
              e.data.member_position.text.includes('Faculty')

            return (
              <div key={key}>
                <MemberCard
                  img={img}
                  name={e.data.member_name.text}
                  title={e.data.member_position.text}
                  social={socialLinks}
                  info={e.data.about_member.text}
                  joiningYear={e.data.joining_year}
                  selectedYear={yearFaculty}
                  forceShowPosition={forceShow}
                  endingYear={e.data.ending_year}
                />
              </div>
            )
          })}
        </FlexCenter>
      ) : (
        <div style={{ height: '80vh' }}>
          <Loading />
        </div>
      )}
      <FlexCenter>
        <Heading>Our Members</Heading>
      </FlexCenter>
      <MembersSort startingYear={2017} setYear={e => setYearMembers(e)} />
      {!loadingMembers ? (
        <FlexCenter style={{ flexWrap: 'wrap' }}>
          {members?.map((e, key) => {
            const img = getImage(e.data.member_image)
            // Filters all key values which matches "link" and stores it in socialLinksI
            const socialLinks = Object.keys(e.data)
              .filter(links => links.includes('link'))
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
                  selectedYear={yearMembers}
                  endingYear={e.data.ending_year}
                />
              </div>
            )
          })}
        </FlexCenter>
      ) : (
        <div style={{ height: '80vh' }}>
          <Loading />
        </div>
      )}
    </>
  )
}
