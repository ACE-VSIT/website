import { graphql } from 'gatsby'

export const memberInfo = graphql`
  fragment memberInfo on PrismicMembers {
    data {
      about_member {
        text
      }
      behance_link {
        url
      }
      facebook_link {
        url
      }
      github_link {
        url
      }
      instagram_link {
        url
      }
      linkedin_link {
        url
      }
      member_image {
        gatsbyImageData(placeholder: BLURRED, aspectRatio: 1)
      }
      member_name {
        text
      }
      member_position {
        text
      }
      personal_website_link {
        url
      }
      twitter_link {
        url
      }
      joining_year
      ending_year
    }
  }
`
