import { graphql } from 'gatsby'

export const magazineInfo = graphql`
  fragment magazineInfo on PrismicMagazine {
    data {
      body {
        ... on PrismicMagazineDataBodyWebsiteMetaInfo {
          primary {
            meta_description {
              text
            }
            meta_keywords {
              text
            }
            meta_title {
              text
            }
          }
        }
      }
      body1 {
        ... on PrismicMagazineDataBody1MagazineCard {
          items {
            magazine_image {
              gatsbyImageData(placeholder: BLURRED)
            }
            magazine_info {
              text
            }
            magazine_title {
              text
            }
            release_date(formatString: "DD / MM / YYYY")
            magazine_link {
              url
            }
          }
        }
      }
      main_image {
        gatsbyImageData(placeholder: BLURRED)
      }
      title {
        text
      }
      date(formatString: "DD / MM / YYYY")
      info {
        text
      }
      link {
        url
      }
    }
  }
`
