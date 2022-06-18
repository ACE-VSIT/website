import React from "react"
import { FlexCenter } from "../../../../../styles/sharedStyles"
import { ButtonWrapper } from "../../Google/LoginElements"
import RichText from "../../../../rich-text"
import {
  Container,
  TimelineCardInfo,
  TimelineCardTitle,
  TimelineCardWrapper,
  TimelinePoint,
  TimelineDifficulty,
} from "./TimelineCardElements"

export default function TimelineCard({
  heading,
  level,
  info,
  align,
  openPicker,
}) {
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
          <ButtonWrapper onClick={e => openPicker()} sm={"sm"}>
            Submit
          </ButtonWrapper>
        </FlexCenter>
        <TimelinePoint>
          <span />
        </TimelinePoint>
      </TimelineCardWrapper>
    </Container>
  )
}
