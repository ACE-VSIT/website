import { navigate } from 'gatsby'
import React from 'react'
import { Heading } from '../../../../styles/sharedStyles'
import { Container, QuestionBox, QuestionWrapper } from './QuestionElements'
import Config from './QuestionsConfig.json'

export function Questions () {
  return (
    <Container>
      <Heading>Task Submission</Heading>
      <QuestionWrapper>
        {Config.questions.map((e, index) => (
          <QuestionBox
            onClick={() => navigate(`/register/question/${e.id}`)}
            key={index}
          >
            {e.name}
          </QuestionBox>
        ))}
      </QuestionWrapper>
    </Container>
  )
}
