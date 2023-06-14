import { createGlobalStyle } from "styled-components";
import { theme } from "./ThemeStyle";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  body {
    font-family: ${theme.fonts.regular};
    background-color: ${theme.colors.darkBlue};
    color: ${theme.colors.white}
  }
`;

export default GlobalStyle;
