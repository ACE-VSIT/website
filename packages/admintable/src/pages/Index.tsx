import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  // ButtonComponent,
  LoginHeading,
  LoginWrapper,
  Wrapper,
} from '../components/Index/index-elements.styled'
import { useAuth } from '../context/AuthContext'
import Button from 'remote/Button'
import { loginWithGoogleAccount } from '../utils/firebase'

const Index: React.FC = () => {
  const navigate = useNavigate()
  const { login, user, loading, setLoading } = useAuth()

  useEffect(() => {
    if (user.admin && user.email && user.name && user.uid) {
      navigate('/dashboard')
    }
  }, [user, navigate])

  return (
    <Wrapper>
      <LoginWrapper>
        <LoginHeading>Admin Panel</LoginHeading>
        <Button
          md={true}
          value={!loading ? 'Sign In' : 'Loading...'}
          onClick={() => loginWithGoogleAccount(login, setLoading!)}
        />
      </LoginWrapper>
    </Wrapper>
  )
}

export default Index
