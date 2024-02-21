import styled from "styled-components";

import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

type INavLinks = {
  openMenu: boolean;
};

export const NavigationBar = styled.nav`
  position: fixed;
  display: flex;
  height: 6em;
  width: 100%;
  z-index: 5;
  padding: 0 10em;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgb(0 0 0 / 5%) 0px 5px 10px;
  background: ${({ theme }) => theme.COLORS.BACKGROUNDTWO};

  @media (max-width: 800px) {
    background: none;
    box-shadow: none;
    position: flex;
  }

  @media (max-width: 1300px) {
    padding: 0 5em 0 5em;
  }

  & > svg {
    display: none;
  }

  @media (max-width: 800px) {
    & > svg {
      display: flex;
    }
  }
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  z-index: 1;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const NavLinks = styled.ul<INavLinks>`
  display: flex;
  gap: 40px;
  list-style: none;

  @media (min-width: 801px) {
    transition: none;
    transform: none;
    flex-direction: row;
  }

  @media (max-width: 800px) {
    display: flex;
    position: fixed;
    gap: 2rem;
    right: 0;
    bottom: 0;
    height: 100%;
    width: min(75vw, 400px);
    background: ${({ theme }) => theme.COLORS.BACKGROUNDTWO};
    transform: ${({ openMenu }) =>
      openMenu ? "translateX(0)" : "translateX(100%)}"};
    transition: transform 0.3s ease-in;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const MenuIcon = styled(FaBars)`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  cursor: pointer;
  font-size: 1.8rem;
  margin: 40px 40px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};

  @media (max-width: 800px) {
    z-index: 1;
  }
`;

export const CloseIcon = styled(FaTimes)`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  cursor: pointer;
  font-size: 1.8rem;
  margin: 40px 40px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};

  @media (max-width: 800px) {
    z-index: 1;
  }
`;

export const Li = styled.li`
  transition: 0.6s ease-out;

  a:before {
    content: "";
    position: absolute;
    right: 100%;
    bottom: 8px;
    left: 0;
    height: 2px;
    background: #eec643;
    opacity: 0.4;
    transition: all 0.35s ease-in-out;
  }

  a:hover:before {
    right: 0;
    opacity: 0.8;
    color: ${({ theme }) => theme.COLORS.SECONDARY};
  }
`;

export const Text = styled.a`
  position: relative;
  padding-bottom: 15px;
  font-size: 11pt;
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.COLORTHEME};
  font-family: ${({ theme }) => theme.FONTS.RUBIK};
  transition: opacity 0.35s ease-in-out;

  @media (max-width: 800px) {
    font-size: 14pt;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;
