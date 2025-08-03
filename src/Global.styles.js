import { createGlobalStyle } from "styled-components";
import { secondaryColor } from './styles/globals';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Quicksand, -apple-system, Roboto, 'Helvetica Neue', Helvetica, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin: 0;
    min-height: 100vh;
  }
  input {
    border: none;
    outline: none;
    font-size: 16px;
    padding: 4px 8px;
    background: transparent;
  }
  input::placeholder {
    color: ${secondaryColor};
    opacity: 1;
  }
  input[type="checkbox"] {
    display: none;
  }
`;
