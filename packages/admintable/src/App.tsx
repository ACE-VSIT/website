import Index from './pages/Index'
import React, { useEffect } from 'react'
import SignOut from './pages/SignOut'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './utils/PrivateRoutes'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import { darkTheme, GlobalStyle, lightTheme } from './theme/GlobalStyles'
import useThemeContext from './context/ThemeContext'

const App: React.FC = () => {
  const user = useAuth()
  const { isDarkTheme, setIsDarkTheme } = useThemeContext()

  useEffect(() => {
    const res = localStorage.getItem('isDarkTheme') === 'true' ? true : false
    setIsDarkTheme(res)
  }, [setIsDarkTheme])

  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={!isDarkTheme ? lightTheme : darkTheme}>
          <GlobalStyle />
          <Routes>
            <Route
              path="dashboard"
              element={
                <PrivateRoute
                  isAuthenticated={user}
                  authenticationPath={'/'}
                  outlet={<Dashboard />}
                />
              }
            />
            <Route
              path="signout"
              element={
                <PrivateRoute
                  isAuthenticated={user}
                  authenticationPath={'/'}
                  outlet={<SignOut />}
                />
              }
            />
            <Route path="/" element={<Index />} />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
