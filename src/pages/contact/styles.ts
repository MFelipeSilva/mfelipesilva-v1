import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100vw;
  height: 100%;
  padding: 15em 0;
  gap: 10em;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Textbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  flex-direction: column;
`;

export const SubTitle = styled.p`
  font-family: Montserrat;
  font-size: clamp(13px, 4vw, 24px);
`;

export const Title = styled.h1`
  font-family: Montserrat;
  font-size: clamp(18px, 5vw, 41px);
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const TextOr = styled.p`
  font-family: Montserrat;
  font-size: clamp(13px, 4vw, 24px);
`;

export const Icons = styled.div`
  display: flex;
  width: 150px;
  margin-top: 20px;
  align-items: center;
  justify-content: space-around;
`;

export const Links = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.SECONDARY};
`;
