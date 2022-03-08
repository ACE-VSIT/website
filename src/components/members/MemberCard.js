import React, { useState } from "react"
import {
  MemberCardWrapper,
  MemberImageWrapper,
  MemberName,
  MemberTitle,
} from "./MemberCardElements"
import MemberInfoCard from "./MemberInfoCard"
import { GatsbyImage } from "gatsby-plugin-image"

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
      <MemberCardWrapper onClick={() => setShowMemberInfoCard(true)}>
        <MemberImageWrapper>
          <GatsbyImage image={img} alt={""} />
        </MemberImageWrapper>
        {name && <MemberName>{name}</MemberName>}
        {title && <MemberTitle>{title}</MemberTitle>}
      </MemberCardWrapper>
      {showMemberInfoCard ? (
        <MemberInfoCard
          name={name}
          title={title}
          img={img}
          social={social}
          info={info}
          joiningYear={joiningYear}
          setShowMemberInfoCard={setShowMemberInfoCard}
        />
      ) : (
        ""
      )}
    </>
  )
}
