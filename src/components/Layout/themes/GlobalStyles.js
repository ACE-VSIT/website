import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  bg: "#FFFFFF",
  font: "#324861",
  primary: "#EBF6FE",
  secondary: "#F3F0EC",
  active: "#FD925F",
}

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    transition: all 0.375 ease-in-out;
    font-family: "Roboto Slab";
    overflow: hidden;
  }
  body {
    background-color:  ${props => props.theme.bg};
    color: ${props => props.theme.font};
  }
`
