import styled from "styled-components";

type PropsFont = {
  FontSize: string,
  FontWeight: string;
}

export const Container = styled.div`
  margin-bottom: 25px;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.RUBIK};
`;

export const TitleHeader = styled.h1<PropsFont>`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  white-space: nowrap;
  font-size: ${(props) => props.FontSize};
  font-weight: ${(props) => props.FontWeight};
  font-family: Montserrat;
`;