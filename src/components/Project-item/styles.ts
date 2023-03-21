import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 1072px) {
    margin-top: 20px;
  }
`;

export const ContainerImg = styled.div`
  margin-bottom: 30px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #000;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  max-width: 668px;
  max-height: 402px;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 1280px) {
    width: 95%;
    max-width: 510px;
    max-height: 400px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  height: 150px;
  margin-left: 50px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  @media (max-width: 550px) {
    width: 90%;
    margin-left: 0px;
  } ;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  font-family: Montserrat;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};

  @media (max-width: 550px) {
    font-size: 1.5rem;
    text-align: start;
  } ;
`;
export const Text = styled.p`
  max-width: 500px;
  font-size: 1.1rem;
  line-height: 150%;
  text-align: start;
  opacity: 0.8;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.KARLA};

  @media (max-width: 550px) {
    font-size: 0.9rem;
  } ;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px 0 0 ;
  opacity: 0.9;
`;

export const ContentIcon = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};

  cursor: pointer;
  margin-left: 15px;
  border-radius: 50%;

  svg {
    font-size: 15pt;
  }
`