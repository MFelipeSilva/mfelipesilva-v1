import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  height: 1020px;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 640px) {
    height: 1500px;
    justify-content: center;
  }
`;

export const CardContent = styled.div`
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  margin-top: 70px;
  flex-direction: row;
  justify-content: space-around;
`;

