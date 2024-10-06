import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
  // находим нащ контейнер для рендера (предполагается, что он есть)
  const root = document.getElementById("root");
  // рендерим наш первый компонент
  App(root);
});
