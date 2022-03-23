import React from "react"
import { FlexCenter, Heading } from "../../styles/sharedStyles"
import EventCard from "./eventsCard-slice/EventCard"

export default function Event({ data }) {
  const displayData = data?.allPrismicEventitem?.edges

  return (
    <>
      <FlexCenter style={{ flexWrap: "wrap" }}>
        {
          data &&
            displayData?.map(e => {
              console.log(e.node.data)
              return (
                <EventCard
                  name={e.node.data.event_title.text}
                  date={e.node.data.event_date}
                  // description={e.node.data.short_summary.text}
                  description={`${e.node.data.short_summary.text.substring(
                    0,
                    115
                  )}...`}
                />
              )
            })
        }
      </FlexCenter>
    </>
  )
}
