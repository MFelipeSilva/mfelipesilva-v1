import styled from "styled-components";
import { Link } from 'react-router-dom';


export const NavigationBar = styled.nav`
  height: 6em;
  width: 100%;
  z-index: 1;
  display: flex;
  position: fixed;
  background: #232323;
  align-items: center;
  padding: 0 10em 0 10em;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
`;

export const NavLinks = styled.ul `
  display: flex;
  list-style: none;
`;

export const Text = styled.li`
  font-size: 11pt;
  padding: 5px;
  margin-left: 40px;
  font-family: ${({ theme }) => theme.FONTS.RUBIK};
  color: ${({ theme }) => theme.COLORS.PRIMARY};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.SECONDARY};
  }
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;