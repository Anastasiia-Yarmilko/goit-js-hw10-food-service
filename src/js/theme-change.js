const refs = {
  body: document.querySelector('body'),
  switchBtn: document.querySelector('#theme-switch-toggle'),
}

let theme = localStorage.getItem('theme');

const themeStyle = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


refs.switchBtn.addEventListener('change', onChange);

if (theme === themeStyle.DARK) {
  refs.body.classList.add(themeStyle.DARK);
  refs.body.classList.remove(themeStyle.LIGHT);
  refs.switchBtn.setAttribute('checked', true);
} else {
  refs.body.classList.remove(themeStyle.DARK);
  refs.body.classList.add(themeStyle.LIGHT);
   refs.switchBtn.removeAttribute('checked');

}


function onChange() {
  refs.body.classList.toggle(themeStyle.DARK);
  refs.body.classList.toggle(themeStyle.LIGHT);

  if (localStorage.getItem('theme') === themeStyle.DARK) {
    localStorage.setItem('theme', themeStyle.LIGHT);
  } else {
    localStorage.setItem('theme', themeStyle.DARK);
  }

}