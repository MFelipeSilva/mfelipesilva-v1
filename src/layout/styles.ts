import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const Section = styled.section`
`;

export const Footer = styled.footer`
  flex: 1;
  font-size: 12px;
  text-align: center;
  margin-bottom: 35px;
  justify-content: center;
  font-family: Montserrat, sans-serif;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;
