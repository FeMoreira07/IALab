import { createGlobalStyle } from "styled-components";
import { theme } from "./ThemeStyle";

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap');

  body {
    font-family: ${theme.font.rubik};
    font-weight: 700;
    background-color: ${theme.colors.darkBlue};
    color: ${theme.colors.white}
  }
`;

export default GlobalStyle;
