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
  const sliderInfoTitle = data?.prismicHomepage?.data?.body[1]?.primary?.slice_title?.text
  const sliderInfoSubTitle = data?.prismicHomepage?.data?.body[1]?.primary?.slice_subtitle?.text
  const sliderInfoImg = getImage(data?.prismicHomepage?.data?.body[1]?.primary?.r_image)
  const footerInfo = data?.prismicHomepage?.data?.body[5]?.items[0]
  const counter = data?.prismicHomepage?.data?.body[2]?.items

  const [members, setMembers] = useState([])
  const [faculty, setFaculty] = useState([])
  const [hasMounted, setHasMounted] = useState(false)
  const counterRef = useRef()
  const onViewPort = useOnScreen(counterRef)
  const [currentYear] = useState(() => {
    const now = new Date()
    return now.getMonth() < 7 ? now.getFullYear() : now.getFullYear() + 1
  })

  const normalize = (text) => (text || '').trim().toLowerCase()

  const resetSort = useCallback(() => {
    const normalize = (field) => {
      if (!field) return ''
      if (typeof field === 'string') return field.trim().toLowerCase()
      if (typeof field.text === 'string') return field.text.trim().toLowerCase()
      return ''
    }
    function isFacultyChairperson(member) {
      return normalize(member.data.member_position).includes('chairperson') &&
        (normalize(member.data.member_position).includes('it') || normalize(member.data.member_position).includes('faculty'));
    }

    function isStudentChairperson(member) {
      return normalize(member.data.member_position).includes('chairperson') && !isFacultyChairperson(member);
    }

    const members = data.allPrismicMembers.nodes

    const filtered = members.filter(member => {
      const joinYear = parseInt(member.data.joining_year);
      const endYear = parseInt(member.data.ending_year);
      return (isNaN(joinYear) || joinYear <= currentYear) && (isNaN(endYear) || endYear >= currentYear);
    });

    const coreMembers = filtered.filter(e => normalize(e.data.member_position).includes('core'));
    const dean = filtered.filter(e => normalize(e.data.member_position).includes('dean'));
    const facultyFiltered = filtered.filter(e => normalize(e.data.member_position).includes('faculty'))
      .sort((a, b) => a.data.member_position.text.localeCompare(b.data.member_position.text));
    const heads = filtered.filter(e => normalize(e.data.member_position).includes('head'))
      .sort((a, b) => a.data.member_position.text.localeCompare(b.data.member_position.text));
    const mentors = filtered.filter(e => normalize(e.data.member_position).includes('mentor'))
      .sort((a, b) => a.data.member_position.text.localeCompare(b.data.member_position.text));
    const presidents = filtered.filter(e => normalize(e.data.member_position) === 'president');
    const vicepresidents = filtered.filter(e => normalize(e.data.member_position).includes('vice president'));
    const generalsecretary = filtered.filter(e => normalize(e.data.member_position).includes('secretary'));
    const studentChairpersons = filtered.filter(isStudentChairperson);

    const combined = studentChairpersons.concat(presidents, vicepresidents, generalsecretary, heads, mentors, coreMembers);

    if (facultyFiltered.length > 0) {
      const combinedFaculty = dean.concat(facultyFiltered);
      setFaculty(combinedFaculty);
    }

    setMembers(combined);


  }, [data.allPrismicMembers.nodes]);


  useEffect(() => {
    resetSort()
  }, [data.allPrismicMembers.nodes, resetSort])

  useEffect(() => {
    if (onViewPort) {
      setHasMounted(true)
    }
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
        <CounterWrapper>
          {counter.map((e, key) => (
            <div ref={counterRef} key={key}>
              {hasMounted && <Counter e={e} startVal={key === 1 && 300} />}
            </div>
          ))}
        </CounterWrapper>
      )}
      {faculty.length > 0 && (
        <FacultyWrapper>
          <Heading topLine>Faculty Coordinators</Heading>
          <FlexCenter style={{ flexWrap: 'wrap', height: 'max-content' }}>
            {faculty.map((e, key) => {
              const img = getImage(e.data.member_image)
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
        {members.map((e, key) => {
          const img = getImage(e.data.member_image)
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
