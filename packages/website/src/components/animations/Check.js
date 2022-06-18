import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import checkLight from './check_light.json'
import checkDark from './check_dark.json'
import Lottie from 'react-lottie'

export default function Check({ loop = true, autoplay = true }) {
  const { isDarkTheme } = useContext(ThemeContext)
  const defaultOptions = {
    loop,
    autoplay,
    animationData: isDarkTheme ? checkDark : checkLight,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div>
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  )
}
