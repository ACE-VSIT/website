import { graphql } from "gatsby"

export const allEventitem = graphql`
  fragment allEventitem on PrismicEventitem {
    data {
      event_date(formatString: "DD MMM YY")
      event_details {
        text
      }
      event_title {
        text
      }
      short_summary {
        text
      }
      event_link {
        url
      }
    }
  }
`
