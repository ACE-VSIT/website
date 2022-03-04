import * as React from "react"
import PropTypes from "prop-types"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, lightTheme } from "./themes/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
