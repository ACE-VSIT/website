import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'remote/Button'
import {
  // ButtonComponent,
  LoginHeading,
  LoginImage,
  LoginWrapper,
  Wrapper,
} from '../components/index-elements.styles'
import { useAuth } from '../contexts/AuthContext'
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
    <Wrapper style={{ justifyContent: 'center' }}>
      <LoginWrapper>
        <LoginImage
          src="https://vips-ace.cdn.prismic.io/vips-ace/736fd14a-7155-475e-b1fd-1e0bdd52df18_AceLogo.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=962&h=845"
          alt=""
        />
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
