import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width: 300px;
  height: 350px;
  margin: 10px;
  text-align: center;
  background: ${({ theme }) => theme.COLORS.BACKGROUNDTWO};
  border-radius: 10px;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 5%) 0px 5px 10px;
`;

export const CardProject = styled.div`
  display: flex;
  width: 668px;
  height: 402px;
  margin: 10px;
  text-align: center;
  background: #191919;
  border-radius: 10px;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 5%) 0px 5px 10px;

  @media (max-width: 1280px) {
    max-width: 510px;
    max-height: 300px;
  }
`;