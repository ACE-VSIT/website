import React, { useContext } from "react"
import { loginWithGoogleAccount } from "../../../../firebase"
import { AuthContext } from "../../../../context/auth/AuthContext"
import { ButtonWrapper } from "./LoginElements"
import GoogleOutlined from "@ant-design/icons/GoogleOutlined"

export default function LoginWithGoogle() {
  let { user, dispatch } = useContext(AuthContext)
  
  const handleGoogleLogin = e => {
    e.preventDefault()
    loginWithGoogleAccount(user, dispatch)
  }

  return (
    <div>
      <ButtonWrapper onClick={handleGoogleLogin} md>
        <GoogleOutlined />
        <span>Login with Google</span>
      </ButtonWrapper>
    </div>
  )
}
