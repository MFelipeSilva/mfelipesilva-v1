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