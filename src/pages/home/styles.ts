import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const Section = styled.section`
`;

export const Img = styled.img`
  top: 0;
  right: 0;
  height: 150vh;
  z-index: -1;
  position: absolute;
  
  @media (max-width: 1000px) {
    height: 80vh;
  };
  
  @media (max-width: 500px) {
    height: 75vh;
  };
`;

export const ContentHeader = styled.main`
  display: flex;
  width: 100vw;
  height: 110vh;
  justify-content: center;
  padding-left: max(0px, 10vw);
  flex-direction: column;
`;

export const Link = styled.a`
  text-decoration: none;
  width: max(150px, 15vw);
  height: max(30px, 3vw);
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
