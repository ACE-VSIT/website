import React from "react"
import HeroSection from "./hero-slice/HeroSlice"
import { Heading, FlexCenter } from "../../styles/sharedStyles"
import MemberCard from "../members/MemberCard"
import { getImage } from "gatsby-plugin-image"
import Counter from "./counter-slice/Counter"
import { CounterWrapper } from "./counter-slice/CounterElements"

export default function HomePage({ data }) {
  console.log(data)
  return (
    <>
      <HeroSection data={data?.prismicHomepage?.data?.body[0]} />
      <CounterWrapper>
        {data?.prismicHomepage?.data?.body[2]?.items.map((e, key) => {
          return (
            <div key={key}>
              <Counter e={e} />
            </div>
          )
        })}
      </CounterWrapper>
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
    </>
  )
}
