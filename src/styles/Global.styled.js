import reboot from "styled-reboot";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Normalize css */
  ${reboot}

  /* TODO: Add global styling */

  body {
    background: ${({ theme }) => theme.darkBlue};
  }
`;

export default GlobalStyle;
