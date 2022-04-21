import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import useOnScreen from "../../hooks/useOnScreen"

export default function AnimateIn({
  ref,
  enableScroll = true,
  duration = 375,
  delay = 0,
  ...rest
}) {
  const animateInRef = useRef()
  const onScreen = useOnScreen(animateInRef)

  useEffect(() => {
    function preventScroll(e) {
      e.preventDefault()
      e.stopPropagation()

      return false
    }
    !enableScroll &&
      document
        .querySelector("#animateFixScrollIssue")
        .addEventListener("wheel", preventScroll, { passive: false })
  }, [enableScroll])

  return (
    <AnimationContainer
      style={{
        transition: `opacity ${duration}ms, transform ${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: onScreen ? 1 : 0,
        transform: `translateY(${onScreen ? 0 : 50}px)`,
      }}
      id={`animateFixScrollIssue`}
      {...rest}
      ref={animateInRef}
    />
  )
}

const AnimationContainer = styled.div``
