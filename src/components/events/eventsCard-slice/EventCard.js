import {
    EventsCardWrapper,
    ImageWrapper,
    EventDetailContainer,
    Date,
    EventName,
    EventDetail,
    EventDescription
} from "./EventCardElements";
import React from "react";

export default function EventCard({
    name,
    img,
    date,
    description,
}) {
    return (
        <>
            <EventsCardWrapper>
                <ImageWrapper src={ img } />
                <EventDetailContainer>
                    <Date> {date}</Date>
                    <EventDetail>
                        <EventName> {name}</EventName>
                        <EventDescription> {description} </EventDescription>
                    </EventDetail>
                </EventDetailContainer>
            </EventsCardWrapper>
        </>
    )
}