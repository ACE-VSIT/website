import React, { useEffect, useState } from 'react'
import EventCard from './eventsCard-slice/EventCard'
import ProjectFilter from '../projects/components/ProjectFilter'
import { WrapperBody, Container } from './eventsCard-slice/EventCardElements'

export default function Event({ data }) {
  const [filter, setFilter] = useState('Event')
  const [eventItems, setEventItems] = useState([])
  const filterSelect = ['Event', 'ACE Hour']

  const displayData = data?.allPrismicEventitem?.edges.sort(function (a, b) {
    return (
      parseInt(b.node.data.event_date.slice(-2)) -
      parseInt(a.node.data.event_date.slice(-2))
    )
  })

  useEffect(() => {
    setEventItems(displayData.filter(e => e.node.data.event_type === filter))
  }, [filter, displayData])

  return (
    <>
      <WrapperBody>
        <Container>
          <ProjectFilter categories={filterSelect} setState={setFilter} />
          {data &&
            eventItems?.map((e, index) => {
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
