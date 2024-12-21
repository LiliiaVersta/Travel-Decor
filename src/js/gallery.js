document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.gallery-slide');
  const prevButton = document.querySelector('.pagination-button.prev');
  const nextButton = document.querySelector('.pagination-button.next');
  let currentSlide = 0;

  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.style.display = index === currentSlide ? 'block' : 'none';
    });

    // Управление состоянием кнопок
    if (currentSlide === 0) {
      prevButton.style.opacity = '0.5'; // Затухание кнопки "Назад"
      prevButton.disabled = true;
    } else {
      prevButton.style.opacity = '1'; // Включение кнопки "Назад"
      prevButton.disabled = false;
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.opacity = '0.5'; // Затухание кнопки "Вперед"
      nextButton.disabled = true;
    } else {
      nextButton.style.opacity = '1'; // Включение кнопки "Вперед"
      nextButton.disabled = false;
    }
  }

  prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide -= 1;
      updateSlides();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
      currentSlide += 1;
      updateSlides();
    }
  });

  // Инициализация
  updateSlides();
});
