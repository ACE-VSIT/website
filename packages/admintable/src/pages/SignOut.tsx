import React from 'react'
import { signOutUser, getTableData } from '../utils/firebase'
import { useAuth } from '../context/AuthContext'
import {
  ButtonComponent,
  LoginHeading,
  LoginWrapper,
  Wrapper,
} from '../components/Index/index-elements.styled'

const SignOut: React.FC = () => {
  const { logout, user } = useAuth()
  const getData = async () => {
    const data = await getTableData(user)
    data?.forEach(e => {
      console.log(e)
    })
  }

  return (
    <Wrapper>
      <LoginWrapper>
        <LoginHeading>Sign Out</LoginHeading>
        <ButtonComponent md={true} onClick={() => signOutUser(logout)}>
          SignOut
        </ButtonComponent>
        <ButtonComponent md={true} onClick={() => getData()}>
          Get UserData
        </ButtonComponent>
      </LoginWrapper>
    </Wrapper>
  )
}

export default SignOut
