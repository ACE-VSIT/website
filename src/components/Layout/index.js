import * as React from "react"
import PropTypes from "prop-types"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, lightTheme, darkTheme } from "./themes/GlobalStyles"
import { Container } from "./components/container"

const Layout = ({ children, navbar }) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false)

  React.useEffect(() => {
    let theme = localStorage.getItem("theme")
    if (theme) {
      if (theme === "dark") {
        setIsDarkTheme(true)
      } else {
        setIsDarkTheme(false)
      }
    }
  }, [])

  return (
    <ThemeProvider theme={!isDarkTheme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Navbar
        sliderInfo={navbar && navbar[0]?.primary?.navbar_slider_info.richText}
        itemList={navbar && navbar[1]?.items}
        socialList={navbar && navbar[2]?.items}
        img={
          navbar && !isDarkTheme
            ? navbar[0]?.primary?.navbar_logo
            : navbar[0]?.primary?.navbar_logo_dark
        }
        isDarkTheme={isDarkTheme}
        setIsDarkTheme={setIsDarkTheme}
      />
      <Container>{children}</Container>
      <Footer
        itemList={navbar && navbar[1]?.items}
        footerList={navbar && navbar[3]?.items}
        isDarkTheme={isDarkTheme}
      />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
