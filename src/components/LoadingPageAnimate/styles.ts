import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #191919;
`;

export const ImgAnimate = styled.img`
  width: 100%;
  height: 100%;

  max-width: 80px;
  max-height: 70px;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1225px) {
    max-width: 70px;
    height: auto;
  }

  @media (max-width: 600px) {
    max-width: 60px;
    height: auto;
  }
`;