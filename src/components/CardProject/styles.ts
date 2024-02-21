import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ContainerImg = styled.div`
  display: flex;
  z-index: 1;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
`;

export const Link = styled.a`
  color: #000;
  text-decoration: none;
`;

export const Img = styled.img`
  max-width: 100%;
  min-height: 100%;
  width: 668px;
  height: 390px;
  object-fit: cover;
  border-radius: 10px;
  align-items: center;

  @media (max-width: 1280px) {
    max-width: 95%;
    max-height: auto;
    width: 580px;
    height: 300px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  margin-left: -20px;
  margin-top: 80px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  border-radius: 10px;
  padding: 50px;
  border: 2px solid ${({ theme }) => theme.COLORS.TEXTBOX};

  &:hover {
    h1 {
      color: ${({ theme }) => theme.COLORS.SECONDARY};
    }
  }

  @media (max-width: 1200px) {
    padding: 30px;
  }

  @media (max-width: 1135px) {
    padding: 25px;
    margin: 0;
  }

  @media (max-width: 610px) {
    width: 95%;
    padding: 15px;
    margin: 0 5px 0 5px;
  }
`;

export const Title = styled.h1`
  font-size: 2.1rem;
  font-weight: 500;
  font-family: Montserrat;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};

  @media (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media (max-width: 550px) {
    font-size: 1.5rem;
  }
`;
export const Text = styled.p`
  max-width: 500px;
  font-size: 1.1rem;
  line-height: 160%;
  text-align: start;
  opacity: 0.8;
  font-weight: 100;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.KARLA};

  @media (max-width: 1200px) {
    font-size: 1rem;
  }
  @media (max-width: 550px) {
    font-size: 0.9rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px 0 0;
  opacity: 0.9;
`;

export const ContentIcon = styled.button`
  display: flex;
  width: 80px;
  height: max(38px, 2.5vw);
  border: none;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-4px);
  }

  cursor: pointer;
  margin-left: 15px;
  border-radius: 5px;

  svg {
    font-size: 18pt;
  }
`;
