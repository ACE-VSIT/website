import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ButtonComponent,
  LoginHeading,
  LoginWrapper,
  Wrapper,
} from '../components/Index/IndexElements'
import { useAuth } from '../context/AuthContext'
import { loginWithGoogleAccount } from '../utils/firebase'

const Index: React.FC = () => {
  const navigate = useNavigate()
  const { login, user, loading } = useAuth()

  useEffect(() => {
    if (user.admin && user.email && user.name && user.uid) {
      navigate('/dashboard')
    }
  }, [user, navigate])

  return (
    <Wrapper>
      <LoginWrapper>
        <LoginHeading>Admin Panel</LoginHeading>
        <ButtonComponent
          md={true}
          onClick={() => loginWithGoogleAccount(login)}
        >
          {!loading ? 'Sign In' : 'Loading...'}
        </ButtonComponent>
      </LoginWrapper>
    </Wrapper>
  )
}

export default Index
