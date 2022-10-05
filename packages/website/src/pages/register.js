import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/SEO'
import { Router } from '@reach/router'
import Homepage from './register/homepage'
import Questions from './register/question'
import Timer from '../components/timer/Timer'
import Route from '../components/routes/Routes'
import Layout from '../components/Layout/index'
import QuestionType from '../templates/QuestionsType'
import PrivateRoute from '../components/private-routes/PrivateRoute'

const Register = ({ data }) => {
  const [hasEventBegun, setHasEventBegun] = React.useState(0) // 0 => not started, 1 => started, 2 => ended

  const nav = data?.prismicLayout?.data?.body
  const registrationEndDate =
    data?.prismicQuestions?.data?.registration_end_date
  const registrationStartDate =
    data?.prismicQuestions?.data?.registration_start_date
  const registrationToBeStartedText =
    data?.prismicQuestions?.data?.registration_to_be_started_text?.text
  const registrationClosedText =
    data?.prismicQuestions?.data?.registration_closed_text?.text
  const questionData = data?.prismicQuestions?.data?.body1[0]?.items
  const showRegisterPage = data?.prismicQuestions?.data?.show_register_page

  const dateComparisonChecker = React.useCallback((startDate, endDate) => {
    const today = new Date() // current date
    const start = new Date(startDate) // event start date
    const end = new Date(endDate) // event end date

    if (today < start) {
      // if current date is before start date
      return setHasEventBegun(0)
    } else if (today >= start && today <= end) {
      // if current date is between start and end date
      return setHasEventBegun(1)
    } else if (today > end) {
      // if current date is after end date
      return setHasEventBegun(2)
    }
  }, [])

  React.useEffect(() => {
    dateComparisonChecker(registrationStartDate, registrationEndDate)
  }, [dateComparisonChecker, registrationEndDate, registrationStartDate])

  return (
    <Layout navbar={nav}>
      <Seo title={showRegisterPage ? 'Regsiter' : 'Closed'} />
      <Router>
        {hasEventBegun === 1 && ( // if event has started
          <>
            <PrivateRoute
              path="/register/question/:id"
              component={QuestionType}
              data={questionData}
            />
            <PrivateRoute path="/register/question" component={Questions} />
          </>
        )}
        <Route
          path="/register"
          endDate={registrationEndDate}
          startDate={registrationStartDate}
          hasEndedText={registrationClosedText ?? 'Registration are closed now'}
          toBeStartedText={
            registrationToBeStartedText ?? 'Registration has not started'
          }
          // if event has started, show homepage, else show timer
          component={hasEventBegun === 1 ? Homepage : Timer}
        />
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
        registration_end_date
        registration_start_date
        show_register_page
        registration_closed_text {
          text
        }
        registration_to_be_started_text {
          text
        }
      }
    }
  }
`
