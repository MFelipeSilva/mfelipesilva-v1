import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const Section = styled.section`
  display: block;
`;

export const Img = styled.img`
  right: 0;
  height: 150vh;
  z-index: -1;
  position: absolute;
`;

export const ContentHeader = styled.header`
  display: flex;
  width: 50vw;
  height: 110vh;
  justify-content: center;
  padding-left: max(0px, 10vw);
  flex-direction: column;
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
