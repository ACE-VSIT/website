import React from "react"
import styled from "styled-components"
import ArrowUpOutlined from "@ant-design/icons/ArrowUpOutlined"
import { FlexCenter } from "../../styles/sharedStyles"

export default function MoveTop() {
  const handleScrollTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <MoveTopWrapper>
      <ArrowUpOutlined onClick={() => handleScrollTop()} />
    </MoveTopWrapper>
  )
}

const MoveTopWrapper = styled(FlexCenter)`
  width: 3rem;
  height: 3rem;
  border: 1px solid ${props => props.theme.font + "75"};
  background: ${props => props.theme.bg};
  cursor: pointer;
  position: fixed;
  right: 0.75rem;
  bottom: 1rem;
  transition: 0.375s all ease-in-out;
  z-index: 1020;

  * {
    transition: 0.375s all ease-in-out;
    font-size: 1.75rem;
    color: ${props => props.theme.font + "75"};
  }

  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.active};

    * {
      color: ${props => props.theme.active};
    }
  }
`
