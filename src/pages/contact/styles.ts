import styled from "styled-components";

type PropsSize = {
  FontWeight: string;
  FontSize: string,
};

export const Container = styled.section`
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
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

export const Text = styled.text<PropsSize>`
  font-family: Montserrat;
  font-weight: ${( props ) => props.FontWeight};
  font-size: ${( props ) => props.FontSize};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
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