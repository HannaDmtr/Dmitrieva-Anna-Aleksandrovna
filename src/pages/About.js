import AboutText from "../components/AboutText.js";

const About = (title = "О проекте!") => {
  document.title = "Какой-то описательный текст данного SPA";

  // пример генерирование контента с использованием приходящих аргументов
  const titleEle = `<h1>${title}</h1>`;

  return `${titleEle}
    ${AboutText()}
  `;
};

export default About;
