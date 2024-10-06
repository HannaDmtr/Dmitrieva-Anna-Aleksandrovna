import LinkToDocs from "../components/LinkToDocs";

const Home = () => {
  document.title = "Главная страница примера SPA";

  return `
  <h1>Главная</h1>
  ${LinkToDocs()}
  `;
};

export default Home;
