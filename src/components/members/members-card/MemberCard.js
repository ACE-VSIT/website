import React, { useState } from "react"
import {
  MemberCardWrapper,
  MemberImageWrapper,
  MemberName,
  MemberTitle,
} from "./MemberCardElements"
import MemberInfoCard from "./MemberInfoCard"
import { GatsbyImage } from "gatsby-plugin-image"
import AnimateIn from "../../animations/AnimateIn"

export default function MemberCard({
  name,
  title,
  img,
  social,
  info,
  joiningYear,
}) {
  const [showMemberInfoCard, setShowMemberInfoCard] = useState(false)

  return (
    <>
      <AnimateIn delay={150} duration={500}>
        <MemberCardWrapper onClick={() => setShowMemberInfoCard(true)}>
          <MemberImageWrapper>
            <GatsbyImage image={img} alt={""} />
          </MemberImageWrapper>
          {name && <MemberName>{name}</MemberName>}
          {title && <MemberTitle>{title}</MemberTitle>}
        </MemberCardWrapper>
      </AnimateIn>
      {showMemberInfoCard ? (
        <MemberInfoCard
          name={name}
          title={title}
          img={img}
          social={social}
          info={info}
          joiningYear={joiningYear}
          showMemberInfoCard={showMemberInfoCard}
          setShowMemberInfoCard={setShowMemberInfoCard}
        />
      ) : (
        ""
      )}
    </>
  )
}
