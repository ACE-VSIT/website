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
import { CalendarOutlined } from '@ant-design/icons';


export default function EventCard({ name, img, date, description }) {
  return (
    <>
      <AnimateIn delay={150} duration={500}>
        <EventsCardWrapper>
          {img && <ImageWrapper src={img} />}
          <EventDetailContainer>
            {name && <EventName> {name}</EventName>}
            {description && <EventDescription> {description} </EventDescription>}
            <DateWrapper>
              <CalendarOutlined />{date && <Date> {date}</Date>}
            </DateWrapper>
          </EventDetailContainer>
        </EventsCardWrapper>
      </AnimateIn>
    </>
  )
}
