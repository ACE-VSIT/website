import { graphql } from "gatsby"

export const achievementsPage = graphql`
  fragment achievementsPage on PrismicAchievements {
    data {
      hero_image {
        gatsbyImageData(placeholder: BLURRED)
      }
      title {
        text
      }
      body {
        ... on PrismicAchievementsDataBodyAchievement {
          items {
            achievement_title {
              text
            }
            college_name {
              text
            }
            event_date(formatString: "YYYY")
            event_name {
              text
            }
            position
            winner_name {
              document {
                ... on PrismicMembers {
                  data {
                    member_name {
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
