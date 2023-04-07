import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  height: 100vh;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 640px) {
    height: 1800px;
    justify-content: center;
  }
`;

export const CardContent = styled.div`
  display: flex;
  width: 100vw;
  margin-top: 100px;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

export const Img = styled.img`
  position: absolute;
`;

