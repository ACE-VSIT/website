import { graphql } from 'gatsby'

export const navbarInfo = graphql`
  fragment navbarInfo on PrismicLayout {
    data {
      body {
        ... on PrismicLayoutDataBodyNavbarListItem {
          primary {
            navbar_slider_info {
              richText
            }
            navbar_logo {
              gatsbyImageData(placeholder: BLURRED)
            }
            navbar_logo_dark {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        ... on PrismicLayoutDataBodyNavbarListItem1 {
          items {
            navbar_link {
              url
            }
            navbar_link_name {
              text
            }
          }
        }
        ... on PrismicLayoutDataBodyNavbarSocialItem {
          items {
            navbar_social_item_name {
              text
            }
            navbar_social_link {
              url
            }
          }
        }
        ... on PrismicLayoutDataBodyFooterListItem {
          items {
            footer_item_link {
              url
            }
            footer_item_name {
              text
            }
          }
        }
      }
    }
  }
`
