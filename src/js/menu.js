  
import itemsMenu from '../template/menu.hbs';
import menuItems from '../menu.json';


const refs = {
  menu: document.querySelector('.js-menu')
}

const markup = itemsMenu(menuItems);
refs.menu.insertAdjacentHTML('beforeend', markup);