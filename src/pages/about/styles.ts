import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
`;

export const CardCompartiment = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  min-height: 500px;
  z-index: -1;
  transform: skewY(3deg);
  background-color: #232323;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const TextCard = styled.div`
  display: flex;
  margin: 0 150px 0 150px;
  align-items: center;
  
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Img = styled.img`
  width: 230px;
  height: 230px;
  display: block;
  object-fit: cover;
  margin-right: 10%;
`;

export const Text = styled.p`
  font-size: 12pt;
  
  line-height: 150%;
  color: ${ ({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${ ({ theme }) => theme.FONTS.RUBIK};
`;