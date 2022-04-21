import React from "react"
import EventCard from "./eventsCard-slice/EventCard"
import { WrapperBody, Container } from "./eventsCard-slice/EventCardElements"

export default function Event({ data }) {
  const displayData = data?.allPrismicEventitem?.edges.sort(function (a, b) {
    return (
      parseInt(b.node.data.event_date.slice(-2)) -
      parseInt(a.node.data.event_date.slice(-2))
    )
  })
  // console.log(displayData)
  return (
    <>
      <WrapperBody>
        <Container>
          {data &&
            displayData?.map((e, index) => {
              return (
                <EventCard
                  link={e.node.data.event_link?.url}
                  name={e.node.data.event_title.text}
                  date={e.node.data.event_date}
                  // description={e.node.data.short_summary.text}
                  key={index}
                  description={`${e.node.data.short_summary.text.substring(
                    0,
                    94
                  )}...`}
                />
              )
            })}
        </Container>
      </WrapperBody>
    </>
  )
}
