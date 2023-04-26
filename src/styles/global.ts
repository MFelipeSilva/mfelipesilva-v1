import styled, { createGlobalStyle } from "styled-components";

type Props = {
  SetOverflow: string
}

export default createGlobalStyle<Props>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
    overflow-y: ${( props ) => props.SetOverflow};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  }

  body::-webkit-scrollbar {
    width: 12px;
    background: ${({ theme }) => theme.COLORS.TEXTCARD};
  }

  body::-webkit-scrollbar-thumb {
    background: #eec643;
  }
`;

export const Section = styled.section`
  height: 3000px;
`;