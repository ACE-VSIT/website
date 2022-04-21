import {
  EventsCardWrapper,
  ImageWrapper,
  EventDetailContainer,
  Date,
  EventName,
  DateWrapper,
  EventDescription,
} from "./EventCardElements"
import AnimateIn from "../../animations/AnimateIn"
import React from "react"
import { CalendarOutlined } from "@ant-design/icons"

export default function EventCard({ name, img, date, description, link }) {
  const Redirect = link => {
    link && window.open(link)
  }
  return (
    <>
      <AnimateIn delay={150} duration={500}>
        <EventsCardWrapper onClick={() => Redirect(link)}>
          {img && <ImageWrapper src={img} />}
          <EventDetailContainer>
            {name && <EventName> {`${name}, 20${date.slice(-2)}`}</EventName>}
            {description && (
              <EventDescription> {description} </EventDescription>
            )}
            <DateWrapper>
              <CalendarOutlined />
              {date && <Date> {date}</Date>}
            </DateWrapper>
          </EventDetailContainer>
        </EventsCardWrapper>
      </AnimateIn>
    </>
  )
}
