import { Link } from 'react-scroll';
import logo from '../../assets/logoproject.svg'
import { NavigationBar, NavLinks, Text, CustomLink, Img } from './styles';

export const NavBar = () => {
  return (
    <NavigationBar>

      <Img src={logo} alt="logoproject" />

      <NavLinks>
        <Link to='/' spy={true} smooth={true} offset={0} duration={500}>
          <Text>Início</Text> 
        </Link>

        <Link to='sobre' spy={true} smooth={true} offset={20} duration={500}>
          <Text>Sobre</Text>
        </Link>

        <Link to='habilidades' spy={true} smooth={true} offset={100} duration={500}>
          <Text>Habilidades</Text>  
        </Link>

        <Link to='projetos' spy={true} smooth={true} offset={-50} duration={500}>
          <Text>Projetos</Text>  
        </Link>

        <Link to='contato' spy={true} smooth={true} offset={20} duration={500}>
          <Text>Contato</Text>  
        </Link>
      </NavLinks>
    </NavigationBar>
  )
}