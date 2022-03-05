import * as React from "react"
import PropTypes from "prop-types"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, lightTheme } from "./themes/GlobalStyles"
import { Container } from "./components/container"

const Layout = ({ children, navbar }) => {

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Navbar data={navbar} />
      <Container>{children}</Container>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
