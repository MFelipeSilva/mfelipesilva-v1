import styled from "styled-components";
import { Card } from "../../components/Cardbox/styles";

export const Container = styled.section`
  display: flex;
  height: 1500px;
  text-align: center;
  flex-direction: column;
  justify-content: space-around;
`;

export const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const CardCustom = styled(Card)`
  width: 668px;
  height: 402px;
  background: #191919;
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  object-fit: cover;
  border-radius: 10px;
`;

export const TextBox = styled.div`
  display: flex;
  height: 150px;
  margin-left: 50px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  font-family: Montserrat;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;
export const Text = styled.p`
  width: 500px;
  font-size: 1.1rem;
  line-height: 150%;
  text-align: start;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.KARLA};
`;
