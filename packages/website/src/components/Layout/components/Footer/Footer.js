import React, { useContext } from 'react'
import {
  FooterBottom,
  FooterItemsWrapper,
  FooterLinks,
  FooterSubscribe,
  FooterSubscribeSendBtn,
  FooterTitle,
  FooterWrapper,
} from './FooterElements'
import { ThemeContext } from '../../../../context/ThemeContext'
import { StaticImage } from 'gatsby-plugin-image'

export default function Footer({ itemList, footerList }) {
  const { isDarkTheme } = useContext(ThemeContext)
  return (
    <>
      <FooterWrapper>
        <FooterItemsWrapper>
          {isDarkTheme ? (
            <StaticImage
              placeholder="BLURRED"
              src={'../../../../images/ACELogoWhite.svg'}
              alt="ACE Logo"
              width={175}
            />
          ) : (
            <StaticImage
              placeholder="BLURRED"
              src={'../../../../images/ACELogoBlack.svg'}
              alt="ACE Logo"
              width={175}
            />
          )}
          <FooterTitle subtitle={true}>
            To know more about the upcoming events and opportunities, connect
            with us via our newsletter
          </FooterTitle>
          <div>
            <FooterSubscribe placeholder={'Your Email Address'} />
            <FooterSubscribeSendBtn />
          </div>
        </FooterItemsWrapper>
        <FooterItemsWrapper>
          {itemList?.slice(0, -2).map((e, key) => {
            return (
              <div key={key}>
                <FooterLinks
                  to={`/${e.navbar_link.url.replace(/(^\w+:|^)\/\//, '')}`}
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
                  to={`/${e.footer_item_link.url.replace(/(^\w+:|^)\/\//, '')}`}
                >
                  {e.footer_item_name.text}
                </FooterLinks>
              </div>
            )
          })}
        </FooterItemsWrapper>
        <FooterBottom>
          © 2022 ACE-VSIT, All Rights Reserved |
          <a
            href="https://github.com/ACE-VSIT/website"
            target="_balnk"
            style={{ textDecoration: 'none' }}
          >
            &nbsp;Github
          </a>
        </FooterBottom>
      </FooterWrapper>
    </>
  )
}
