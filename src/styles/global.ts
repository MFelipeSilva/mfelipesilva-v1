import styled, { createGlobalStyle } from "styled-components";

type Props = {
  SetOverflow: string;
};

export default createGlobalStyle<Props>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  :root {
    color-scheme: ${({ theme }) => theme.COLORS.COLORSCROLL};
  }

  body {
    overflow-x: hidden;
    overflow-y: ${({ SetOverflow }) => SetOverflow};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  }
`;
