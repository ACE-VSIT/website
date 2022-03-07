import styled from "styled-components"
import CloseOutlined from "@ant-design/icons/CloseOutlined"

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  gap: 1rem;

  @media (max-width: 768px) {
      flex-direction: column;
  }
`
export const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  padding: 0.5rem 0 0 0;
`

export const Close = styled(CloseOutlined)`
  transition: 0.5s all ease-in-out;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.font};
  height: 5rem;
  line-height: 5rem;
  padding: 0.25rem 0;
  top: 0%;
  right: 1.5rem;
  position: absolute;

  &:hover,
  &:focus {
    color: ${props => props.theme.active};
  }

  @media (max-width: 330px) {
    height: 4rem;
    font-size: 1.25rem;
    margin-left: 95%;
    line-height: 4rem;
  }
`