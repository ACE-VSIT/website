import styled from "styled-components"
import { FlexCenter } from "../../../styles/sharedStyles"
import PlusOutlined from "@ant-design/icons/PlusOutlined"

export const CounterWrapper = styled(FlexCenter)`
  width: 100vw;
  height: 30rem;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    row-gap: 5rem;
  }
`
export const CounterValueWrapper = styled(FlexCenter)`
  flex-wrap: wrap;
  width: 20vw;
  height: 7rem;
  gap: 0.25rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 45vw;
    height: 100%;
  }
`
export const CounterValue = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  margin-right: -0.5rem;

  * {
    font-size: 2rem;
    margin-bottom: 0.25rem;
    color: ${props => props.theme.active};
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    white-space: nowrap;
  }
`
export const CounterValueSubtitle = styled.p`
  font-size: 1.15rem;
  font-weight: 400;
  width: 100%;
  letter-spacing: 0.5px;
  text-align: center;
`
export const CounterPlus = styled(PlusOutlined)``
