import React, { useContext } from "react"
import { loginWithGoogleAccount } from "../../../../firebase"
import { AuthContext } from "../../../../context/auth/AuthContext"
import { ButtonWrapper } from "./LoginElements"
import GoogleOutlined from "@ant-design/icons/GoogleOutlined"

export default function LoginWithGoogle() {
  let { dispatch } = useContext(AuthContext)

  const handleGoogleLogin = e => {
    e.preventDefault()
    loginWithGoogleAccount(dispatch)
  }

  return (
    <div>
      <ButtonWrapper onClick={handleGoogleLogin} md={"md"}>
        <GoogleOutlined />
        <span>Login with Google</span>
      </ButtonWrapper>
    </div>
  )
}
