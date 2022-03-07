import React from "react"
import {
  MemberCardWrapper,
  MemberImageWrapper,
  MemberInfoWrapper,
  MemberName,
  MemberTitle,
  MemberInfo,
  LinkedIn,
  Github,
  Twitter,
  Instagram,
  Facebook,
  Behance,
  Globe,
} from "./MemberCardElements"
import { FlexCenter, Close } from "../../styles/sharedStyles"
import { GatsbyImage } from "gatsby-plugin-image"

export default function MemberInfoCard({
  name,
  title,
  img,
  social,
  info,
  setShowMemberInfoCard,
}) {
  const socialIconStyleConfig = {
    height: "2.25rem",
    width: "100%",
    justifyContent: "flex-start",
    paddingTop: ".5rem",
    gap: "1.5rem",
  }
  
  return (
    <MemberCardWrapper fixed detailed>
      <FlexCenter style={{ flexDirection: "column" }}>
        <MemberImageWrapper>
          <GatsbyImage image={img} alt={""} />
        </MemberImageWrapper>
      </FlexCenter>
      <MemberInfoWrapper>
        <div>
          {name && <MemberName>{name}</MemberName>}
          {title && <MemberTitle>{title}</MemberTitle>}

          <FlexCenter style={socialIconStyleConfig}>
            <Close onClick={() => setShowMemberInfoCard(false)} />
            {social?.linkedin_link.url && (
              <LinkedIn
                onClick={() => window.open(social?.linkedin_link.url)}
              />
            )}
            {social?.github_link.url && (
              <Github onClick={() => window.open(social?.github_link.url)} />
            )}
            {social?.twitter_link.url && (
              <Twitter onClick={() => window.open(social?.twitter_link.url)} />
            )}
            {social?.instagram_link.url && (
              <Instagram
                onClick={() => window.open(social?.instagram_link.url)}
              />
            )}
            {social?.facebook_link.url && (
              <Facebook
                onClick={() => window.open(social?.facebook_link.url)}
              />
            )}
            {social?.behance_link.url && (
              <Behance onClick={() => window.open(social?.behance_link.url)} />
            )}
            {social?.personal_website_link?.url && (
              <Globe
                onClick={() => window.open(social?.personal_website_link?.url)}
              />
            )}
          </FlexCenter>
        </div>
        {info && <MemberInfo>{info}</MemberInfo>}
      </MemberInfoWrapper>
    </MemberCardWrapper>
  )
}
