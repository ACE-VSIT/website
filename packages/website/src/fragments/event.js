import { graphql } from 'gatsby'

export const EventPage = graphql`
  fragment EventPage on PrismicEventpage {
    data {
      background_image {
        gatsbyImageData(placeholder: BLURRED)
      }
      subtitle {
        text
      }
      title {
        text
      }
      meta_keywords {
        text
      }
      meta_page_subtitle {
        text
      }
      meta_page_title {
        text
      }
      body {
        ... on PrismicEventpageDataBodyEventItemRelationSlice {
          items {
            event_item_relation {
              document {
                ... on PrismicEventitem {
                  data {
                    event_date
                    event_details {
                      text
                    }
                    event_title {
                      text
                    }
                    short_summary {
                      text
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
