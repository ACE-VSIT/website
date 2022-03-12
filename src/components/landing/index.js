import React, { useEffect, useRef, useState } from "react"
import HeroSection from "./hero-slice/HeroSlice"
import { Heading, FlexCenter } from "../../styles/sharedStyles"
import MemberCard from "../members/MemberCard"
import { getImage } from "gatsby-plugin-image"
import Counter from "./counter-slice/Counter"
import {
  CounterWrapper,
  CounterSubTitle,
} from "./counter-slice/CounterElements"
import useOnScreen from "../../hooks/useOnScreen"
import MoveTop from "../move-to-top/MoveTop"
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
  const statsTitle =
    data?.prismicHomepage?.data?.body[2]?.primary?.stats_title?.text
  const statsSubTitle =
    data?.prismicHomepage?.data?.body[2]?.primary?.stats_subtitle?.text

  const counterRef = useRef()
  const onViewPort = useOnScreen(counterRef)

  console.log(data)
  useEffect(() => {
    onViewPort && setHasMounted(true)
  }, [onViewPort])

  return (
    <>
      <HeroSection data={data?.prismicHomepage?.data?.body[0]} />
      <SliderInfoImg
        img={sliderInfoImg}
        title={sliderInfoTitle}
        subtitle={sliderInfoSubTitle}
      />
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
        <Heading>Core Members</Heading>
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
      <MoveTop />
    </>
  )
}
