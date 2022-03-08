import styled, { css } from "styled-components"
import { FlexCenter } from "../../styles/sharedStyles"
import LinkedinOutlined from "@ant-design/icons/LinkedinOutlined"
import GithubOutlined from "@ant-design/icons/GithubOutlined"
import TwitterOutlined from "@ant-design/icons/TwitterOutlined"
import InstagramOutlined from "@ant-design/icons/InstagramOutlined"
import FacebookOutlined from "@ant-design/icons/FacebookOutlined"
import BehanceOutlined from "@ant-design/icons/BehanceOutlined"
import DribbbleOutlined from "@ant-design/icons/DribbbleOutlined"

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

  ${({ fixed }) =>
    fixed &&
    css`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
    `}

  @media (max-width: 768px) {
    width: 90vw;
  }

  ${({ detailed }) =>
    detailed &&
    css`
      min-width: 55rem;
      max-width: 62rem;
      /* gap: 1.5rem; */
      height: 30rem;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      padding: 0.5rem;
      cursor: default;
      border: 1px solid ${props => props.theme.font + "25"};
      z-index: 1005;
      
      ${MemberImageWrapper} {
        width: 20rem;
        height: 20rem;
        overflow: hidden;
        padding: 0;
      }

      @media (max-width: 768px) {
        min-width: 90vw;
        max-width: 95vw;
        flex-direction: column;
        height: 80vh;

        ${MemberImageWrapper} {
          padding-top: 0.5rem;
          width: 80vw;
          height: 80vw;
        }
      }

      @media (max-width: 375px) {
        height: 90%;
        transform: translate(-50%, -50%);
      }

      @media (max-width: 320px) {
        height: 95%;
        transform: translate(-50%, -50%);

        ${MemberImageWrapper} {
          padding-top: 0.5rem;
          width: 80vw;
          height: 70vw;
        }
      }
    `}
`
export const MemberImageWrapper = styled.div`
  padding: 0.5rem;
`
export const MemberInfoWrapper = styled(FlexCenter)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: calc(8rem / 2) 1rem;
  justify-content: flex-start;
  gap: 1rem;
  align-items: flex-start;

  div {
    * {
      padding: 0;
    }

    div {
      @media (max-width: 768px) {
        flex-direction: row;
        width: 100%;
        align-items: flex-start !important;
        justify-content: center !important;
        min-height: 4rem !important;
        max-height: 5rem !important;
      }

      @media (max-width: 320px) {
        min-height: 12rem !important;
        max-height: 14rem !important;
      }
    }
    h1:nth-of-type(1) {
      font-size: 1.65rem;
    }
    h1:nth-of-type(2) {
      font-size: 1.15rem;
    }
  }

  @media (max-width: 768px) {
    width: 90vw;
    gap: 0;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;

    div {
      * {
        padding: 0;
        text-align: center;
      }
    }
  }
`
export const MemberName = styled.h1`
  font-size: 1.25rem;
  font-weight: 400;
  text-align: left;
  padding: 0 0.75rem;
  width: 100%;
  letter-spacing: 0.25px;
  white-space: nowrap;
`
export const MemberTitle = styled(MemberName)`
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
export const MemberInfo = styled.p`
  font-size: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    overflow: scroll;
    padding: 0.5rem 0;
  }
`
export const LinkedIn = styled(LinkedinOutlined)`
  font-size: 1.5rem;
  cursor: pointer;
`
export const Github = styled(GithubOutlined)`
  font-size: 1.5rem;
  cursor: pointer;
`
export const Twitter = styled(TwitterOutlined)`
  font-size: 1.5rem;
  cursor: pointer;
`
export const Instagram = styled(InstagramOutlined)`
  font-size: 1.5rem;
  cursor: pointer;
`
export const Facebook = styled(FacebookOutlined)`
  font-size: 1.5rem;
  cursor: pointer;
`
export const Behance = styled(BehanceOutlined)`
  font-size: 1.5rem;
  cursor: pointer;
`
export const Globe = styled(DribbbleOutlined)`
  font-size: 1.5rem;
  cursor: pointer;
  transform: rotate(22.5deg);
`
