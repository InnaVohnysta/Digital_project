
document.addEventListener("DOMContentLoaded", function () {

  const sliderText = document.querySelector('.slider__text');
  const sliderImg = document.querySelector('.slider__img');
  const sliderItems = document.querySelectorAll('.slider__item');
  const prevButton = document.querySelector('.slider__button-prev');
  const nextButton = document.querySelector('.slider__button-next');
  const currentSlideNumber = document.getElementById('current-slide');
  const totalSlidesNumber = document.getElementById('total-slides');

  let currentSlideIndex = 0;

  function showSlide(index) {
    sliderItems.forEach((item, idx) => {
      item.classList.remove('active');
      if (idx === index) {
        item.classList.add('active');
        item.style.animation = 'slide-in 0.3s ease-in-out forwards';
      } else {
        item.style.animation = 'slide-out 0.3s ease-in-out forwards';
      }
    });

    currentSlideNumber.textContent = formatSlideNumber(index + 1);

    if (sliderItems.length <= 1) {
      prevButton.classList.remove('active');
      nextButton.classList.remove('active');
    } else if (index === 0) {
      prevButton.classList.remove('active');
      nextButton.classList.add('active');
    } else if (index === sliderItems.length - 1) {
      prevButton.classList.add('active');
      nextButton.classList.remove('active');
    } else {
      prevButton.classList.add('active');
      nextButton.classList.add('active');
    }
  }

  function formatSlideNumber(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }

  prevButton.addEventListener('click', () => {
    if (currentSlideIndex === 0) {
      return;
    }
    currentSlideIndex--;
    showSlide(currentSlideIndex);
  });

  nextButton.addEventListener('click', () => {
    if (currentSlideIndex === sliderItems.length - 1) {
      return;
    }
    currentSlideIndex++;
    showSlide(currentSlideIndex);
  });

  totalSlidesNumber.textContent = formatSlideNumber(sliderItems.length);

  showSlide(currentSlideIndex);


  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateOnScroll() {
    const elements = document.querySelectorAll('.animation');
    const gallarys = document.querySelectorAll('.projects__item');

    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add('animate');
      }
    });
    gallarys.forEach((gallary) => {
      if (isElementInViewport(gallary)) {
        gallary.classList.add('animate-gallery');
      }
    }

    )
  }

  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); 
});