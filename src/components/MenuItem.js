const MenuItem = ({ title, url }) => {
  return `<li class="menu__item"><a class="menu__link" href="${url}">${title}</a></li>`;
};

export default MenuItem;
