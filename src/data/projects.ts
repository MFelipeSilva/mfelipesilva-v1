import screenregister from "../assets/gifscreenregister.gif";
import searchgithub from "../assets/gifsearchgithub.gif";
import clonetesla from "../assets/gifclonetesla.gif";
import weatherforecast from "../assets/gifweatherforecast.gif";

const projects = [
  {
    id: "606050",
    imageURL: screenregister,
    title: "Paginas de cadastro e login",
    text: "Um projeto simples aonde utilizei um sistema de cadastro com banco de dados SQL, um Frontend básico e com validações nos campos de cadastro e login.",
    link: "https://github.com/MFelipeSilva/resgiter-here",
    github: "https://github.com/MFelipeSilva/resgiter-here",
  },
  {
    id: "606051",
    imageURL: searchgithub,
    title: "Search github",
    text: "Site onde você poderá buscar usuários do github de maneira fácil e rápido, também terá acesso aos últimos repositórios, e aos seus dados.",
    link: "https://search-github-mu.vercel.app/",
    github: "https://github.com/MFelipeSilva/search-github",
  },
  {
    id: "606052",
    imageURL: clonetesla,
    title: "Clone tesla",
    text: "Projeto no qual repliquei a página inicial da tesla, o desafio era deixar o mais igual possível, as animações complexas, e a interface do site original.",
    link: "https://clonedtesla.vercel.app/",
    github: "https://github.com/MFelipeSilva/clone-tesla",
  },
  {
    id: "606053",
    imageURL: weatherforecast,
    title: "Previsão do tempo",
    text: "Uma página web com objeto de apresentar dados da previsão do tempo de qualquer cidade ou país. Dados e informações reais, providenciadas de uma API.",
    link: "https://weather-forecast-murex.vercel.app/",
    github: "https://github.com/MFelipeSilva/weather-forecast",
  },
];

export default projects;
