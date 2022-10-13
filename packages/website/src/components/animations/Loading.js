import React from 'react'
import loading from './loading.json'
import Lottie from 'react-lottie'
import { FlexCenter } from '../../styles/sharedStyles'

export default function Loading ({ loop = true, autoplay = true }) {
  const defaultOptions = {
    loop,
    autoplay,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <FlexCenter>
      <Lottie options={defaultOptions} height={200} width={200} />
    </FlexCenter>
  )
}
