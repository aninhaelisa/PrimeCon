/*---------------------Menu------------------------*/

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}

function toggleSubmenu(event) {
    event.preventDefault();
    const submenu = event.target.nextElementSibling;
    submenu.classList.toggle('open');
}

/*------------------Carrossel---------------------------*/

const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

function updateCarousel() {
    const translateX = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
}

/*--------------Aparecer---------------*/

const divAparecer = document.querySelector('.aparecer');

function checkVisibility() {
  const rect = divAparecer.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

  if (isVisible) {
    divAparecer.classList.add('visible');
  } else {
    divAparecer.classList.remove('visible');
  }
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

/*----------------------------------------------------------------------*/

window.addEventListener('scroll', () => {
  const box = document.querySelector('.box-cont');
  const items = document.querySelectorAll('.item-cont');
  const button = document.querySelector('.show-button');
  const boxRect = box.getBoundingClientRect();

  // Verifica se a box está visível na tela
  if (boxRect.top < window.innerHeight && boxRect.bottom > 0) {
      // Se a box está visível, anima os itens
      items.forEach((item, index) => {
          setTimeout(() => {
              item.style.opacity = 1;
              item.style.transform = 'translateY(0)';
          }, index * 500); // Animação em sequência
      });

      // Exibe o botão após a animação dos itens
      setTimeout(() => {
          button.classList.add('visible');
      }, items.length * 500 + 200); // Apresenta o botão após todos os itens com um leve atraso
  } else {
      // Se a box não está visível, remove os itens suavemente
      items.forEach((item, index) => {
          setTimeout(() => {
              item.style.opacity = 0;
              item.style.transform = 'translateY(20px)'; // Move para baixo
          }, index * 500); // Animação em sequência
      });

      // Esconde o botão após a remoção dos itens
      setTimeout(() => {
          button.classList.remove('visible');
      }, items.length * 500 + 200); // Remove o botão após todos os itens
  }
});