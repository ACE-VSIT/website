import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'
import { signInStatus } from '../utils/firebase'

export type authContextType = {
  user: userContextType
  login: (user: userContextType) => void
  logout: () => void
  loading: boolean
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>
}

export type userContextType = {
  email: string | null
  admin: string | null
  name: string | null
  uid: string | null
  photoUrl: string | null
}

const authContextDefaultValues: authContextType = {
  user: {
    email: null,
    admin: null,
    name: null,
    uid: null,
    photoUrl: null,
  },
  login: () => {},
  logout: () => {},
  loading: false,
}

const AuthContext = createContext<authContextType>(authContextDefaultValues)

export function useAuth() {
  return useContext(AuthContext)
}

type Props = {
  children: ReactNode
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<userContextType>({
    email: null,
    admin: null,
    name: null,
    uid: null,
    photoUrl: null,
  })
  const [loading, setLoading] = useState(false)

  const login = (user: userContextType) => {
    setUser(user)
  }

  const logout = () => {
    setUser({
      email: null,
      admin: null,
      name: null,
      uid: null,
      photoUrl: null,
    })
  }

  const value = {
    user,
    login,
    logout,
    loading,
    setLoading,
  }

  useEffect(() => {
    signInStatus(login, setLoading)
  }, [])

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  )
}
