import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100vw;
  height: 100%;
  padding: 13em 0;
  gap: 7em;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 640px) {
    height: 1800px;
    justify-content: center;
  }
`;

export const CardContent = styled.div`
  display: flex;
  width: 100vw;
  gap: 3em;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

export const Img = styled.img`
  position: absolute;
`;
