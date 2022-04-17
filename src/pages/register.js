import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/SEO"
import { Router } from "@reach/router"
import Homepage from "./register/homepage"
import Questions from "./register/question"
import Route from "../components/routes/Routes"
import Layout from "../components/Layout/index"
import QuestionType from "../templates/QuestionsType"
import PrivateRoute from "../components/private-routes/PrivateRoute"

const Register = ({ data }) => {
  const nav = data?.prismicLayout?.data?.body

  const questionData = data?.prismicQuestions?.data?.body1[0]?.items

  return (
    <Layout navbar={nav}>
      <Seo title="Regsiter" />
      <Router>
        <PrivateRoute
          path="/register/question/:id"
          component={QuestionType}
          data={questionData}
        />
        <PrivateRoute path="/register/question" component={Questions} />
        <Route path="/register" component={Homepage} />
      </Router>
    </Layout>
  )
}
export default Register

export const Regsiter = graphql`
  query pegsiterPage {
    prismicLayout {
      ...navbarInfo
    }
    prismicQuestions {
      data {
        title {
          text
        }
        subtitle {
          text
        }
        body {
          ... on PrismicQuestionsDataBodyWebsiteMetaInfo {
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
        rules_of_page {
          text
        }
        body1 {
          ... on PrismicQuestionsDataBody1QuestionSlice {
            items {
              difficulty_level
              question_category
              question_info {
                richText
              }
              question_name {
                text
              }
              show_question
            }
          }
        }
      }
    }
  }
`
