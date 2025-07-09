import './assets/styles/index.css';

const menuToggle = document.querySelector('#menu-toggle') as HTMLButtonElement;
const menuItems = document.querySelector('#menu-items') as HTMLUListElement;
const menuIcon = document.querySelector('#menu-icon') as HTMLImageElement;

function toggleMenu(): void {
  const active = menuItems.classList.toggle('active');
  menuIcon.src = active ? './src/assets/images/close.png' : './src/assets/images/more.png';
}

menuToggle.addEventListener('click', toggleMenu);

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menuItems.classList.remove('active');
    menuIcon.src = './src/assets/images/more.png';
  }
});
