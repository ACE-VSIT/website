import React, { createContext, useState } from "react"

export const ThemeContext = createContext()

export function ThemeContextProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
