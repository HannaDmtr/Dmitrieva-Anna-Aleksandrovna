const Error404 = () => {
  document.title = 'Achtung, warning, kujdes, attenzione, pozornost...';

  return `
    <section class="error-page">
      <h1>Ошибка 404</h1>
      <p>Страница не найдена, попробуйте вернуться на <a href="/">главную</a>.</p>
    </section>
  `;
};

export default Error404;
