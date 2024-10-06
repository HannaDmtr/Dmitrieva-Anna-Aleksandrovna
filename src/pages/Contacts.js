const Contacts = () => {
  document.title = "Ну и страница Контакты, как без нее?";

  // пример добавление контента через переменные, которые можно сгенерировать
  const title = "<h1>Контакты</h1>";
  const content = "<p>Пишите письма - будем рады.</p>";

  return `${title}
  ${content}`;
};

export default Contacts;
