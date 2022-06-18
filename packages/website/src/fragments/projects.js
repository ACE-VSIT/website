import { graphql } from "gatsby"

export const ProjectPage = graphql`
  fragment ProjectPage on PrismicProjects {
    data {
      body {
        ... on PrismicProjectsDataBodyProjectDevelopers {
          items {
            developed_by {
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
      content {
        text
      }
      title {
        text
      }
      image {
        gatsbyImageData(placeholder: BLURRED)
      }
      project_type
    }
  }
`
