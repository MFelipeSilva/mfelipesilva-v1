import styled from "styled-components";

type PropsDisplay = {
  SetDisplay: string,
}

type PropsHeight = {
  SetHeight: string,
  SetHeightMedium: string,
  SetHeightSmall: string,
}


export const Container = styled.section<PropsHeight>`
  display: flex;
  height: ${( props ) => props.SetHeight};
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1200px) {
    height: 1700px;
  }

  @media (max-width: 1135px) {
    height: ${( props ) => props.SetHeightMedium};
  }

  @media (max-width: 550px) {
    height: ${( props ) => props.SetHeightSmall};
  };
`;

export const EffectShadow = styled.div<PropsDisplay>`
  display: flex;
  justify-content: center;

  &:before {
    content: "";
    display: ${( props ) => props.SetDisplay};
    height: 300px;
    position: absolute;
    left: 0;
    right: 0;
    margin-top: 1380px;
    border-radius: 10px;
    background: linear-gradient(rgba(0, 0, 0, 0), 20%, ${({ theme }) => theme.COLORS.BACKGROUND});
    z-index: 3;
  }

  @media (max-width: 1135px) {
    &:before {
      margin-top: 1720px;
    }
  }
`;

export const Button =  styled.button<PropsDisplay>`
  display: ${( props ) => props.SetDisplay};
  z-index: 4;
  position: absolute;
  margin-top: 1500px;
  width: max(140px, 3.5vw);
  height: max(20px, 2.5vw);
  padding: max(17px, 1vw);
  font-size: max(13px, 0.8vw);
  align-items: center;
  justify-content: center;
  border: 2px solid #eec643;
  background-color: #eec643;
  border-radius: 5px;
  font-family: ${({ theme }) => theme.FONTS.RUBIK};
  color: ${({ theme }) => theme.COLORS.TERTIARY};


  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.TERTIARY};
    background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  }

  @media (max-width: 1135px) {
    margin-top: 1800px;
  }
`;
