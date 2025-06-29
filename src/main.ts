 import './assets/styles/index.css';

const menu = document.querySelector('#menu') as HTMLDivElement;

let pageSize:number = 0;
const menuHtml:string = `
  <li class=""><a href="a">Início</a></li>
  <li class=""><a href="a">Projetos</a></li>
  <li class=""><a href="a">Quem somos</a></li>
  <li class=""><a href="a">Contato</a></li>
`;
const close:string = `<li id="more"><img src="./src/assets/images/close.png" alt=""></li>`;
const more:string = `<li id="more"><img src="./src/assets/images/more.png" alt=""></li>`;

if (pageSize < 768) {
  menu.innerHTML = more;
} else {
  menu.innerHTML = menuHtml;
}
window.addEventListener('resize', () => {
  pageSize = window.innerWidth;
  console.log(pageSize);

});
