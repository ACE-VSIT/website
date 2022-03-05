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
      <Navbar
        sliderInfo={navbar && navbar[0]?.primary?.navbar_slider_info.richText}
        itemList={navbar && navbar[1]?.items}
        socialList={navbar && navbar[2]?.items}
        img={navbar && navbar[0]?.primary?.navbar_logo}
      />
      <Container>{children}</Container>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
