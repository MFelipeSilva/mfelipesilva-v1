import { useState, useContext } from "react";

import Switch from "react-switch";

import logo from "../../assets/logoproject.svg";

import { ThemeContext } from "styled-components";

import {
  NavigationBar,
  NavLinks,
  Text,
  Img,
  Li,
  MenuIcon,
  CloseIcon,
} from "./styles";

type Props = {
  toggleTheme(): void;
};

export const NavBar: React.FC<Props> = ({ toggleTheme }) => {
  const { COLORS, typeTheme } = useContext(ThemeContext);

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <NavigationBar>
      <Img src={logo} alt="logoproject" />

      {!openMenu ? (
        <MenuIcon onClick={() => setOpenMenu(!openMenu)} />
      ) : (
        <CloseIcon onClick={() => setOpenMenu(!openMenu)} />
      )}

      <NavLinks
        className="responsive"
        openMenu={openMenu}
        onClick={() => setOpenMenu(false)}
      >
        <Li>
          <Text href="#">Início</Text>
        </Li>
        <Li>
          <Text href="#sobre">Sobre</Text>
        </Li>
        <Li>
          <Text href="#habilidades">Habilidades</Text>
        </Li>
        <Li>
          <Text href="#projetos">Projetos</Text>
        </Li>
        <Li>
          <Text href="#contato">Contato</Text>
        </Li>
        <Switch
          onChange={toggleTheme}
          checked={typeTheme === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={50}
          offColor={COLORS.SECONDARY}
          onColor={COLORS.TERTIARY}
        />
      </NavLinks>
    </NavigationBar>
  );
};
