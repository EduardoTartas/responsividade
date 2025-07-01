 import './assets/styles/index.css';

const menu = document.querySelector('#menu') as HTMLDivElement;
let isMenuOpen = false;

const menuHtml = `
  <li><a href="a">Início</a></li>
  <li><a href="a">Projetos</a></li>
  <li><a href="a">Quem somos</a></li>
  <li><a href="a">Contato</a></li>
`;

const moreIcon = `<li id="more"><img src="./src/assets/images/more.png" alt=""></li>`;
const closeIcon = `<li id="more"><img src="./src/assets/images/close.png" alt=""></li>`;

function updateMenu() {
  const mobile = window.innerWidth < 768;
  
  if (mobile) {
    menu.innerHTML = isMenuOpen ? closeIcon + menuHtml : moreIcon;
  } else {
    menu.innerHTML = menuHtml;
    isMenuOpen = false;
  }
}

function toggleMenu() {
  if (window.innerWidth < 768) {
    isMenuOpen = !isMenuOpen;
    updateMenu();
  }
}

updateMenu();

menu.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).closest('#more')) {
    toggleMenu();
  }
});

window.addEventListener('resize', updateMenu);
