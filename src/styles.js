import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${(props) => props.theme.primaryBackground};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-size: calc(10px + 2vmin);
  }
`;
