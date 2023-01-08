
//more_podcasts

const morePodcasts = document.querySelectorAll('.podcasts__item');
const moreBtn = document.querySelector('#more_podcasts_btn');

const showPodcasts = (count) => {
    for (let i = 0; i < count; i++) {
      morePodcasts[i].classList.add('is_active');
    }
}

const width = document.documentElement.offsetWidth;

if (width > 1024) {
  showPodcasts(8);
}

if (width < 768) {
  showPodcasts(4);
}

  moreBtn.addEventListener('click', function() {
    morePodcasts.forEach(function(card) {
      card.classList.add('is_active')
    });
    moreBtn.remove();
  });

//select

const element = document.querySelector('#selectCustom')
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '', 
})


//form


new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 12,
    },
  
    mail: {
      required: true,
      email: true
    },
  
  },
  
  messages: {
    name: 'Ошибка',
    mail: 'Ошибка',
  },
  
  colorWrong: '#FF6F6F'
  
  })

//accordion
 $(function () {
 $("#accordion").accordion({
  heightStyle: 'content',
 });
 });

 const swiper = new Swiper('.us__mid', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1161: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    1301: {
      slidesPerView: 4,
      spaceBetween: 30
    },
  },

  navigation: {
    nextEl: '.us__arrow_next',
    prevEl: '.us__arrow_prev',
  },
});


//burger

let burder = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menu2 = document.querySelector('.header__menu');

burder.addEventListener('click',function () {
  burder.classList.toggle('burger-active');

  menu.classList.toggle('header__nav--active');
  menu2.classList.toggle('header__nav--active');

});

let playBtn = document.querySelector('.icon_btn__play_320 ');
let block = document.querySelector('.header__menu320');

playBtn.addEventListener('click',
function () {
  playBtn.classList.toggle('icon_btn__play_320--active');

  block.classList.toggle('header__menu320--active');
});