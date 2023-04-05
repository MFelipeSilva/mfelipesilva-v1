import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 110vh;
  padding-left: max(0px, 10vw);
  flex-direction: column;
  justify-content: center;
`;

export const Section = styled.section`
`;

export const Img = styled.img`
  top: 0;
  right: 0;
  height: 150vh;
  z-index: -1;
  position: absolute;
  
  @media (max-width: 1000px) {
    height: 80vh;
  };
  
  @media (max-width: 500px) {
    height: 75vh;
  };
`;

export const ContentHeader = styled.div`
  display: flex;
  width: min-content;
  height: min-content;
  justify-content: center;
  flex-direction: column;
`;

export const Link = styled.a`
  text-decoration: none;
  width: min-content;
  height: min-content;
`;