import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 300px;
  height: 350px;
  padding: 20px;
  text-align: center;
  background: ${({ theme }) => theme.COLORS.BACKGROUNDTWO};
  border-radius: 10px;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 5%) 0px 5px 10px;
  align-items: center;
`;

export const ContentImage = styled.div`
  display: flex;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export const Icon = styled.img`
  position: absolute;
  width: 4vw;
  height: 4vh;

  @media (max-width: 1280px) {
    width: 40px;
    height: 40px;
  }
`;

export const Title = styled.p`
  font-size: 16pt;
  margin-top: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.COLORTHEME};
  font-family: ${({ theme }) => theme.FONTS.RUBIK};
`;

export const Text = styled.p`
  font-size: 16px;
  width: 260px;
  margin-top: 30px;
  line-height: 150%;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.KARLA};
`;
