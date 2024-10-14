import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'IRANSansWeb';
    src: url('/fonts/IRANSansWeb(FaNum)_Light.woff') format('woff');
    font-weight: 300; /* Light weight */
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'IRANSansWeb', sans-serif; 
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    margin: 0 auto;
    display: flex;
    align-items:center;
    justify-content:center;
    place-items: center;
    min-width: 100%;
    min-height: 100vh;
  }

  a {
    color: ${(props) => props.theme.colors.gradientColor};
    text-decoration: none;
  }
`;

export default GlobalStyle;
