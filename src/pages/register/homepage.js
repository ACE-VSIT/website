import * as React from "react"
import PortalForm from "../../components/portal"
import { signInStatus } from "../../firebase"
import { AuthContext } from "../../context/auth/AuthContext"
import Loading from "../../components/animations/Loading"

const Homepage = () => {
  const { dispatch, loading } = React.useContext(AuthContext)

  React.useEffect(() => {
    signInStatus(dispatch)
  }, [dispatch])

  return <>{loading ? <Loading /> : <PortalForm />}</>
}

export default Homepage
