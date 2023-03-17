import styled  from "styled-components";

export const Container = styled.div`

`

export const CustomButton = styled.button`
  display: flex;
  width: max(150px, 15vw);
  height: max(30px, 3vw);
  padding: max(17px, 1.5vw);
  font-size: max(11px, 1vw);
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  border: 2px solid #eec643;
  background-color: transparent;
  font-family: ${({ theme }) => theme.FONTS.RUBIK};
  color: ${({ theme }) => theme.COLORS.SECONDARY};

  background: linear-gradient(to left, transparent 50%, #eec643 50%) right;
  background-size: 200%;
  transition: 0.6s ease-out;

  &:hover {
    background-position: left;
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.TERTIARY};
  }
`
