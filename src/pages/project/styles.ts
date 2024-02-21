import styled from "styled-components";

interface ICardContent {
  show: boolean;
}

export const Container = styled.section`
  display: flex;
  width: 100vw;
  height: 100%;
  padding: 10em 0;
  gap: 7em;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const CardContent = styled.div<ICardContent>`
  position: relative;
  display: flex;
  gap: 5em;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  & > div:nth-child(4) {
    display: ${({ show }) => (show ? "flex" : "none")};
  }

  & > div:nth-child(5) {
    display: ${({ show }) => (show ? "none" : "flex")};
  }

  @media (max-width: 1135px) {
    gap: 3em;
  }
`;

export const EffectShadow = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 240px;
  z-index: 3;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    rgba(0, 0, 0, 0),
    20%,
    ${({ theme }) => theme.COLORS.BACKGROUND}
  );
`;

export const Button = styled.button`
  display: flex;
  z-index: 4;
  bottom: 13em;
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
`;
