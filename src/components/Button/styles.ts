import styled  from "styled-components";

export const Container = styled.div`

`

export const CustomButton = styled.button`
  display: flex;
  cursor: pointer;
  width: max(150px, 15vw);
  height: max(30px, 3vw);
  padding: max(17px, 1.5vw);
  font-size: max(11px, 1vw);
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  border: 2px solid #eec643;
  background-color: transparent;
  transition: all 400ms ease;
  font-family: ${({ theme }) => theme.FONTS.RUBIK};
  color: ${({ theme }) => theme.COLORS.SECONDARY};

  &:hover {
    background-color: #eec643;
    color: ${({ theme }) => theme.COLORS.TERTIARY};
  }
`
