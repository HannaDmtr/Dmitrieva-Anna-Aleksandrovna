import MenuItem from './MenuItem.js';
import { MENU_ITEMS } from '../constants/constants.js';

const Menu = () => {
  const menuContent = MENU_ITEMS.map((item) => MenuItem(item)).join('');

  return `
    <nav class="menu">
      <ul class="menu__list">
        ${menuContent}
      </ul>
    </nav>`;
};

export default Menu;
