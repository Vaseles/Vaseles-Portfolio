const body = document.querySelector('body');
const loader = document.querySelector('.loader');
const content = document.querySelector('.content');


//? slider
const sliderMain = new Swiper('.slider__main', {
  freeMode: true,
  centeredSlides: true,
  mousewheel: true,
  parallax: true,
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    700: {
      slidesPerView: 3.5,
      spaceBetween: 60,
    }
  }
})
const sliderBg = new Swiper('.slider__bg', {
  freeMode: true,
  centeredSlides: true,
  mousewheel: true,
  parallax: true,
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    700: {
      slidesPerView: 3.5,
      spaceBetween: 60,
    }
  }
})

sliderMain.controller.control = sliderBg

const slider__item = document.querySelectorAll('.slider__item');

slider__item.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('opened')
  })
});

const works__item = document.querySelector('.works__item');

sliderMain.on('slideChange', () => {
  sliderMain.activeIndex > 0 ? works__item.classList.add('hidden') : works__item.classList.remove('hidden')
});

//? effects for home page
const home__description__span = document.querySelector('.home__description__span');
const home__title__span = document.querySelector('.home__title__span');

//? navbar
const header__two = document.querySelector('.header__two');
const header__one = document.querySelector('.header__one');
const header__a = document.querySelectorAll('.header__a');

header__one.addEventListener('click', () => {
  header__two.classList.toggle('header__work');
  body.classList.toggle('hidd')
});

header__a.forEach(a => {
  a.addEventListener('click', () => {
    header__two.classList.remove('header__work');
  })
});

//? copy email
const contact__email = document.querySelector('.contact__email');

contact__email.addEventListener('click', () => {
  text = contact__email.innerHTML;
  console.log(text)

  // text.select();
  // document.execCommand("copy");

  text.clipboardData
});

//? change cursor
// const cursor = document.querySelector(".cursor"); // #1

//     const mouseMove = function (e) { // #2
//     let x = e.clientX;
//     let y = e.clientY;
//     cursor.style.left = x-25 + "px";
//     cursor.style.top = y-25 + "px";
// };

// document.addEventListener("mousemove", mouseMove); // #3    