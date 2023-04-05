import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const Section = styled.section`
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  padding: 25px;
  font-size: 12px;
  text-align: center;
  font-family: Montserrat;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;
