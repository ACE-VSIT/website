import React from "react"
import {
  FooterBottom,
  FooterItemsWrapper,
  FooterLinks,
  FooterSubscribe,
  FooterSubscribeSendBtn,
  FooterTitle,
  FooterWrapper,
} from "./FooterElements"
import { StaticImage } from "gatsby-plugin-image"

export default function Footer({ itemList, footerList, isDarkTheme }) {
  return (
    <>
      <FooterWrapper>
        <FooterItemsWrapper>
          <StaticImage
            placeholder="BLURRED"
            src={"../../../../images/ACELogoBlack.svg"}
            alt="ACE Logo"
            width={175}
            imgStyle={{ filter: isDarkTheme ? "invert(1)" : "" }}
          />
          <FooterTitle subtitle={true}>
            To know more about the upcoming events and opportunities, connect
            with us via our newsletter
          </FooterTitle>
          <div>
            <FooterSubscribe placeholder={"Your Email Address"} />
            <FooterSubscribeSendBtn />
          </div>
        </FooterItemsWrapper>
        <FooterItemsWrapper>
          {itemList?.map((e, key) => {
            return (
              <div key={key}>
                <FooterLinks
                  to={`/${e.navbar_link.url.replace(/(^\w+:|^)\/\//, "")}`}
                >
                  {e.navbar_link_name.text}
                </FooterLinks>
              </div>
            )
          })}
        </FooterItemsWrapper>
        <FooterItemsWrapper mobileMb>
          {footerList?.map((e, key) => {
            return (
              <div key={key}>
                <FooterLinks
                  to={`/${e.footer_item_link.url.replace(/(^\w+:|^)\/\//, "")}`}
                >
                  {e.footer_item_name.text}
                </FooterLinks>
              </div>
            )
          })}
        </FooterItemsWrapper>
        <FooterBottom>© 2022 ACE-VIST, All Rights Reserved</FooterBottom>
      </FooterWrapper>
    </>
  )
}
