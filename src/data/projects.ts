import search_github from "../assets/search-github.gif";
import clone_tesla from "../assets/clone-tesla.gif";
import weather_forecast from "../assets/weather-forecast.gif";
import woolshoes_ecommerce from "../assets/woolshoes-ecommerce.gif";

const projects = [
  {
    id: "1",
    imageURL: woolshoes_ecommerce,
    title: "Woolshoes",
    text: "E-commerce especializado em tênis masculinos, femininos e infantis, oferecendo uma ampla variedade de estilos para atender a todas as idades e preferências",
    link: "https://woolshoes.vercel.app/",
    github: "https://github.com/MFelipeSilva/Woolshoes",
  },
  {
    id: "3",
    imageURL: clone_tesla,
    title: "Clone Tesla",
    text: "Projeto no qual repliquei a página inicial da tesla, o desafio era deixar o mais igual possível, as animações complexas, e a interface do site original.",
    link: "https://clonedtesla.vercel.app/",
    github: "https://github.com/MFelipeSilva/clone-tesla",
  },
  {
    id: "4",
    imageURL: weather_forecast,
    title: "Weather Forecast",
    text: "Uma página web com objeto de apresentar dados da previsão do tempo de qualquer cidade ou país. Dados e informações reais, providenciadas de uma API.",
    link: "https://weather-forecast-murex.vercel.app/",
    github: "https://github.com/MFelipeSilva/weather-forecast",
  },
  {
    id: "2",
    imageURL: search_github,
    title: "Search Github",
    text: "Site onde você poderá buscar usuários do github de maneira fácil e rápido, também terá acesso aos últimos repositórios, e aos seus dados.",
    link: "https://search-github-mu.vercel.app/",
    github: "https://github.com/MFelipeSilva/search-github",
  },
];

export default projects;
