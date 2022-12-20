import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext('')

export function ThemeContextProvider ({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  useEffect(() => {
    localStorage.getItem('ace-webiste-theme') === 'dark' && setIsDarkTheme(true)
  }, [])

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
