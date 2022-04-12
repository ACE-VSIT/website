import "@fontsource/roboto-slab/100.css"
import "@fontsource/roboto-slab/200.css"
import "@fontsource/roboto-slab/300.css"
import "@fontsource/roboto-slab/400.css"
import "@fontsource/roboto-slab/500.css"
import "@fontsource/roboto-slab/600.css"
import "@fontsource/roboto-slab/700.css"
import "@fontsource/roboto-slab/800.css"
import "@fontsource/roboto-slab/900.css"
import React from "react"
import { ThemeContextProvider } from "./src/context/ThemeContext"
import { AuthContextProvider } from "./src/context/auth/AuthContext"

export const wrapRootElement = ({ element }) => (
  <AuthContextProvider>
    <ThemeContextProvider>{element}</ThemeContextProvider>
  </AuthContextProvider>
)
