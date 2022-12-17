import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import {
  MemberCardWrapper,
  MemberImageWrapper,
  MemberName,
  MemberTitle,
} from './MemberCardElements'
import MemberInfoCard from './MemberInfoCard'

export default function MemberCard({
  name,
  title,
  img,
  social,
  info,
  joiningYear,
  selectedYear,
  endingYear,
  forceShowPosition,
}) {
  const [showMemberInfoCard, setShowMemberInfoCard] = useState(false)

  return (
    <>
      <MemberCardWrapper onClick={() => setShowMemberInfoCard(true)}>
        <MemberImageWrapper>
          <GatsbyImage image={img} alt={''} />
        </MemberImageWrapper>
        {name && <MemberName>{name}</MemberName>}
        {title && parseInt(endingYear) === parseInt(selectedYear) ? (
          <MemberTitle>{title}</MemberTitle>
        ) : (
          <MemberTitle>{!forceShowPosition ? 'Member' : title}</MemberTitle>
        )}
      </MemberCardWrapper>
      {showMemberInfoCard ? (
        <MemberInfoCard
          name={name}
          title={
            parseInt(endingYear) === parseInt(selectedYear) ? title : 'Member'
          }
          img={img}
          social={social}
          info={info}
          joiningYear={joiningYear}
          showMemberInfoCard={showMemberInfoCard}
          setShowMemberInfoCard={setShowMemberInfoCard}
        />
      ) : (
        ''
      )}
    </>
  )
}
