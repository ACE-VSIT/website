import { Navigate } from 'react-router-dom'
import { authContextType, useAuth } from '../contexts/AuthContext'

export type ProtectedRouteProps = {
  isAuthenticated: authContextType
  authenticationPath: string
  outlet: JSX.Element
}

export default function ProtectedRoute({
  authenticationPath,
  outlet,
}: ProtectedRouteProps) {
  const { user } = useAuth()

  if (user.admin && user.email && user.name && user.uid) {
    return outlet
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />
  }
}
