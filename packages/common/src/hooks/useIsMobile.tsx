import { useEffect, useState } from 'react'
import useWindowSize from './useWindowSize'

const useIsMobile = () => {
  const { width } = useWindowSize()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (width < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [width])

  return isMobile
}

export default useIsMobile
