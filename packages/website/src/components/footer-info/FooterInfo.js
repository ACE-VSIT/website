import React from "react"
import AnimateIn from "../animations/AnimateIn"
import { FooterWrapper, FooterSummary } from "./FooterInfoElements"
import ButtonComponent from "../button/Button"

export default function FooterInfo({ btn, showBtn, info }) {

  return (
    <AnimateIn delay={500} duration={500}>
      <FooterWrapper>
        {info && <FooterSummary>{info}</FooterSummary>}
        {showBtn && btn && (
          <ButtonComponent to={"/magazine"} sm value={"Magazine"} />
        )}
      </FooterWrapper>
    </AnimateIn>
  )
}
