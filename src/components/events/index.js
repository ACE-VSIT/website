import React from "react"
import { FlexCenter } from "../../styles/sharedStyles"
import EventCard from "./eventsCard-slice/EventCard"
import { WrapperBody } from "./eventsCard-slice/EventCardElements"

export default function Event({ data }) {
  const displayData = data?.allPrismicEventitem?.edges

  return (
    <>
        <WrapperBody>
      <FlexCenter style={{ flexWrap: "wrap" }}>
        {
          data &&
            displayData?.map((e, index) => {
              return (
                <EventCard
                  name={e.node.data.event_title.text}
                  date={e.node.data.event_date}
                  // description={e.node.data.short_summary.text}
                  key={index}
                  description={`${e.node.data.short_summary.text.substring(
                    0,
                    115
                  )}...`}
                />
              )
            })
        }
      </FlexCenter>
      </WrapperBody>
    </>
  )
}
