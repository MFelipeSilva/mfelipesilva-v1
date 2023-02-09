import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
    background-color: #1D1D1D;
  }
`;

export const Section = styled.section`
  height: 3000px;
`;