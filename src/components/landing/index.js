import React, { useEffect, useRef, useState, useCallback } from "react"
import HeroSection from "./hero-slice/HeroSlice"
import { Heading, FlexCenter } from "../../styles/sharedStyles"
import MemberCard from "../members/members-card/MemberCard"
import { getImage } from "gatsby-plugin-image"
import Counter from "./counter-slice/Counter"
import {
  CounterWrapper,
  // CounterSubTitle,
} from "./counter-slice/CounterElements"
import useOnScreen from "../../hooks/useOnScreen"
import SliderInfoImg from "./side-info-img-slice/SideInfoImg"

export default function HomePage({ data }) {
  const sliderInfoTitle =
    data?.prismicHomepage?.data?.body[1]?.primary?.slice_title?.text
  const sliderInfoSubTitle =
    data?.prismicHomepage?.data?.body[1]?.primary?.slice_subtitle?.text
  const sliderInfoImg = getImage(
    data?.prismicHomepage?.data?.body[1]?.primary?.r_image
  )
  const [hasMounted, setHasMounted] = useState(false)
  const counter = data?.prismicHomepage?.data?.body[2]?.items
  // const statsTitle =
  //   data?.prismicHomepage?.data?.body[2]?.primary?.stats_title?.text
  // const statsSubTitle =
  //   data?.prismicHomepage?.data?.body[2]?.primary?.stats_subtitle?.text

  const [members, setMembers] = useState([])
  const counterRef = useRef()
  const onViewPort = useOnScreen(counterRef)

  // This is not the best approach, will think of something later
  const resetSort = useCallback(() => {
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

  useEffect(() => {
    resetSort()
  }, [data.allPrismicMembers.nodes, resetSort])

  useEffect(() => {
    onViewPort && setHasMounted(true)
  }, [onViewPort])

  return (
    <>
      <HeroSection data={data?.prismicHomepage?.data?.body[0]} />
      {sliderInfoTitle &&
        sliderInfoSubTitle &&
        sliderInfoImg && (
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
                  {hasMounted && <Counter e={e} />}
                </div>
              )
            })}
          </CounterWrapper>
        </>
      )}
      <FlexCenter>
        <Heading topLine>Core Members</Heading>
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
    </>
  )
}
