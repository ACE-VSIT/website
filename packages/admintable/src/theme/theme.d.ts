export interface ITheme {
  bg: string;
  font: string;
  primary: string;
  secondary: string;
  active: string;
  success: string;
}

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
