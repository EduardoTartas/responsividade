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

class CampusCarousel {
  private carousel: HTMLElement;
  private currentSlide = 0;
  private maxSlides = 5;

  constructor() {
    this.carousel = document.getElementById('campusCarousel') as HTMLElement;
    this.init();
  }

  private init(): void {
    document.getElementById('prevBtn')?.addEventListener('click', () => this.prev());
    document.getElementById('nextBtn')?.addEventListener('click', () => this.next());
  }

  private update(): void {
    this.carousel.style.transform = `translateX(-${this.currentSlide * 16.67}%)`;
  }

  private prev(): void {
    this.currentSlide = this.currentSlide === 0 ? this.maxSlides : this.currentSlide - 1;
    this.update();
  }

  private next(): void {
    this.currentSlide = this.currentSlide === this.maxSlides ? 0 : this.currentSlide + 1;
    this.update();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new CampusCarousel();
});
