import styled from "styled-components"
import { FlexCenter } from "../../styles/sharedStyles"
import LinkedinOutlined from "@ant-design/icons/LinkedinOutlined"
import GithubOutlined from "@ant-design/icons/GithubOutlined"
import TwitterOutlined from "@ant-design/icons/TwitterOutlined"
import InstagramOutlined from "@ant-design/icons/InstagramOutlined"
import FacebookOutlined from "@ant-design/icons/FacebookOutlined"
import BehanceOutlined from "@ant-design/icons/BehanceOutlined"

export const MemberCardWrapper = styled(FlexCenter)`
  flex-direction: column;
  width: 20vw;
  height: 25rem;
  overflow: hidden;
  background: ${props => props.theme.bg};
  gap: 0.15rem;
  cursor: pointer;

  * {
    overflow: hidden;
  }

  @media (max-width: 768px) {
    width: 90vw;
  }
`
export const MemberImageWrapper = styled.div`
  padding: 0.5rem;
`
export const MemberName = styled.h1`
  font-size: 1.25rem;
  font-weight: 400;
  text-align: left;
  padding: 0 0.75rem;
  width: 100%;
  letter-spacing: 0.25px;
`
export const MemberTitle = styled(MemberName)`
  font-size: 0.9rem;
  letter-spacing: 0.5px;
`
export const LinkedIn = styled(LinkedinOutlined)``
export const Github = styled(GithubOutlined)``
export const Twitter = styled(TwitterOutlined)``
export const Instagram = styled(InstagramOutlined)``
export const Facebook = styled(FacebookOutlined)``
export const Behance = styled(BehanceOutlined)``
