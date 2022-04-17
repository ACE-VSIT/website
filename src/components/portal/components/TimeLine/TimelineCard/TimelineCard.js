import React from "react"
import { FlexCenter } from "../../../../../styles/sharedStyles"
import Button from "../../../../button/Button"
import RichText from "../../../../rich-text"
import {
  Container,
  TimelineCardInfo,
  TimelineCardTitle,
  TimelineCardWrapper,
  TimelinePoint,
  TimelineDifficulty,
} from "./TimelineCardElements"

export default function TimelineCard({ heading, level, info, align }) {
  const styledFlex = {
    justifyContent: "space-between",
    flexWrap: "nowrap",
    flexDirection: "row",
    paddingTop: "0.5rem",
  }

  const containerMargin = {
    marginLeft: align === "start" && "20rem",
    marginRight: align === "end" && "20rem",
  }

  return (
    <Container id={"timelineCard"} align={"flex-end"} style={containerMargin}>
      <TimelineCardWrapper>
        {heading && (
          <TimelineCardTitle align={align}>{heading}</TimelineCardTitle>
        )}
        {info && (
          <TimelineCardInfo align={align}>
            <RichText richText={info} />
          </TimelineCardInfo>
        )}
        <FlexCenter style={styledFlex}>
          {level && <TimelineDifficulty>#{level}</TimelineDifficulty>}
          <Button to={""} sm value={"Submit"} />
        </FlexCenter>
        <TimelinePoint>
          <span />
        </TimelinePoint>
      </TimelineCardWrapper>
    </Container>
  )
}
