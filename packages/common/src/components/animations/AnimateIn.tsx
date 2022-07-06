import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import useOnScreen from '../../hooks/useOnScreen'

export interface IAnimateIn {
  delay?: number
  duration?: number
  enableScroll?: boolean
  type?: 'FadeUp' | 'FadeDown' | 'FadeIn'
  children?: React.ReactNode
  onClick?: () => void
  style?: React.CSSProperties
  componentRef?: React.MutableRefObject<any>
}

interface IPreventScroll {
  preventDefault: () => void
  stopPropagation: () => void
}

export default function AnimateIn({
  componentRef,
  children,
  delay = 0,
  duration = 375,
  type = 'FadeIn',
  enableScroll = true,
  onClick,
  ...rest
}: IAnimateIn) {
  const animateInRef: React.MutableRefObject<any> = useRef()
  const onScreen = useOnScreen(animateInRef)

  const fadeUp = {
    opacity: onScreen ? 1 : 0,
    transitionDelay: `${delay}ms`,
    transform: `translateY(${onScreen ? 0 : 50}px)`,
    transition: `opacity ${duration}ms, transform ${duration}ms`,
  }

  const fadeDown = {
    opacity: onScreen ? 1 : 0,
    transitionDelay: `${delay}ms`,
    transform: `translateY(${onScreen ? 0 : -50}px)`,
    transition: `opacity ${duration}ms, transform ${duration}ms`,
  }

  const fadeIn = {
    opacity: onScreen ? 1 : 0,
    transitionDelay: `${delay}ms`,
    transition: `opacity ${duration}ms, transform ${duration}ms`,
  }

  const animationType =
    type === 'FadeUp' ? fadeUp : type === 'FadeIn' ? fadeIn : fadeDown

  useEffect(() => {
    function preventScroll(e: IPreventScroll) {
      e.preventDefault()
      e.stopPropagation()

      return false
    }
    !enableScroll &&
      document
        .querySelector('#animateFixScrollIssue')!
        .addEventListener('wheel', preventScroll, { passive: false })
  }, [enableScroll])

  return (
    <AnimationContainer
      onClick={onClick}
      style={animationType}
      id={`animateFixScrollIssue`}
      {...rest}
      ref={animateInRef}
    >
      {children}
    </AnimationContainer>
  )
}

const AnimationContainer = styled.div``
