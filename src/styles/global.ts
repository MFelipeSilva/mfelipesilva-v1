import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  }

  body::-webkit-scrollbar {
    width: 14px;
    background: ${({ theme }) => theme.COLORS.BACKGROUNDTWO};
  }

  body::-webkit-scrollbar-thumb {
    background: #FFDA22;
  }
`;

export const Section = styled.section`
  height: 3000px;
`;