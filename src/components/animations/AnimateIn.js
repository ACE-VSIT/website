import React, { useRef } from "react"
import styled from "styled-components"
import useOnScreen from "../../hooks/useOnScreen"

export default function AnimateIn({ ref, duration = 375, delay = 0, ...rest }) {
  const animateInRef = useRef()
  const onScreen = useOnScreen(animateInRef)

  return (
    <AnimationContainer
      style={{
        transition: `opacity ${duration}ms, transform ${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: onScreen ? 1 : 0,
        transform: `translateY(${onScreen ? 0 : 50}px)`,
      }}
      {...rest}
      ref={animateInRef}
    />
  )
}

const AnimationContainer = styled.div``
