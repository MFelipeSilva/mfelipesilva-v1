import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  height: 1000px; 
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardCompartiment = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  z-index: -1;
  height: 500px;
  transform: skewY(3deg);
  box-shadow: rgb(0 0 0 / 5%) 0px 5px 10px;
  background-color: ${({ theme }) => theme.COLORS.COLORCARD};

  @media (max-width: 768px) {
    height: 90%;
    width: 95%;
    left: unset;
  };

  @media (max-height: 500px) {
    height: 700px
  }
`;

export const TextCard = styled.div`
  display: flex;
  margin: 0 140px 0 150px;
  align-items: center;
  
  @media (max-width: 900px) {
    margin: 0 40px 0 40px;
  }

  @media (max-width: 768px) {
    margin: 0 30px 0 30px;
    flex-direction: column;
  }
`;

export const Img = styled.img`
  width: 230px;
  height: 230px;
  display: block;
  object-fit: cover;
  margin-right: 10%;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const Text = styled.p`
  font-size: 12pt;
  line-height: 150%;
  color: ${ ({ theme }) => theme.COLORS.TEXTCARD};
  font-family: ${ ({ theme }) => theme.FONTS.RUBIK};

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;