import { graphql } from 'gatsby'

export const landingInfo = graphql`
  fragment landingInfo on PrismicHomepage {
    data {
      body {
        ... on PrismicHomepageDataBodyStatsSlice {
          items {
            numbers {
              text
            }
            numbers_subtitile {
              text
            }
          }
          primary {
            stats_subtitle {
              text
            }
            stats_title {
              text
            }
          }
        }
        ... on PrismicHomepageDataBodyLandingPage {
          items {
            hero_image {
              gatsbyImageData(placeholder: BLURRED)
            }
            hero_image_alt_background_color
            hero_image_alt_text {
              text
            }
          }
          primary {
            hero_button
            hero_button_link {
              url
              target
            }
            hero_button_title {
              text
            }
            hero_subtitle {
              text
            }
            hero_text {
              text
            }
          }
        }
        ... on PrismicHomepageDataBodyLTextRImage {
          items {
            button {
              url
            }
            icon_image {
              gatsbyImageData(placeholder: BLURRED)
            }
            subtitle {
              text
            }
            show_button
            title1 {
              text
            }
          }
          primary {
            r_image {
              gatsbyImageData(placeholder: BLURRED)
            }
            slice_subtitle {
              text
            }
            slice_title {
              text
            }
          }
        }
        ... on PrismicHomepageDataBodyCardList {
          items {
            card_author {
              text
            }
            card_date(formatString: "DD MMMM YYYY")
            card_hashtag {
              text
            }
            card_image {
              alt
              gatsbyImageData(placeholder: BLURRED)
            }
            card_subtitle {
              text
            }
            card_title {
              text
            }
          }
          primary {
            list_subtitle {
              text
            }
            list_title {
              text
            }
          }
        }
        ... on PrismicHomepageDataBodyFooterInfo {
          items {
            footer_button_toggle
            footer_button {
              url
            }
            footer_info {
              text
            }
          }
        }
      }
    }
  }
`
