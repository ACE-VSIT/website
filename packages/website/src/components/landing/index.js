import { getImage } from 'gatsby-plugin-image'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import useOnScreen from '../../hooks/useOnScreen'
import { FlexCenter, Heading } from '../../styles/sharedStyles'
import FooterInfo from '../footer-info/FooterInfo'
import MemberCard from '../members/members-card/MemberCard'
import Counter from './counter-slice/Counter'
import { CounterWrapper } from './counter-slice/CounterElements'
import HeroSection from './hero-slice/HeroSlice'
import { FacultyWrapper } from './LandingElements'
import SliderInfoImg from './side-info-img-slice/SideInfoImg'

export default function HomePage({ data }) {
  const sliderInfoTitle =
    data?.prismicHomepage?.data?.body[1]?.primary?.slice_title?.text
  const sliderInfoSubTitle =
    data?.prismicHomepage?.data?.body[1]?.primary?.slice_subtitle?.text
  const sliderInfoImg = getImage(
    data?.prismicHomepage?.data?.body[1]?.primary?.r_image
  )
  const footerInfo = data?.prismicHomepage?.data?.body[5]?.items[0]
  const [hasMounted, setHasMounted] = useState(false)
  const counter = data?.prismicHomepage?.data?.body[2]?.items
  // const statsTitle =
  //   data?.prismicHomepage?.data?.body[2]?.primary?.stats_title?.text
  // const statsSubTitle =
  //   data?.prismicHomepage?.data?.body[2]?.primary?.stats_subtitle?.text

  const [members, setMembers] = useState([])
  const [faculty, setFaculty] = useState([])
  const counterRef = useRef()
  const onViewPort = useOnScreen(counterRef)

  // This is not the best approach, will think of something later
  const resetSort = useCallback(() => {
    const coreMembers = data.allPrismicMembers.nodes.filter(e =>
      e.data.member_position.text.includes('Core')
    )
    const dean = data.allPrismicMembers.nodes.filter(e =>
      e.data.member_position.text.includes('Dean')
    )
    const faculty = data.allPrismicMembers.nodes
      .filter(e => e.data.member_position.text.includes('Faculty'))
      .sort((a, b) =>
        a.data.member_position.text.localeCompare(b.data.member_position.text)
      )
    const heads = data.allPrismicMembers.nodes
      .filter(e => e.data.member_position.text.includes('Head'))
      .sort((a, b) =>
        a.data.member_position.text.localeCompare(b.data.member_position.text)
      )
    const mentors = data.allPrismicMembers.nodes
      .filter(e => e.data.member_position.text.includes('Mentor'))
      .sort((a, b) =>
        a.data.member_position.text.localeCompare(b.data.member_position.text)
      )
    const presidents = data.allPrismicMembers.nodes.filter(
      e => e.data.member_position.text === 'President'
    )
    const vicepresidents = data.allPrismicMembers.nodes.filter(
      e => e.data.member_position.text === 'Vice President'
    )
    const generalsecretary = data.allPrismicMembers.nodes.filter(e =>
      e.data.member_position.text.includes('Secretary')
    )

    const combineAll = presidents.concat(
      vicepresidents,
      generalsecretary,
      heads,
      mentors,
      coreMembers
    )
    if (faculty.length > 0) {
      const facult = dean.concat(faculty)
      setFaculty(facult)
    }
    setMembers(combineAll)
  }, [data.allPrismicMembers.nodes])

  useEffect(() => {
    resetSort()
  }, [data.allPrismicMembers.nodes, resetSort])

  useEffect(() => {
    onViewPort && setHasMounted(true)
  }, [onViewPort])

  return (
    <>
      <HeroSection data={data?.prismicHomepage?.data?.body[0]} />
      {sliderInfoTitle && sliderInfoSubTitle && sliderInfoImg && (
        <SliderInfoImg
          img={sliderInfoImg}
          title={sliderInfoTitle}
          subtitle={sliderInfoSubTitle}
        />
      )}
      {counter && (
        <>
          <CounterWrapper>
            {/* <Heading>{statsTitle}</Heading>
            <CounterSubTitle>{statsSubTitle}</CounterSubTitle> */}
            {counter.map((e, key) => {
              return (
                <div ref={counterRef} key={key}>
                  {hasMounted && <Counter e={e} startVal={key === 1 && 300} />}
                </div>
              )
            })}
          </CounterWrapper>
        </>
      )}
      {faculty.length && (
        <FacultyWrapper>
          <Heading topLine>Faculty Coordinators</Heading>
          <FlexCenter style={{ flexWrap: 'wrap', height: 'max-content' }}>
            {faculty?.map((e, key) => {
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
                    forceShowPosition={true}
                  />
                </div>
              )
            })}
          </FlexCenter>
        </FacultyWrapper>
      )}
      <FlexCenter>
        <Heading topLine>Meet our team</Heading>
      </FlexCenter>
      <FlexCenter style={{ flexWrap: 'wrap', height: 'max-content' }}>
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
                isHomePage={true}
                name={e.data.member_name.text}
                title={e.data.member_position.text}
                social={socialLinks}
                info={e.data.about_member.text}
                joiningYear={e.data.joining_year}
                forceShowPosition={true}
              />
            </div>
          )
        })}
        <FooterInfo
          btn={footerInfo?.footer_button.url}
          showBtn={footerInfo?.footer_button_toggle}
          info={footerInfo?.footer_info?.text}
        />
      </FlexCenter>
    </>
  )
}
