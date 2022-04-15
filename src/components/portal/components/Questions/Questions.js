import React from "react"
import Config from "./QuestionsConfig.json"
import { navigate } from "gatsby"
import { Heading } from "../../../../styles/sharedStyles"
import { QuestionWrapper, QuestionBox, Container } from "./QuestionElements"

export function Questions() {
  return (
    <Container>
      <Heading>Round 1</Heading>
      <QuestionWrapper>
        {Config.questions.sort().map((e, index) => (
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
