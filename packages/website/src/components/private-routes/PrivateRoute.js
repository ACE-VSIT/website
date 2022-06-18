import React, { useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { navigate } from "gatsby"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const [check, setCheck] = useState(false)
  const auth = getAuth()
  onAuthStateChanged(auth, user => {
    if (!user && location.pathname !== `/register/questions`) {
      navigate("/register/")
    } else {
      setCheck(true)
    }
  })
  return check && <Component {...rest} />
}
export default PrivateRoute
