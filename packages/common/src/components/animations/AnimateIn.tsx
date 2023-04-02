/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import useOnScreen from '../../hooks/useOnScreen';

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

const AnimationContainer = styled.div``;

export default function AnimateIn({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentRef,
  children,
  delay = 0,
  duration = 375,
  type = 'FadeIn',
  enableScroll = true,
  onClick,
  ...rest
}: IAnimateIn) {
  const animateInRef: React.MutableRefObject<any> = useRef();
  const onScreen = useOnScreen(animateInRef);

  const fadeUp = {
    opacity: onScreen ? 1 : 0,
    transitionDelay: `${delay}ms`,
    transform: `translateY(${onScreen ? 0 : 50}px)`,
    transition: `opacity ${duration}ms, transform ${duration}ms`,
  };

  const fadeDown = {
    opacity: onScreen ? 1 : 0,
    transitionDelay: `${delay}ms`,
    transform: `translateY(${onScreen ? 0 : -50}px)`,
    transition: `opacity ${duration}ms, transform ${duration}ms`,
  };

  const fadeIn = {
    opacity: onScreen ? 1 : 0,
    transitionDelay: `${delay}ms`,
    transition: `opacity ${duration}ms, transform ${duration}ms`,
  };

  let animationType;

  if (type === 'FadeUp') {
    animationType = fadeUp;
  } else if (type === 'FadeIn') {
    animationType = fadeIn;
  } else {
    animationType = fadeDown;
  }

  useEffect(() => {
    function preventScroll(e: IPreventScroll) {
      e.preventDefault();
      e.stopPropagation();

      return false;
    }
    // eslint-disable-next-line no-unused-expressions
    !enableScroll
      && document
        .querySelector('#animateFixScrollIssue')
        ?.addEventListener('wheel', preventScroll, { passive: false });
  }, [enableScroll]);

  return (
    <AnimationContainer
      onClick={onClick}
      style={animationType}
      id="animateFixScrollIssue"
      {...rest}
      ref={animateInRef}
    >
      {children}
    </AnimationContainer>
  );
}
