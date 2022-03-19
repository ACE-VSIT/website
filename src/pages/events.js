import React from "react";
import Event from "../components/events/index"
import Layout from "../components/Layout/index"
import Seo from "../components/SEO"
import { getImage } from "gatsby-plugin-image"

import { graphql } from "gatsby"
import { FlexCenter, Heading } from "../styles/sharedStyles";
import EventCard from "../components/events/eventsCard-slice/EventCard";

export default function Events({ data }) {
  console.log(data)
    const nav = data?.prismicLayout?.data?.body
    // const arr = data?.prismicEventpage?.data?.body[0]?.items
      return (
          <>
              <Layout navbar={nav}>
                  <Seo title={"Events"} />
                  <FlexCenter>
                    <Heading>Our Events</Heading>
                  </FlexCenter>
                  <FlexCenter style={{ flexWrap: "wrap"}}>
                    <div>
                      <EventCard
                      // img={img}
                      // name={displayData.title.text}
                      // date={displayData.event_date}
                      // description={`${displayData.subtitle.text.substring(0,106)}...`}
                      />
                    </div>
                  </FlexCenter>
                  {/* {data && <Event data={data} />} */}
              </Layout>
          </>
      )
    
}

export const eventInfo = graphql`
query eventInfo {
    prismicLayout {
        ...navbarInfo
      }
    prismicEventpage {
      ...EventPage
    }
    allPrismicEventitem{
      ...allEventitem
    }
  }
  
`