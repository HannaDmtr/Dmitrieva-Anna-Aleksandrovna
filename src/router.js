import Home from './pages/Home.js';
import About from './pages/About.js';
import Contacts from './pages/Contacts.js';
import Error404 from './pages/Error404.js';

// объявляем объект роутов и наших компонентов страниц
const routes = {
  '/': Home,
  '/about': About,
  '/contacts': Contacts,
  '/404': Error404,
};

// функция получения компонента из объекта роутов
const getComponentFromPath = (path) => routes[path] || Error404;

// функция перерисовки компонентов
const updateDOM = (root, component) => {
  if (!root) {
    console.error('Specified root container not found in the document.');
    return;
  }

  root.innerHTML = '';
  root.insertAdjacentHTML('beforeend', component());
};

const setActiveLink = (path = '/') => {
  const links = document.querySelectorAll('.menu__link');
  links.forEach((link) => {
    link.classList.toggle('active', path === link.getAttribute('href'));
  });
};

// функция получения пути (роута) и сопоставление его с компонентом
const Router = (container) => {
  const root = document.getElementById(container);
  const path = window.location.pathname;
  const component = getComponentFromPath(path);

  updateDOM(root, component);
  setActiveLink(path);
};

export default Router;
