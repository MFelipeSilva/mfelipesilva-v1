import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  height: 1020px;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 640px) {
    height: 1600px;
    justify-content: center;
  }
`;

export const CardContent = styled.div`
  display: flex;
  width: 100vw;
  margin-top: 70px;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export const Img = styled.img`
  position: absolute;
`;

