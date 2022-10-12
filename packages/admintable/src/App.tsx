import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import SignOut from './pages/SignOut'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './utils/PrivateRoutes'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { darkTheme, GlobalStyle, lightTheme } from './theme/GlobalStyles'
import useThemeContext from './contexts/ThemeContext'
import NotFound from './pages/NotFound'

const App: React.FC = () => {
  const user = useAuth()
  const { isDarkTheme, setIsDarkTheme } = useThemeContext()

  useEffect(() => {
    const res = localStorage.getItem('isDarkTheme') === 'true'
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
                  authenticationPath="/"
                  outlet={<Dashboard />}
                />
              }
            />
            <Route
              path="signout"
              element={
                <PrivateRoute
                  isAuthenticated={user}
                  authenticationPath="/"
                  outlet={<SignOut />}
                />
              }
            />
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
