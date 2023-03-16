import screenregister from '../assets/gifscreenregister.gif';
import searchgithub from '../assets/gifsearchgithub.gif';
import clonetesla from '../assets/gifclonetesla.gif';

const projects = [
  {
    id: "606050",
    imageURL: screenregister,
    title: "Paginas de cadastro e login",
    text: "Um projeto simples aonde utilizei um sistema de cadastro com banco de dados mySQL, um Frontend básico e com validações nos campos de cadastro e login.",
  },
  {
    id: "606051",
    imageURL: searchgithub,
    title: "Search github",
    text: "Site onde você poderá buscar usuários do github de maneira fácil e rápido, também terá acesso aos últimos repositórios, e aos seus dados.",
  },
  {
    id: "606052",
    imageURL: clonetesla,
    title: "Clone tesla",
    text: "Projeto no qual repliquei a página inicial da tesla, o desafio era deixar o mais igual possível, as animações complexas, e a interface do site original.",
  }
]

export default projects;