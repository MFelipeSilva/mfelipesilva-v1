import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100vw;
  height: 100%;
  padding: 10em 0;
  gap: 7em;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.article`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const CardCompartiment = styled.div`
  display: flex;

  padding: 8em 0;
  transform: skewY(3deg);
  box-shadow: rgb(0 0 0 / 5%) 0px 5px 10px;
  background-color: ${({ theme }) => theme.COLORS.COLORCARD};

  @media (max-width: 768px) {
    width: 95vw;
    padding: 4em 0;
  }
`;

export const TextCard = styled.address`
  display: flex;
  align-items: center;
  font-style: normal;
  margin: 0 140px;

  @media (max-width: 900px) {
    margin: 0 40px;
  }

  @media (max-width: 768px) {
    margin: 0 30px;
    flex-direction: column;
  }
`;

export const Img = styled.img`
  width: 230px;
  height: 230px;
  display: block;
  object-fit: cover;
  margin-right: 10%;
  transform: skewY(-3deg);

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const Text = styled.p`
  font-size: 12pt;
  line-height: 150%;
  transform: skewY(-3deg);
  color: ${({ theme }) => theme.COLORS.TEXTCARD};
  font-family: ${({ theme }) => theme.FONTS.RUBIK};

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;
