import styled from "styled-components"
import { FlexCenter } from "../../../../styles/sharedStyles"

export const Container = styled(FlexCenter)`
  flex-direction: column;
  margin: 2.5rem 0;
  gap: 2.5rem;
`

export const QuestionWrapper = styled(FlexCenter)`
  flex-wrap: wrap;
  flex-direction: row;
`
export const QuestionBox = styled.section`
  width: 25rem;
  height: 15rem;
  display: flex;
  cursor: pointer;
  font-size: 1.25rem;
  align-items: center;
  outline-offset: -10px;
  justify-content: center;
  transition: 0.375s all ease-in-out;
  background: ${props => props.theme.font + 25};
  outline: 1px solid ${props => props.theme.font + 75};

  &:hover,
  &:focus {
    outline-offset: -1px;
  }

  @media (max-width: 768px) {
    width: 90vw;
    height: 30vh;
  }
`
