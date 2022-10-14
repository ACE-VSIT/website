import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    console.log('working')
    navigate('/')
  }, [navigate])

  return <></>
}

export default NotFound
